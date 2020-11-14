import { Component, OnInit, ViewChild, ViewEncapsulation, Input } from '@angular/core';
import { DummyApiService } from '../../services/dummy-api.service';
import { Storia } from '../../interfaces/storia';
import { SweetAlert2LoaderService } from '@sweetalert2/ngx-sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { mimeType } from "./mime-type.validator";
import { Router } from '@angular/router';

@Component({
  selector: 'app-autore',
  templateUrl: './autore.component.html',
  styleUrls: ['./autore.component.css'],
  encapsulation:ViewEncapsulation.None

})



export class AutoreComponent implements OnInit {
  titolo: string = "Menu' Autore";
  storie: Storia[] = [];
  storia: Storia;
  myTempName : string = "";
  myTempDidascalia : string ="";
  myTempFasciaEta : string ="";
  statoMod : boolean[] = [];
  isLoading:boolean = false;
  form:FormGroup;
  imagePreview : string;

  constructor(private api: DummyApiService, private swalLoader: SweetAlert2LoaderService, private router: Router) {}



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

    if(this.form.invalid){
      return;
    }
    this.isLoading = true;

    this.api.addNewStory(
      this.form.value.myTempName,
      this.form.value.myTempDidascalia,
      this.form.value.myTempFasciaEta,
      this.imagePreview

    )
    .subscribe(responseData=>{
      this.router.navigate(["/"]);
    });;

    this.form.reset();
  }


  configuraStoria(id:number){
    this.router.navigateByUrl("configura/"+id)
  }
  modificaStoria() {
  }

  eliminaStoria(id:string){

  }



  ngOnInit(): void {

    this.form = new FormGroup({
      'myTempDidascalia': new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]
        }),
      'myTempName': new FormControl(null, {validators: [Validators.required]
        }),
      'myTempFasciaEta': new FormControl(null, {validators: [Validators.required]
        }),
      'image': new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType]
        })
      });


    this.api.getStories().subscribe(
      (risultato) => {
        this.storie = []
        if(risultato && risultato.posts){
          risultato.posts.forEach(element => {


            this.storie.push(this.api.reMap(element));
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
