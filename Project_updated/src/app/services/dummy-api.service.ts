import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Step, Storia } from '../interfaces/storia';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class DummyApiService {
  [x: string]: any;



  constructor(public http: HttpClient, private router: Router) { }

  storie = [
    {
      id: 0,
      nome: 'Evoluzione dell\'uomo',
      fasciaEta: 'fasciaUno',
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
    },
    {
      id: 1,
      nome: 'Evoluzione della donna',
      fasciaEta: 'fasciaDue',
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

  // addNewStory(storiaDaInviare):Observable<any> {
  //   return this.http.post('http://localhost:3000/api/stories/',
  //                         {
  //                           "title":storiaDaInviare.nome,
  //                           "didascalia":storiaDaInviare.didascalia,
  //                           "fasciaEta":storiaDaInviare.fasciaEta
  //                         }
  //   );
  // }



  reMap(element): Storia {
    let miaStoriaDaRitornare = {
      nome: element.title,
      id: element.id,
      didascalia: element.didascalia,
      fasciaEta: element.fasciaEta,
      urlBackground: element.image,
      steps: element.attivita
      // didascalia: string,
      // startText : string,
      // entryId : number
    }


    return miaStoriaDaRitornare;
  }
  // delete
  deleteStory(id: number) {
    return this.http.delete('http://localhost:3000/api/stories/' + id);
  }
  deleteActivity(activityId: number) {
    return this.http.delete('http://localhost:3000/api/stories/' + activityId);
  }



  addNewStory(title: string, didascalia: string, fasciaEta: string, image: string) {
    const storyData = {
      title: title,
      didascalia: didascalia,
      fasciaEta: fasciaEta,
      image: image,
      attivita: []
    }

    return this.http.post<{ message: string, storia: Storia }>("http://localhost:3000/api/stories/", storyData)
  }


  // get
  getStories(): Observable<any> {
    return this.http.get('http://localhost:3000/api/stories/');
  }

  getStoria(id: number): Observable<any> {
    return this.http.get("http://localhost:3000/api/stories/" + id)
  }


  //put

  // updateStoria(storia:Storia):Observable<any>{
  //   return this.http.put("http://localhost:3000/api/stories/",storia)
  // }
  updateStoria(storia:Storia){
  this.http
    .put("http://localhost:3000/api/stories/"+storia.id, storia)
    .subscribe(response => {
      this.router.navigate(["/"]);
    });


  }






  //post
  // mockup del metodo ancora da implementare a fondo .. aggiungere nuove storie
  // addNewStory(storia : any){


  //     let body = {
  //       id : storia.id ,
  //       name : storia.nome,
  //       sfondo : storia.sfondo
  //     }
  //       this.http.post("localhost:3000/story/"+body.id,  body )
  // }

}
