import { Component, Injectable, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { interval, of } from 'rxjs';
import { startWith, switchMap, take } from 'rxjs/operators';
import { Step, Storia } from 'src/app/interfaces/storia';
import { DummyApiService } from 'src/app/services/dummy-api.service';
import { NgForm } from "@angular/forms";
import { mimeType } from '../visualizza/mime-type.validator';
import { timer } from 'rxjs';

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

    if (this.idPartita != -1) {
      interval(1000) // run every 2000 millisecond
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

            if (this.currentStepId != res.currentStepId) {
              this.currentStepId = res.currentStepId
              this.nextStepId = res.nextStepId
              this.hoDatoOk = false
              this.hoProcedutoIo = false
              return;
            }

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

  fine(form: NgForm) {
    this.router.navigateByUrl("classifica")
  }


  notificaAvanzamento(nextStepId: number) {
    this.apiDb.updateGame(this.idPartita, nextStepId, this.punteggio).subscribe();
    this.nextStepId = nextStepId;
  }

  gestisciPunteggio(timer: number) {
    if (timer == NaN || timer == undefined || timer == null) return

    // if (this.currentStepId == 0) return 0;
    if (this.storia.steps[this.currentStepId].action == "informazione") return 0;
    if (this.nextStepId == this.steps[this.currentStepId].correctId) return (50 / timer)
    if (this.nextStepId == this.steps[this.currentStepId].wrongId) return -(timer / 50);
  }

  resetStepTimer() {
    let oldTimer = this.stepStartAt;
    this.stepStartAt = Date.now()
    return (this.stepStartAt - oldTimer) / 1000
  }

  array(length) {
    return Array(length)
  }


  gestisciAvanzamento(idQuiz) {

    // assegnare il punteggio



    console.log("step corrente: " + this.currentStepId)
    if (this.currentStepId == -1) return

    if (this.storia.steps[this.currentStepId].action == "informazione" || this.storia.steps[this.currentStepId].action == "puzzle" || this.storia.steps[this.currentStepId].action == "dnd") {
      //Avanzamento in gioco modalità singolo
      if (this.idPartita == -1) {
        this.currentStepId = this.steps[this.currentStepId].correctId
        var tempoImpiegato = this.resetStepTimer();
        console.log("impiegati " + tempoImpiegato + " secondi.");
        this.punteggio = this.punteggio + this.gestisciPunteggio(tempoImpiegato);
        // var timeS = Date.now();
        // console.log(Date.now())
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
      //Avanzamento in gioco modalità singolo
      if (this.storia.steps[this.currentStepId].action == "domanda") {
        console.log("sto confrontando questo :" + this.tempRisposta)
        console.log("con questo  :" + this.steps[this.currentStepId].risposta)

        if (this.tempRisposta.trim().toLowerCase() == this.steps[this.currentStepId].risposta.trim().toLowerCase()) {
          alert("hai dato la risposta corretta")
          if (this.idPartita == -1) {
            this.currentStepId = this.steps[this.currentStepId].correctId
          } else {
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
          if (this.idPartita == -1) {
            this.currentStepId = this.steps[this.currentStepId].wrongId
          } else {
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
          console.log("grande fratello");
          if (this.idPartita == -1) {
            this.currentStepId = this.steps[this.currentStepId].correctId
          } else {
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
          console.log("sei una lota");
          if (this.idPartita == -1) {
            this.currentStepId = this.steps[this.currentStepId].wrongId
          } else {
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
// 'clickToGo' 'clickToObject', 'yOnAnswer','dragToRightPos','question"
