import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { Step, Storia } from 'src/app/interfaces/storia';
import { DummyApiService } from 'src/app/services/dummy-api.service';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-visualizza',
  templateUrl: './visualizza.component.html',
  styleUrls: ['./visualizza.component.scss']
})

@Injectable()
export class VisualizzaComponent implements OnInit {

  id: number;
  title = "";
  urlIconaPrincip: string = "";
  didascalia: string = "";
  startText: string = "";
  steps: Step[] = [];
  currentStepId = -1;
  nextStepId = -1;
  storia: Storia;

  hoDatoOk = false;
  hoProcedutoIo = false;
  variabileOk = 0;
  numeroPlayers = 0
  arrayPlayers = [];

  stop: boolean = false;

  tempRisposta: string = ""
  idPartita = -1;

  punteggio = 0;
  tempPunteggio: number;
  tempTimer: any;
  timestampGlobale: number = Date.now();
  stepStartAt: number;

  constructor(private activeRoute: ActivatedRoute, private apiDb: DummyApiService, private router: Router) { }

  //Metodo refresh della storia tramite get del servizio dummyApi.
  //Questo metodo ha la funzione di rimanere in ascolto di eventuali modifiche lato database e permette ai players di visualizzare gli avanzamenti di squadra.
  refresh() {
    this.apiDb.getStoria(this.id).subscribe(
      (singleStory) => {
        this.storia = this.apiDb.reMap(singleStory);
        this.steps = this.storia.steps
        console.log("la mia storia è" + JSON.stringify(this.storia))
      }
    )
  }


  ngOnInit(): void {
    this.stepStartAt = Date.now()
    this.resetStepTimer();

    if (this.activeRoute.snapshot.params.partita) {
      this.idPartita = this.activeRoute.snapshot.params.partita;
    }

    //Quando la partita è in modalità gruppo o classe, attraverso la tecnica del polling vengono agiornati dati interrogando il server ogni secondo (1000 millisecondi)
    if (this.idPartita != -1) {
      interval(1000) // run every 1000 millisecond
        .pipe(
          startWith(0),
          switchMap((res, i) => {
            return this.apiDb.getGame(this.idPartita)
          })
        )
        .subscribe(
          res => {

            if (!res) return;
            this.numeroPlayers = res.numeroPlayer
            this.arrayPlayers = this.array(res.numeroPlayer)
            this.variabileOk = res.variabileOk
            this.punteggio = res.score

            //Se lo step corrente cambia a database a seguito di un update da parte di altro player, il giocatore modifica in locale i dati aggiornati
            if (this.currentStepId != res.currentStepId) {
              this.currentStepId = res.currentStepId
              this.nextStepId = res.nextStepId
              this.hoDatoOk = false
              this.hoProcedutoIo = false
              return;
            }

            //Nel caso in cui uno dei compagni ha fornito una risposta prima di me ottengo da database punteggio e prossimo step,
            //mi metto in attesa degli altri player attraverso la variabile locale hoDatoOk
            if (this.nextStepId != res.nextStepId && this.hoDatoOk == false && this.hoProcedutoIo == false && this.stop == false) {
              this.stop = true
              alert('compagno andato avanti! vuoi andare avanti anche tu?')
              this.apiDb.updateGame(this.idPartita, res.nextStepId, this.punteggio).subscribe((risp: any) => {
                console.log(risp);
                this.hoDatoOk = true
                this.nextStepId = risp.result.nextStepId
                this.stop = false
              })
              return;
            }

            if (this.hoProcedutoIo == true && this.nextStepId == res.nextStepId && this.hoDatoOk == true && this.stop == true) {
              var timeS = Date.now();
              this.stop = false
              return;
            }

            //Se tutti i player hanno dato Ok allora il visualizza carica localmente anche id dello step corrente
            if (res.numeroPlayer == res.variabileOk && this.stop == false) {
              console.log('daje');
              this.stop = true
              this.apiDb.updateGame(this.idPartita, res.nextStepId, this.punteggio).subscribe((risp: any) => {
                this.currentStepId = risp.result.currentStepId
                this.nextStepId = risp.result.nextStepId
                this.hoDatoOk = false
                this.hoProcedutoIo = false
                this.stop = false
              });
              this.refresh();
              return;
            }

          },
          error => { }
        );
    }

    this.id = this.activeRoute.snapshot.params.id;
    this.refresh()
  }

  //Metodo che gestisce l' inizia partita dallo step zero
  iniziaStep() {
    if (this.idPartita == -1) {
      this.currentStepId = 0
    } else {
      this.stop = true
      this.hoProcedutoIo = true
      this.hoDatoOk = true

      this.notificaAvanzamento(0)
    }
  }

