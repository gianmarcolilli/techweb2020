import { Component, Input, OnInit } from '@angular/core';
import { RESOURCE_CACHE_PROVIDER } from '@angular/platform-browser-dynamic';
import { ActivatedRoute } from '@angular/router';
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
// this.storia =  {"nome":"gio","id":"7","didascalia":"vanni","fasciaEta":"fasciaTre","urlBackground":"data:image/jpeg;base64,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","steps":[{"action":"domanda","activityId":0,"activityTitle":"domanda1","risposta":" risposta1","backImg":"","correctId":0,"wrongId":9},{"action":"domanda","activityId":1,"activityTitle":"domanda2","risposta":" risposta2","backImg":"","correctId":0,"wrongId":9},{"action":"domanda","activityId":2,"activityTitle":"domanda3","risposta":" risposta3","backImg":"","correctId":0,"wrongId":9},{"action":"domanda","activityId":3,"activityTitle":"hai finito compaaa","risposta":" grazie","backImg":"","correctId":0,"wrongId":9}]}






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


  rispondiDomanda(){

    console.log("sto confrontando questo :" + this.tempRisposta)
    console.log("con questo  :" + this.steps[this.currentStepId].risposta)



    if(this.tempRisposta.trim() == this.steps[this.currentStepId].risposta.trim()){
      alert("hai dato la risposta corretta")
      this.currentStepId =  this.steps[this.currentStepId].correctId
      // this.currentStepId = this.steps[this.currentStepId].correctId;
    }else{
    alert("hai dato la risposta sbagliata")
    // this.currentStepId == this.steps[this.currentStepId].wrongId
    }

     this.tempRisposta = ""
  }

  gestisciAvanzamento() {
    if (this.currentStepId == -1) return

    if (this.steps[this.currentStepId].action == "clickToGo") {
      this.currentStepId = this.steps[this.currentStepId].correctId

      if (this.steps[this.currentStepId].action == "puzzle") {
        this.currentStepId = this.steps[this.currentStepId].correctId
      }
    }
  }


}
// 'clickToGo' 'clickToObject', 'yOnAnswer','dragToRightPos','question"
