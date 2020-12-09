import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  steps: any[] = [];
  currentStepId = -1;
  storia = null;


  //form
  tempRisposta : string = ""


  storie = [
    {
      id: 0,
      nome: 'Evoluzione dell\'uomo',
      didascalia: "Ci troviamo 4 milioni di anni fa e sappiamo che nella scala evolutiva dell’uomo c\'&egrave una figura che intercorre tra la scimmia e l’homo sapiens.",
      urlBackground: 'https://image.shutterstock.com/image-photo/background-yellow-color-260nw-339630764.jpg',
      startText: "Comincia",
      steps: [
        {
          numeroStep: 0,
          titleStep: 'Quale è la figura?',
          action: 'clickToGo',
          backImg: "string",
          actionImg: "",
          answers: [' australopiteco', 'uomo di neandertal']
        },
        {
          numeroStep: 1,
          correct: 9,
          wrong:1,
          titleStep: 'siamo nello step due ?',
          action: '4answers',
          backImg: "string",
          actionImg: "",
          answers: [
            {
              content: ' australopiteco',
              correct: true
            }, {
              content: ' scimmia',
              correct: false
            }

          ]
        }
      ]
    }
  ]
  constructor(private activeRoute: ActivatedRoute, private apiDb: DummyApiService) { }

  refresh() {
    let valore = this.id;
    this.apiDb.getStoria(valore).subscribe(
      (storia)=>{
        this.storia=storia
        console.log("la mia storia è "+JSON.stringify(storia))
        this.id = this.storia.id
        this.title = this.storia.title
        this.didascalia = this.storia.didascalia
        this.steps = this.storia.attivita
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
    this.id = this.activeRoute.snapshot.params.id;
    this.refresh()
    // effettuare la chiamata al db( passando dal servizio dummy-api)
  }


  iniziaStep() {
    this.currentStepId = 0

  }
  gestisciQuiz(id){
     let correctQuizResp = this.steps[this.currentStepId].quizCorrectIdx

     if(id==correctQuizResp){
       console.log("grande fratello");
       this.currentStepId=this.steps[this.currentStepId].correctId
     } else {
       console.log("sei una lota");
       this.currentStepId=this.steps[this.currentStepId].wrongId

     }
  }

  rispondiDomanda(){

    console.log("sto confrontando questo :" + this.tempRisposta)
    console.log("con questo  :" + this.steps[this.currentStepId].risposta)



    if(this.tempRisposta.trim() == this.steps[this.currentStepId].risposta.trim()){
      alert("hai dato la risposta corretta")
      this.currentStepId =  this.steps[this.currentStepId].correctId
      // this.currentStepId = this.steps[this.currentStepId].correctId;
    }else{
    alert("hai dato la risposta sbagliata")
       this.currentStepId = this.steps[this.currentStepId].wrongId
    }

     this.tempRisposta = ""
  }

  gestisciAvanzamento() {
    if (this.currentStepId == -1) return

    if (this.steps[this.currentStepId].action == "informazione") {
      let mystep = parseInt(this.currentStepId.toString())
      console.log("sto per far diventare lo step corrente " + this.steps[mystep].correctId)

      this.currentStepId = this.steps[mystep].correctId
      return
    }
      if (this.steps[this.currentStepId].action == "puzzle") {
        this.currentStepId = this.steps[this.currentStepId].correctId
      }

  }


}
// 'clickToGo' 'clickToObject', 'yOnAnswer','dragToRightPos','question"