  //Metodo che
  fine(form: NgForm) {
    this.router.navigateByUrl("classifica")
  }

  //Metodo di update dell' id del prossimo step su database.
  //Questo metodo viene utilizzato dal gestisciAvanzamento() che si occupa di individuare l' id dell prossimo Step.
  notificaAvanzamento(nextStepId: number) {
    this.apiDb.updateGame(this.idPartita, nextStepId, this.punteggio).subscribe();
    this.nextStepId = nextStepId;
  }

  //Metodo impiegato per calcolare il punteggio.
  //Lo score assegnato è in forma di bonus in caso di risposta corretta, in forma di malus in caso di risposta sbagliata. Nel caso di squadra vale come risposta quella del primo player a risponderee/o completare puzzle/dnd
  //Bonus e malus sono resi proporzionali al timer: quanto più veloce a rispondere correttamente, quanto meno veloce a rispondere scorrettamente.
  gestisciPunteggio(timer: number) {
    if (timer == NaN || timer == undefined || timer == null) return
    // if (this.currentStepId == 0) return 0;
    if (this.storia.steps[this.currentStepId].action == "informazione") return 0;
    if (this.nextStepId == this.steps[this.currentStepId].correctId) return (50 / timer)
    if (this.nextStepId == this.steps[this.currentStepId].wrongId) return -(timer / 50);
  }

  //Metodo che restituisce l' intervallo tra inizio e fine step in secondi (/1000)
  resetStepTimer() {
    let oldTimer = this.stepStartAt;
    this.stepStartAt = Date.now()
    return (this.stepStartAt - oldTimer) / 1000
  }

  //Metodo che restituisce un array di dimensione data, impiegato nel nostro caso per costituire un array di player in base a quanto selezionato dallo user
  array(length) {
    return Array(length)
  }

  //Metodo di valutazione della risposta forita dall' utente.
  //Questo metodo valuta nel primo if se la risposta fornita dall' utente è di tipo "purchessia(presenza/assenza)", nel nostro caso contrassegnata con 'right'
  //Secondo if effetua un controllo sulla presenza o meno della risposta in una lista di valori
  valutaDomanda(): boolean {
    if (this.steps[this.currentStepId].tipoDomanda == 'right') {
      return true
    }
    if (this.steps[this.currentStepId].tipoDomanda == 'array') {
      for (let i = 0; i < this.steps[this.currentStepId].risposteDomanda.length; i++) {
        if (this.tempRisposta.toLowerCase() == this.steps[this.currentStepId].risposteDomanda[i].toLowerCase()) {
          return true
        }
      }
    }
    return false;
  }

