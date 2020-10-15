import { Component, OnInit, ViewChild } from '@angular/core';
import { DummyApiService } from '../../services/dummy-api.service';

@Component({
  selector: 'app-autore',
  templateUrl: './autore.component.html',
  styleUrls: ['./autore.component.css']
})

export class AutoreComponent implements OnInit {



  storie : any [];

  constructor(private api: DummyApiService) { }

  aggiungiStoria(){
          // let storiaDaInviare = {
          //   nome : // lo ottengo dal mio campo di input ,
          //   img : // ottengo il path da file picker
          // }



          // this.api.addNewStory(storiaDaInviare)
  }


  modificaStoria(){


  }


  ngOnInit(): void {


    this.api.getStories().subscribe(
        (arrayDiOggetti)=>{
            console.log(arrayDiOggetti)
            this.storie = arrayDiOggetti

        }
    );


  }

}
