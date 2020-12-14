import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval, of } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { Step, Storia } from 'src/app/interfaces/storia';
import { DummyApiService } from 'src/app/services/dummy-api.service';

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
  steps: any[] = [];
  currentStepId = -1;
  storia:Storia = null;


  //form
  tempRisposta: string = ""
  idPartita = -1;
  constructor(private activeRoute: ActivatedRoute, private apiDb: DummyApiService) { }

  refresh() {
    let valore = this.id;
    this.apiDb.getStoria(valore).subscribe(
      (storia) => {
        this.storia = storia
        console.log("la mia storia è " + JSON.stringify(storia))
        this.id = this.storia.id
        this.title = this.storia.nome
        this.didascalia = this.storia.didascalia
        this.steps = this.storia.steps
      }
    )




    // this.avviaLoading()
    // this.apiDb.getStories().subscribe(
    //    (res) => {
    //    if( res && res.length > 0){
    // this.storie.forEach((element) => {
    //   if (element.id == valore) {
    //     //element è la nostra storia
    //     this.id = element.id
    //     this.title = element.nome
    //     this.urlIconaPrincip = element.urlBackground
    //     this.didascalia = element.didascalia
    //     this.steps = element.steps
    //     this.startText = element.startText
    //   }
    // });
  }
  // this.stoppaLoading()
  //   }
  // );

  // chiamata,
  // sottoscrizione
  // assegnamo il risultato alla nostra proprietà di classe

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
            if(!res) return;
            if(res.currentStepId && this.currentStepId!=res.currentStepId){
              alert('Compagno andato avanti')
              this.currentStepId=res.currentStepId
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
    this.currentStepId = 0

  }
  gestisciQuiz(id) {
    let correctQuizResp = this.steps[this.currentStepId].quizCorrectIdx

    if (id == correctQuizResp) {
      console.log("grande fratello");
      this.currentStepId = this.steps[this.currentStepId].correctId
    } else {
      console.log("sei una lota");
      this.currentStepId = this.steps[this.currentStepId].wrongId

    }
  }

  rispondiDomanda() {

    console.log("sto confrontando questo :" + this.tempRisposta)
    console.log("con questo  :" + this.steps[this.currentStepId].risposta)



    if (this.tempRisposta.trim() == this.steps[this.currentStepId].risposta.trim()) {
      alert("hai dato la risposta corretta")
      this.currentStepId = this.steps[this.currentStepId].correctId
      // this.currentStepId = this.steps[this.currentStepId].correctId;
    } else {
      alert("hai dato la risposta sbagliata")
      this.currentStepId = this.steps[this.currentStepId].wrongId
    }

    this.tempRisposta = ""
  }

// step 1 :

  notificaAvanzamento(){

    if(this.steps[this.currentStepId].action=="informazione"){
      this.apiDb.updateGame(this.idPartita, this.currentStepId)
    }



  }

  gestisciAvanzamento() {
    if (this.currentStepId == -1) return

    if (this.steps[this.currentStepId].action == "informazione") {
      let mystep = parseInt(this.currentStepId.toString())
      console.log("sto per far diventare lo step corrente " + this.steps[mystep].correctId)

      this.currentStepId = this.steps[mystep].correctId
      this.notificaAvanzamento()
      return
    }
    if (this.steps[this.currentStepId].action == "puzzle") {
      this.currentStepId = this.steps[this.currentStepId].correctId
    }

  }


}
// 'clickToGo' 'clickToObject', 'yOnAnswer','dragToRightPos','question"
