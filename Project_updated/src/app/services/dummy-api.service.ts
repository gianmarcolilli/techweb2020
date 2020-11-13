import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Storia } from '../interfaces/storia';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class DummyApiService {



  constructor(public http: HttpClient, private router:Router) { }

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

  addNewStory(title:string, didascalia:string, fasciaEta:string, image:File) {
    const storyData = new FormData();
    storyData.append("title", title);
    storyData.append("didascalia", didascalia);
    storyData.append("fasciaEta", fasciaEta);
    storyData.append("image", image, title);
    this.http
      .post<{message:string, storia: Storia}>(
        "http://localhost:3000/api/posts/",
        storyData
      )
      .subscribe(responseData=>{
        this.router.navigate(["/"]);
      });
}

  // get
  getStories(): Observable<any> {
    return this.http.get('http://localhost:3000/api/stories/');
  }

  getStoria(id:number): Observable<any>{
    return this.http.get("https://sheet.best/api/sheets/8993a7e2-11f8-476b-8495-98e00fcfd75e")
  }


  //put

  updateStoria(storia:Storia):Observable<any>{
    return this.http.put("",storia)
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
