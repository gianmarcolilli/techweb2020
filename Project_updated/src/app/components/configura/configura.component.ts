import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { Storia } from 'src/app/interfaces/storia';
import { DummyApiService } from 'src/app/services/dummy-api.service';
import { mimeType } from '../autore/mime-type.validator';


@Component({
  selector: 'app-configura',
  templateUrl: './configura.component.html',
  styleUrls: ['./configura.component.css']
})
export class ConfiguraComponent implements OnInit {
  id: number;
  storia: Storia;


  tempContenuto = "";
  tempRisposta = "";
  tempDifficulty = "";
  tempImgPuzzle = "";
  tempTipoUpload = "";

  tempClickToObject:string = '';
  showConfiguraDomanda:boolean = false;
  showConfiguraClickToObject:boolean = false;
  tipologiaAttivita:string ="";
  numeroRisposte: number;
  imagePreview : string;
  rispostaGiusta: string ="";

  form: FormGroup;
  arrayRisposte: any[];
  constructor(private activeRoute: ActivatedRoute, private api: DummyApiService, private _formBuilder: FormBuilder) {}



  getTitleTranslation(type){
    if(type=="domanda"){
      return "domanda"
    }
    if(type=="informazione"){
      return "contenuto"
    }
    if(type=="puzzle"){
      return "messaggio introduttivo"
    }

    return "titolo"
  }


  aggiungiAttivita(type: string) {
    console.log("sono stato chiamato con tipo ="+type)
    if (type == "domanda") {
      this.storia.steps.push({
        action: 'domanda',
        activityId: this.storia.steps.length,
        activityTitle: this.tempContenuto,
        risposta : this.tempRisposta,
        backImg: '',
        correctId: 0,
        wrongId: 9

      })
    }
    if (type=="quiz"){
      this.storia.steps.push({
        action: 'quiz',
        activityId: this.storia.steps.length,
        activityTitle: this.tempContenuto,
        backImg: '',
        correctId: 0,
        wrongId: 9,
        answers: [],
      })
    }
    if (type == "informazione") {
      this.storia.steps.push({
        action: 'informazione',
        activityId: this.storia.steps.length,
        activityTitle: this.tempContenuto,
        backImg: '',
        correctId: 0,
        wrongId: 9

      })
    }
    if (type == "puzzle") {
      this.storia.steps.push({
        action: 'puzzle',
        activityId: this.storia.steps.length,
        activityTitle: this.tempContenuto,
        backImg: '',
        puzzleImg: this.tempImgPuzzle,
        difficulty: this.tempDifficulty,
        correctId: 0,
        wrongId: 9

      })
    }

      this.resettaForm()
  }

   aggiornaArrayRisposte(){
     this.arrayRisposte = [];
     for(let i = 0; i < this.numeroRisposte ; i++ ){
        this.arrayRisposte[i]="";
     }
   }
   eliminaAttivita(activityId: number): void {
    this.api.deleteActivity(activityId).subscribe(
      (responseData: any) => {
        alert(responseData.message)

      }
    )
  }


   salvaModifiche(){
    //chiamare una update , passando dal nostro apidb, dove gli passeremo la nostr storia
    console.log("sto per chiamare l'update passandogli "+ JSON.stringify(this.storia))
   }

  resettaForm() {
    this.tempContenuto = ''
    this.tempClickToObject=''
  }

  // generaAttivita(tipoDiAttività){
  //   if(tipoDiAttività=="4answers"){
  //     return {
  //       title : myTempTitle,
  //       answers : myTempRisposte,
  //     }
  //   }
  //   resetVariabiliDiAppoggio()
  // }

  onImagePicked(event:Event,type?){
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({image: file});
    this.form.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      if(type && type=='puzzle'){
      this.tempImgPuzzle = reader.result as string;
      }else{
        this.imagePreview = reader.result as string;

      }
    };
    reader.readAsDataURL(file);
  }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params.id;
    this.api.getStoria(this.id).subscribe((singleStory) => {
      this.storia = this.api.reMap(singleStory)
      console.log("ho questa storia appena entro "+JSON.stringify(this.storia))
    });


    this.form = new FormGroup({
      'tipologiaAttivita': new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]
      }),
      'tempContenuto': new FormControl(null, {validators: [Validators.required]
      }),
      'tempRisposta': new FormControl(null, {validators: [Validators.required]
      }),
      'numeroRisposte': new FormControl(null, {validators: [Validators.required]
      }),

      'image': new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType]
      }),
      'rispostaGiusta': new FormControl(null, {validators: [Validators.required]
      })

    });

  }

  onSaveStory(){}



}
