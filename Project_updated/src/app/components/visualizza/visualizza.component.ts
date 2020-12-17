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
  hoDatoOk=false;
  variabileOk=0;

  //form
  tempRisposta: string = ""
  idPartita = -1;
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
      interval(1000) // run every 1 second
        .pipe(
          startWith(0),
          switchMap((res, i) => {
            return this.apiDb.getGame(this.idPartita)
          })
        )
        .subscribe(
          res => {
            if (!res) return;

            if (res.nextStepId != this.nextStepId && this.hoDatoOk==false && res.variabileOk > 0) { // modifica con -> currnt della risposta deve essere diverso del tuo current locale, allora entri
              alert('Compagno andato avanti');
              this.hoDatoOk=true;
              this.apiDb.updateGame(this.idPartita, res.nextStepId).subscribe(response => {
              });
            }

            if(this.nextStepId==0 && res.nextStepId==0 && this.hoDatoOk==false){
              alert('sono stato il primo');
              this.hoDatoOk=true
              this.apiDb.updateGame(this.idPartita, this.nextStepId).subscribe(response => {
              });
            }

            if (res.variabileOk == 0 && this.hoDatoOk==false && this.nextStepId==res.nextStepId &&this.nextStepId!=-1) {
              alert('io sono andato avanti');
              this.hoDatoOk=true;
              this.apiDb.updateGame(this.idPartita, this.nextStepId).subscribe(response => {
              });
            }

            if(res.numeroPlayer==res.variabileOk){
              this.hoDatoOk=false
              this.apiDb.updateGame(this.idPartita, this.nextStepId).subscribe(response => {
              });
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
      this.apiDb.getGame(this.idPartita).subscribe(
        response => {
          this.variabileOk=response.variabileOk;
          if (this.variabileOk==0) {
            this.nextStepId=0;
            this.apiDb.updateGame(this.idPartita, 0).subscribe(res => {
            });

          }else{
            this.nextStepId=response.nextStepId;
            this.apiDb.updateGame(this.idPartita, this.nextStepId).subscribe(res => {
            });
          }
        }
      )
    }
  }


  notificaAvanzamento(nextStepId) {
    this.apiDb.updateGame(this.idPartita, nextStepId).subscribe(response => {
    });
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
        this.nextStepId=this.steps[this.currentStepId].correctId;
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
            this.nextStepId=this.steps[this.currentStepId].correctId;
            this.notificaAvanzamento(this.nextStepId)
          }

        } else {
          alert("hai dato la risposta sbagliata")
          if (this.idPartita == -1) {
            this.currentStepId = this.steps[this.currentStepId].wrongId
          } else {
            console.log("sto per far diventare lo step corrente " + this.steps[this.currentStepId].wrongId)
            this.nextStepId=this.steps[this.currentStepId].wrongId;
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
            this.nextStepId=this.steps[this.currentStepId].correctId;
            this.notificaAvanzamento(this.nextStepId)
          }
        } else {
          console.log("sei una lota");
          if (this.idPartita == -1) {
            this.currentStepId = this.steps[this.currentStepId].wrongId
          } else {
            console.log("sto per far diventare lo step corrente " + this.steps[this.currentStepId].wrongId)
            this.nextStepId=this.steps[this.currentStepId].wrongId;
            this.notificaAvanzamento(this.nextStepId)
          }
        }
      }
      return
    }
  }
}
// 'clickToGo' 'clickToObject', 'yOnAnswer','dragToRightPos','question"
