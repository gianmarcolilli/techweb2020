import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class DummyApiService {



  constructor(public http: HttpClient) { }



  // get
  getStories(): Observable<any> {
    return this.http.get("https://sheet.best/api/sheets/8993a7e2-11f8-476b-8495-98e00fcfd75e")
  }


  getStoria(id:number): Observable<any>{
    return this.http.get("https://sheet.best/api/sheets/8993a7e2-11f8-476b-8495-98e00fcfd75e")
  }


  //put






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
