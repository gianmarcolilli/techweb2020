import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class DummyApiService {



  constructor( private http : HttpClient) {
  }



  // get
  getStories():Observable<any>{
    return this.http.get("https://sheet.best/api/sheets/f83c172f-ec99-484d-98a8-c7aba3c1d257")
  }




  //put






  //post

  addNewStory(storia : any){


      let body = {
        name : storia.nome,
        immagine : storia.img
      }
        this.http.post("localhost:3000/addStory",body )
  }

}
