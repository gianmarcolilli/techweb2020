import { Component, OnInit, ViewChild, ViewEncapsulation, Input } from '@angular/core';
import { DummyApiService } from '../../services/dummy-api.service';
import { Storia } from '../../interfaces/storia';
@Component({
  selector: 'app-autore',
  templateUrl: './autore.component.html',
  styleUrls: ['./autore.component.css'],
  encapsulation:ViewEncapsulation.None

})

export class AutoreComponent implements OnInit {
  titolo: string = "Menu' Autore";
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
