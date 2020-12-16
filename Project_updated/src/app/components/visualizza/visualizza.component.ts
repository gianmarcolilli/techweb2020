import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  storia: Storia;


  //form
  tempRisposta: string = ""
  idPartita = -1;
  constructor(private activeRoute: ActivatedRoute, private apiDb: DummyApiService) { }

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

            // if(res.currentStepId && this.currentStepId!=res.currentStepId){
            //   alert('Compagno andato avanti')
            //   this.currentStepId=res.currentStepId
            // }
            if (res.nextStepId != -1) { // modifica con -> currnt della risposta deve essere diverso del tuo current locale, allora entri
              alert('Compagno andato avanti')
              this.apiDb.updateGame(this.idPartita, res.nextStepId, this.storia)
              //forse era meglio metter qui la conta
              //if(conta=numGiocatori){
              //   avanti
              // }
            }
          },
          error => { }
        );
    }

    this.id = this.activeRoute.snapshot.params.id;
    this.refresh()
    // effettuare la chiamata al db( passando dal servizio dummy-api)
  }


  iniziaStep() {
    if (this.idPartita != -1) {
      this.currentStepId = 0
    } else {
      this.apiDb.updateGame(this.idPartita, 0, this.storia)
    }
  }
  // gestisciQuiz(id) {
  //   let correctQuizResp = this.steps[this.currentStepId].quizCorrectIdx

  //   if (id == correctQuizResp) {
  //     console.log("grande fratello");
  //     this.currentStepId = this.steps[this.currentStepId].correctId
  //   } else {
  //     console.log("sei una lota");
  //     this.currentStepId = this.steps[this.currentStepId].wrongId

  //   }
  // }

  // rispondiDomanda() {

  //   console.log("sto confrontando questo :" + this.tempRisposta)
  //   console.log("con questo  :" + this.steps[this.currentStepId].risposta)



  //   if (this.tempRisposta.trim() == this.steps[this.currentStepId].risposta.trim()) {
  //     alert("hai dato la risposta corretta")
  //     this.currentStepId = this.steps[this.currentStepId].correctId
  //     // this.currentStepId = this.steps[this.currentStepId].correctId;
  //   } else {
  //     alert("hai dato la risposta sbagliata")
  //     this.currentStepId = this.steps[this.currentStepId].wrongId
  //   }

  //   this.tempRisposta = ""
  // }

  // step 1 :

  notificaAvanzamento(nextStepId) {
    this.apiDb.updateGame(this.idPartita, nextStepId, this.storia)
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
        this.notificaAvanzamento(this.steps[this.currentStepId].correctId)
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
            this.notificaAvanzamento(this.steps[this.currentStepId].correctId)
          }

        } else {
          alert("hai dato la risposta sbagliata")
          if (this.idPartita == -1) {
            this.currentStepId = this.steps[this.currentStepId].wrongId
          } else {
            console.log("sto per far diventare lo step corrente " + this.steps[this.currentStepId].wrongId)
            this.notificaAvanzamento(this.steps[this.currentStepId].wrongId)
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
            this.notificaAvanzamento(this.steps[this.currentStepId].correctId)
          }
        } else {
          console.log("sei una lota");
          if (this.idPartita == -1) {
            this.currentStepId = this.steps[this.currentStepId].wrongId
          } else {
            console.log("sto per far diventare lo step corrente " + this.steps[this.currentStepId].wrongId)
            this.notificaAvanzamento(this.steps[this.currentStepId].wrongId)
          }

        }
      }

      return
    }

  }


}
// 'clickToGo' 'clickToObject', 'yOnAnswer','dragToRightPos','question"
