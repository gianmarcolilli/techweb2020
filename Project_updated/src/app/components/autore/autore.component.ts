import { Component, OnInit, ViewChild, ViewEncapsulation, Input } from '@angular/core';
import { DummyApiService } from '../../services/dummy-api.service';
import { Storia } from '../../interfaces/storia';
import { SweetAlert2LoaderService } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-autore',
  templateUrl: './autore.component.html',
  styleUrls: ['./autore.component.css'],
  encapsulation:ViewEncapsulation.None

})



export class AutoreComponent implements OnInit {
  titolo: string = "Menu' Autore";
  storie: Storia[] = [];
  myTempName : string = "";
  myTempDidascalia : string ="";
  statoMod : boolean[] = [];
  isLoading:boolean = false;

    constructor(private api: DummyApiService, private swalLoader: SweetAlert2LoaderService) {

    }


  showAlert(testo:string){
    let promiseDiSwal  =  this.swalLoader.swal;
    console.log(testo)

    promiseDiSwal.then((istanzadellaClasseSwal)=>{
      istanzadellaClasseSwal.fire(
        testo
      )
    });
  }

  aggiungiStoria() {
    this.isLoading = true;
    console.log("wohoo devo aggiungere una storia !")
    let storiaDaInviare = {
      nome : this.myTempName ,
      didascalia : this.myTempDidascalia
   }

    this.myTempDidascalia = ""
    this.myTempName = ""


    console.log(" sto per inviiaare questa roba :"+ JSON.stringify(storiaDaInviare))
    if (storiaDaInviare.nome != "" &&  storiaDaInviare.didascalia != "") {
      this.api.addNewStory(storiaDaInviare).subscribe( () => {
        this.showAlert( "Aggiunta avvenuta con successo" );
        this.isLoading = false
      });
    } else {
        this.showAlert( "Non hai inserito i dati" );
    }

  }

  modificaStoria() {
  }


  ngOnInit(): void {


    this.api.getStories().subscribe(
      (risultato) => {
        this.storie = risultato.posts
        for(var i=0;i<this.storie.length;i++){
          this.statoMod.push(false)
        }
      }
    );


  }

}