  //Metodo di gestione avanzamento agli step della storia differenziata a seconda della modalita (singolo o altro), tipologia (informazione, puzzle, domanda, ecc.)
  //Il metodo inoltre abbina alla gestione degli id anche la gestione del timer e del punteggio
  gestisciAvanzamento(idQuiz) {
    // assegnare il punteggio
    console.log("step corrente: " + this.currentStepId)
    if (this.currentStepId == -1) return

    if (this.storia.steps[this.currentStepId].action == "informazione" || this.storia.steps[this.currentStepId].action == "puzzle" || this.storia.steps[this.currentStepId].action == "dnd") {
      //Avanzamento in gioco modalità singolo
      if (this.idPartita == -1) {
        this.nextStepId = this.steps[this.currentStepId].correctId
        var tempoImpiegato = this.resetStepTimer();
        console.log("impiegati " + tempoImpiegato + " secondi.");
        this.punteggio = this.punteggio + this.gestisciPunteggio(tempoImpiegato);
        this.currentStepId = this.steps[this.currentStepId].correctId
      } else {
        //Avanzamento gioco in modalità squadre
        console.log("sto per far diventare lo step corrente " + this.steps[this.currentStepId].correctId)
        this.nextStepId = this.steps[this.currentStepId].correctId;
        this.stop = true
        this.hoProcedutoIo = true
        this.hoDatoOk = true
        var tempoImpiegato = this.resetStepTimer();
        console.log("impiegati " + tempoImpiegato + " secondi.");
        this.punteggio = this.punteggio + this.gestisciPunteggio(tempoImpiegato);
        this.notificaAvanzamento(this.nextStepId)
      }

      return;
    }
    if (this.storia.steps[this.currentStepId].action == "domanda" || this.storia.steps[this.currentStepId].action == "quiz") {

      if (this.storia.steps[this.currentStepId].action == "domanda") {
        console.log("sto confrontando questo :" + this.tempRisposta)
        console.log("con questo  :" + this.steps[this.currentStepId].risposteDomanda)

        if (this.valutaDomanda()) {
          alert("hai dato la risposta corretta")
          //Avanzamento in gioco modalità singolo)
          if (this.idPartita == -1) {
            this.nextStepId = this.steps[this.currentStepId].correctId
            var tempoImpiegato = this.resetStepTimer();
            console.log("impiegati " + tempoImpiegato + " secondi.");
            this.punteggio = this.punteggio + this.gestisciPunteggio(tempoImpiegato);
            this.currentStepId = this.steps[this.currentStepId].correctId
          } else {
            //Avanzamento gioco in modalità squadre
            console.log("sto per far diventare lo step corrente " + this.steps[this.currentStepId].correctId)
            this.nextStepId = this.steps[this.currentStepId].correctId;
            this.stop = true
            this.hoProcedutoIo = true
            this.hoDatoOk = true
            var tempoImpiegato = this.resetStepTimer();
            console.log("impiegati " + tempoImpiegato + " secondi.");
            this.punteggio = this.punteggio + this.gestisciPunteggio(tempoImpiegato);
            this.notificaAvanzamento(this.nextStepId)
          }

        } else {
          alert("hai dato la risposta sbagliata")
          //Avanzamento gioco in modalità individuale
          if (this.idPartita == -1) {
            this.nextStepId = this.steps[this.currentStepId].wrongId
            var tempoImpiegato = this.resetStepTimer();
            console.log("impiegati " + tempoImpiegato + " secondi.");
            this.punteggio = this.punteggio + this.gestisciPunteggio(tempoImpiegato);
            this.currentStepId = this.steps[this.currentStepId].wrongId
          } else {
            //Avanzamento gioco in modalità squadre
            console.log("sto per far diventare lo step corrente " + this.steps[this.currentStepId].wrongId)
            this.nextStepId = this.steps[this.currentStepId].wrongId;
            this.stop = true
            this.hoProcedutoIo = true
            this.hoDatoOk = true
            var tempoImpiegato = this.resetStepTimer();
            console.log("impiegati " + tempoImpiegato + " secondi.");
            this.punteggio = this.punteggio + this.gestisciPunteggio(tempoImpiegato);
            this.notificaAvanzamento(this.nextStepId)
          }
        }

        this.tempRisposta = ""
      }
      if (this.storia.steps[this.currentStepId].action == "quiz") {
        let correctQuizResp = this.steps[this.currentStepId].quizCorrectIdx

        if (idQuiz == correctQuizResp) {
          //Avanzamento gioco in modalità individuale
          if (this.idPartita == -1) {
            this.nextStepId = this.steps[this.currentStepId].correctId
            var tempoImpiegato = this.resetStepTimer();
            console.log("impiegati " + tempoImpiegato + " secondi.");
            this.punteggio = this.punteggio + this.gestisciPunteggio(tempoImpiegato);
            this.currentStepId = this.steps[this.currentStepId].correctId
          } else {
            //Avanzamento gioco in modalità squadre
            console.log("sto per far diventare lo step corrente " + this.steps[this.currentStepId].correctId)
            this.nextStepId = this.steps[this.currentStepId].correctId;
            this.stop = true
            this.hoProcedutoIo = true
            this.hoDatoOk = true
            var tempoImpiegato = this.resetStepTimer();
            console.log("impiegati " + tempoImpiegato + " secondi.");
            this.punteggio = this.punteggio + this.gestisciPunteggio(tempoImpiegato);
            this.notificaAvanzamento(this.nextStepId)
          }
        } else {
          //Avanzamento gioco in modalità individuale
          if (this.idPartita == -1) {
            this.nextStepId = this.steps[this.currentStepId].wrongId
            var tempoImpiegato = this.resetStepTimer();
            console.log("impiegati " + tempoImpiegato + " secondi.");
            this.punteggio = this.punteggio + this.gestisciPunteggio(tempoImpiegato);
            this.currentStepId = this.steps[this.currentStepId].wrongId
          } else {
            //Avanzamento gioco in modalità squadre
            console.log("sto per far diventare lo step corrente " + this.steps[this.currentStepId].wrongId)
            this.nextStepId = this.steps[this.currentStepId].wrongId;
            this.stop = true
            this.hoProcedutoIo = true
            this.hoDatoOk = true
            var tempoImpiegato = this.resetStepTimer();
            console.log("impiegati " + tempoImpiegato + " secondi.");
            this.punteggio = this.punteggio + this.gestisciPunteggio(tempoImpiegato);
            this.notificaAvanzamento(this.nextStepId)
          }
        }
      }
    }
    return;
  }
}
