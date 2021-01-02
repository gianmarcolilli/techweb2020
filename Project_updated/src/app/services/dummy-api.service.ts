import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {  Storia } from '../interfaces/storia';
import { Game } from '../interfaces/game';
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


  // get
  getStories(): Observable<any> {
    return this.http.get('http://localhost:3000/api/stories/');
  }

  getStoria(id: number): Observable<any> {
    return this.http.get("http://localhost:3000/api/stories/" + id)
  }

  getGames(): Observable<any> {
    return this.http.get('http://localhost:3000/api/games/');
  }

  getGame(id: number): Observable<any> {
    return this.http.get("http://localhost:3000/api/games/" + id)
  }


  //put
  updateStoria(storia:Storia){
  this.http
    .put("http://localhost:3000/api/stories/"+storia.id, storia)
    .subscribe(response => {
      this.router.navigate(["/configura/"+storia.id]);
    });
  }

  updateGame(idPartita:number, prossimoId:number , punteggio:number){

    return this.http
      .put("http://localhost:3000/api/games/"+idPartita, {
        prossimoId: prossimoId,
        score : punteggio
      })
   }

  //post
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

  addNewGame(idSquadra:Number, idClasse:Number, idPartita:Number, numeroPlayer:Number){
    const gameData = {
      idSquadra : idSquadra,
      idClasse : idClasse,
      idPartita: idPartita,
      numeroPlayer: numeroPlayer
    }
    return this.http.post<{ message: string, game:Game }>("http://localhost:3000/api/games/", gameData)
  }

}
