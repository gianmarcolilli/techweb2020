import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { interval, of } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { Step, Storia } from 'src/app/interfaces/storia';
import { DummyApiService } from 'src/app/services/dummy-api.service';
import { mimeType } from '../visualizza/mime-type.validator';

@Component({
  selector: 'app-visualizza',
  templateUrl: './visualizza.component.html',
  styleUrls: ['./visualizza.component.css']
})

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
  numeroPlayers = 0;

  //form
  tempRisposta: string = ""
  idPartita = -1;
  stop: boolean = false;
  constructor(private activeRoute: ActivatedRoute, private apiDb: DummyApiService, private router: Router) { }

  refresh() {
    this.apiDb.getStoria(this.id).subscribe(
      // (storia) => {
      //   this.storia = storia
      //   console.log("la mia storia è " + JSON.stringify(storia))
      //   this.id = this.storia.id
      //   this.title = this.storia.nome
      //   this.didascalia = this.storia.didascalia
      //   this.steps = this.storia.steps
      //   this.urlIconaPrincip = this.storia.urlBackground
      // }
      (singleStory) => {
        this.storia = this.apiDb.reMap(singleStory);
        this.steps = this.storia.steps
        console.log("la mia storia è" + JSON.stringify(this.storia))
      }
    )
  }

  ngOnInit(): void {
    if (this.activeRoute.snapshot.params.partita) {
      this.idPartita = this.activeRoute.snapshot.params.partita;
    }

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
            this.variabileOk = res.variabileOk



            if (this.nextStepId != res.nextStepId && this.hoDatoOk == false && this.hoProcedutoIo == false && this.stop == false) {
              this.stop = true
              alert('compagno andato avanti! vuoi andare avanti anche tu?')
              this.apiDb.updateGame(this.idPartita, res.nextStepId).subscribe((risp: any) => {
                console.log(risp);
                this.hoDatoOk = true
                this.nextStepId = res.nextStepId
                this.stop = false
              })
              // this.variabileOk
              return;
            }

            if (this.hoProcedutoIo == true && this.nextStepId == res.nextStepId && this.hoDatoOk == true && this.stop == true) {
              alert('ho cliccato procedi per primo')
              this.stop = false
              return;
            }

            if (res.numeroPlayer == res.variabileOk && this.stop == false) {​​

              this.stop = true
              this.apiDb.updateGame(this.idPartita, res.nextStepId).subscribe(() => {​​

                this.hoDatoOk = false
                this.hoProcedutoIo = false
                this.stop = false
              }​​);
              this.currentStepId = res.currentStepId
              return
            }​​

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


  notificaAvanzamento(nextStepId: number) {
    this.apiDb.updateGame(this.idPartita, nextStepId).subscribe();
    this.nextStepId = nextStepId;
  }

  gestisciAvanzamento(idQuiz) {
    if (this.currentStepId == -1) return

    if (this.storia.steps[this.currentStepId].action == "informazione" || this.storia.steps[this.currentStepId].action == "puzzle") {
      //Avanzamento in gioco modalità singolo
      if (this.idPartita == -1) {
        this.currentStepId = this.steps[this.currentStepId].correctId
      } else {
        //Avanzamento gioco in modalità squadre
        console.log("sto per far diventare lo step corrente " + this.steps[this.currentStepId].correctId)
        this.nextStepId = this.steps[this.currentStepId].correctId;
        this.hoProcedutoIo == true
        this.notificaAvanzamento(this.nextStepId)
      }
      return
    }
    if (this.storia.steps[this.currentStepId].action == "domanda" || this.storia.steps[this.currentStepId].action == "quiz") {
      //Avanzamento in gioco modalità singolo
      if (this.storia.steps[this.currentStepId].action == "domanda") {
        console.log("sto confrontando questo :" + this.tempRisposta)
        console.log("con questo  :" + this.steps[this.currentStepId].risposta)



        if (this.tempRisposta.trim() == this.steps[this.currentStepId].risposta.trim()) {
          alert("hai dato la risposta corretta")
          if (this.idPartita == -1) {
            this.currentStepId = this.steps[this.currentStepId].correctId
          } else {
            console.log("sto per far diventare lo step corrente " + this.steps[this.currentStepId].correctId)
            this.nextStepId = this.steps[this.currentStepId].correctId;
            this.hoProcedutoIo == true
            this.notificaAvanzamento(this.nextStepId)
          }

        } else {
          alert("hai dato la risposta sbagliata")
          if (this.idPartita == -1) {
            this.currentStepId = this.steps[this.currentStepId].wrongId
          } else {
            console.log("sto per far diventare lo step corrente " + this.steps[this.currentStepId].wrongId)
            this.nextStepId = this.steps[this.currentStepId].wrongId;
            this.hoProcedutoIo == true
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
            this.hoProcedutoIo == true
            this.notificaAvanzamento(this.nextStepId)
          }
        } else {
          console.log("sei una lota");
          if (this.idPartita == -1) {
            this.currentStepId = this.steps[this.currentStepId].wrongId
          } else {
            console.log("sto per far diventare lo step corrente " + this.steps[this.currentStepId].wrongId)
            this.nextStepId = this.steps[this.currentStepId].wrongId;
            this.hoProcedutoIo == true
            this.notificaAvanzamento(this.nextStepId)
          }
        }
      }
      return
    }
  }
}
// 'clickToGo' 'clickToObject', 'yOnAnswer','dragToRightPos','question"
