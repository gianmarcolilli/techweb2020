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
    // this.avviaLoading()
    // this.apiDb.getStories().subscribe(
    //   (res) => {
    //     if( res && res.length > 0){
    this.storie.forEach((element) => {
      if (element.id == valore) {
        //element è la nostra storia
        this.id = element.id
        this.title = element.nome
        this.urlIconaPrincip = element.urlBackground
        this.didascalia = element.didascalia
        this.steps = element.steps
        this.startText = element.startText
      }
    });
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
    this.currentStepId = 1




  }


  gestisciAvanzamento() {
    if (this.currentStepId == -1) return

    if (this.steps[this.currentStepId].action == "clickToGo") {
      this.currentStepId = this.steps[this.currentStepId].correctId
    }
  }


}
// 'clickToGo' 'clickToObject', 'yOnAnswer','dragToRightPos','question"
