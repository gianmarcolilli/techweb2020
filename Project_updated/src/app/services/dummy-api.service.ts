import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Step, Storia } from '../interfaces/storia';
import { Game } from '../interfaces/game';
// import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
// import { head } from 'lodash';

@Injectable({
  providedIn: 'root'
})


export class DummyApiService {
  [x: string]: any;



  constructor(public http: HttpClient, private router: Router) { }


  reMap(element): Storia {
    let miaStoriaDaRitornare = {
      nome: element.title,
      id: element.id,
      didascalia: element.didascalia,
      fasciaEta: element.fasciaEta,
      urlBackground: element.image,
      steps: element.attivita
    }


    return miaStoriaDaRitornare;
  }

  reMapForDownload(element) {
    let miaStoriaDaRitornare = {
      title: element.title,
      id: element.id,
      didascalia: element.didascalia,
      fasciaEta: element.fasciaEta,
      image: element.image,
      attivita: this.reMapActivityForDownload(element.attivita)
    }
    return miaStoriaDaRitornare;
  }

  reMapActivityForDownload(element: Array<Step>) {

    for (let i = 0; i < element.length; i++) {

      element[i] = {
        activityId: element[i].activityId,
        activityTitle: element[i].activityTitle,
        action: element[i].action,
        backImg: element[i].backImg,

        // actionImg: element[i].actionImg,

        //PUZZLE
        puzzleImg: element[i].puzzleImg,
        difficulty: element[i].difficulty,
        //QUIZ
        quizCorrectIdx: element[i].quizCorrectIdx,
        answers: element[i].answers,
        //D&D
        order: element[i].order,
        //DOMANDA
        risposteDomanda: element[i].risposteDomanda,
        tipoDomanda: element[i].tipoDomanda,

        correctId: element[i].correctId,
        wrongId: element[i].wrongId,
      }
    }
    return element
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
  updateStoria(storia: Storia) {
    return this.http
      .put("http://localhost:3000/api/stories/" + storia.id, storia)
  }

  updateGame(idPartita: number, prossimoId: number, punteggio: number) {
    console.log("da frontend mando : " + punteggio)
    return this.http
      .put("http://localhost:3000/api/games/" + idPartita, {
        prossimoId: prossimoId,
        score: punteggio
      })
  }

  //post
  addNewStory(storyData) {

    return this.http.post<{ message: string, storia: Storia }>("http://localhost:3000/api/stories/", storyData)
  }

  addNewGame(idSquadra: Number, idClasse: Number, idPartita: Number, numeroPlayer: Number) {
    const gameData = {
      idSquadra: idSquadra,
      idClasse: idClasse,
      idPartita: idPartita,
      numeroPlayer: numeroPlayer
    }
    return this.http.post<{ message: string, game: Game }>("http://localhost:3000/api/games/", gameData)
  }


  uploadImage(base64imgStr: String) {
    let headers = new HttpHeaders().set("Authorization", 'Bearer d4e418b1180149c2f908769861db2fa0d6a60ec2')
    let options = { headers: headers };
    console.log(options);

    return this.http.post<any>("https://api.imgur.com/3/image", { image: base64imgStr }, options)
  }
}
