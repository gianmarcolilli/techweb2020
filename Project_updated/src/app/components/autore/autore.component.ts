import { Component, OnInit, ViewChild, ViewEncapsulation, Input } from '@angular/core';
import { DummyApiService } from '../../services/dummy-api.service';
import { Storia } from '../../interfaces/storia';
import { SweetAlert2LoaderService } from '@sweetalert2/ngx-sweetalert2';
import { FormGroup } from '@angular/forms';

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
  myTempFasciaEta : string ="";
  statoMod : boolean[] = [];
  isLoading:boolean = false;
  form:FormGroup;
  imagePreview : string;

    constructor(private api: DummyApiService, private swalLoader: SweetAlert2LoaderService) {

    }

    onImagePicked(event:Event){
      const file = (event.target as HTMLInputElement).files[0];
      this.form.patchValue({image: file});
      this.form.get('image').updateValueAndValidity();
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(file);
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
      didascalia : this.myTempDidascalia,
      fasciaEta: this.myTempFasciaEta
   }

    this.myTempDidascalia = ""
    this.myTempName = ""
    this.myTempFasciaEta = ""


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

  reMap(element):Storia {
    let miaStoriaDaRitornare =  {
      nome:element.title,
      id: element.id,
      didascalia : element.didascalia,
      fasciaEta: element.fasciaEta,
      // urlBackground: ,
      // steps: ,
      // didascalia: string,
      // startText : string,
      // entryId : number
     }


     return miaStoriaDaRitornare;
  }


  ngOnInit(): void {


    this.api.getStories().subscribe(
      (risultato) => {
        this.storie = []
        if(risultato && risultato.posts){
          risultato.posts.forEach(element => {


            this.storie.push(this.reMap(element));
            console.log()
          });
          // this.storie.push(element)

        }


        for(var i=0;i<this.storie.length;i++){
          this.statoMod.push(false)
        }
      }
    );


  }

}
