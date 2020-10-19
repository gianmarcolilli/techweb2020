import { Component, OnInit, ViewChild } from '@angular/core';
import { DummyApiService } from '../../services/dummy-api.service';
import { Storia } from '../../interfaces/storia';
@Component({
  selector: 'app-autore',
  templateUrl: './autore.component.html',
  styleUrls: ['./autore.component.css']
})

export class AutoreComponent implements OnInit {
  storie: Storia[] = [];

  statoMod : boolean[] = [];
  constructor(private api: DummyApiService) { }




  aggiungiStoria() {
    // let storiaDaInviare = {
    //   nome : // lo ottengo dal mio campo di input ,
    //   img : // ottengo il path da file picker
    // }
    // this.api.addNewStory(storiaDaInviare)
  }

  modificaStoria() {
  }


  ngOnInit(): void {



    this.api.getStories().subscribe(
      (risultato) => {
        this.storie = risultato
        for(var i=0;i<this.storie.length;i++){
          this.statoMod.push(false)
        }
      }
    );


  }

}
