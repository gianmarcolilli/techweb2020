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


  //Metodo remapping della storia impiegato per creare corrispondenza tra l' oggetto Storia generato da frontend con lo schema Storia del backend
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


  //Metodo remapping della storia impiegato per creare corrispondenza tra oggetto backend e oggetto frontend
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

  //Metodo utilizzato dal reMapForDownload per mappare un array di attività ottenute da backend
  reMapActivityForDownload(element: Array<Step>) {

    for (let i = 0; i < element.length; i++) {

      element[i] = {
        activityId: element[i].activityId,
        activityTitle: element[i].activityTitle,
        action: element[i].action,
        backImg: element[i].backImg,
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
  // per eliminare una storia verificando l'id
  deleteStory(id: number) {
    return this.http.delete('http://giovanna.cs.unibo.it:3002/api/stories/' + id);
  }
  //per eliminare un attività verificando l'id
  deleteActivity(activityId: number) {
    return this.http.delete('http://giovanna.cs.unibo.it:3002/api/stories/' + activityId);
  }


  // GET
  // ci restituisce tutte le storie
  getStories(): Observable<any> {
    return this.http.get('http://giovanna.cs.unibo.it:3002/api/stories/');
  }

  // ci restituisce la singola storia,verificando l'id
  getStoria(id: number): Observable<any> {
    return this.http.get("http://giovanna.cs.unibo.it:3002/api/stories/" + id)
  }

  getStep(idStoria: number) : Observable<any> {
    return this.http.get("http://giovanna.cs.unibo.it:3002/api/stories/" + idStoria)
  }

  //ci restituisce tutte le partite
  getGames(): Observable<any> {
    return this.http.get('http://giovanna.cs.unibo.it:3002/api/games/');
  }

  //ci restituisce la singola partita,verificando l'id
  getGame(id: number): Observable<any> {
    return this.http.get("http://giovanna.cs.unibo.it:3002/api/games/" + id)
  }


  //PUT
  // per salvare le modifiche di una Storia
  updateStoria(storia: Storia) {
    //  let headers = new HttpHeaders().set("Authorization", 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFAYS5pdCIsInVzZXJJZCI6IjVmYmZkM2YwZGUwNjRiMzRhNDE4ZTJkYiIsImlhdCI6MTYxMTA3MjA3NSwiZXhwIjoxNjExMDc1Njc1fQ.dLyXbhY_q6ptcBZP226Y3IP8Ds1d0eNJN096C_3MhEE')
    //  let options = { headers: headers };
    // console.log(options);
    return this.http.put("http://giovanna.cs.unibo.it:3002/api/stories/" + storia.id, storia)
  }
 // per salvare le modifiche di una partita nel caso in cui la partita è di tipologia Gruppo o Classe
  updateGame(idPartita: number, prossimoId: number, punteggio: number) {
    console.log("da frontend mando : " + punteggio)
    return this.http
      .put("http://giovanna.cs.unibo.it:3002/api/games/" + idPartita, {
        prossimoId: prossimoId,
        score: punteggio
      })
  }

  //POST
  // per creare una nuova Storia
  addNewStory(storyData) {
    return this.http.post<{ message: string, storia: Storia }>("http://giovanna.cs.unibo.it:3002/api/stories/", storyData)
  }

  //per creare una nuova partita
  addNewGame(idSquadra: Number, idClasse: Number, idPartita: Number, numeroPlayer: Number) {
    const gameData = {
      idSquadra: idSquadra,
      idClasse: idClasse,
      idPartita: idPartita,
      numeroPlayer: numeroPlayer
    }
    return this.http.post<{ message: string, game: Game }>("http://giovanna.cs.unibo.it:3002/api/games/", gameData)
  }

//per caricare un immagine tramite il metodo post
  uploadImage(base64imgStr: String) {

    return this.http.post<any>("https://api.imgur.com/3/image", { image: base64imgStr })
  }


}


