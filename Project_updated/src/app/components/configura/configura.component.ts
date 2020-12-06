import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { Step, Storia } from 'src/app/interfaces/storia';
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

  tempCorrect=-1;
  tempWrong=-1;

  tempClickToObject: string = '';
  showConfiguraDomanda: boolean = false;
  showConfiguraClickToObject: boolean = false;
  tempTipologiaAttivita: string = "";
  numeroRisposte: number;
  imagePreview: string;
  rispostaGiusta: string = "";

  form: FormGroup;
  arrayRisposte: any[];
  constructor(private activeRoute: ActivatedRoute, private api: DummyApiService, private _formBuilder: FormBuilder) { }



  getTitleTranslation(type) {
    if (type == "domanda") {
      return "domanda"
    }
    if (type == "informazione") {
      return "contenuto"
    }
    if (type == "puzzle") {
      return "messaggio introduttivo"
    }

    return "titolo"
  }


  aggiungiAttivita(type: string) {
    console.log("sono stato chiamato con tipo =" + type)
    if (type == "domanda") {
      this.storia.steps.push({
        action: 'domanda',
        activityId: this.storia.steps.length,
        activityTitle: this.tempContenuto,
        risposta: this.tempRisposta,
        backImg: "immagine",
        correctId: this.tempCorrect,
        wrongId: this.tempWrong
      })
  }
  console.log("storia aggiornata: " + this.storia);
if (type == "quiz") {
  this.storia.steps.push({
    action: 'quiz',
    activityId: this.storia.steps.length,
    activityTitle: this.tempContenuto,
    backImg: '',
    correctId: this.tempCorrect,
    wrongId: this.tempWrong,
    answers: [],
  })
}
if (type == "informazione") {
  this.storia.steps.push({
    action: 'informazione',
    activityId: this.storia.steps.length,
    activityTitle: this.tempContenuto,
    backImg: '',
    correctId: this.tempCorrect,
    wrongId: this.tempWrong
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
    correctId: this.tempCorrect,
    wrongId: this.tempWrong
  })
}

this.resettaForm()
  }

aggiornaArrayRisposte() {
  this.arrayRisposte = [];
  for (let i = 0; i < this.numeroRisposte; i++) {
    this.arrayRisposte[i] = "";
  }
}

editAttivita(attivita: Step){
  this.form.reset();

  //generale
  this.tempContenuto = attivita.activityTitle;
  this.tempTipologiaAttivita = attivita.action;
  this.tempCorrect = attivita.correctId;
  this.tempWrong = attivita.wrongId;

  //specifica
  if(attivita.action=="domanda"){
    this.tempRisposta = attivita.risposta;
  }
  if(attivita.action=="quiz"){

  }
  if(attivita.action=="puzzle"){
    this.tempDifficulty = "";
    this.tempImgPuzzle = "";
  }





}
eliminaAttivita(activityId: number): void {
  this.storia.steps.splice(activityId - 1, 1);

}





//  salvaModifiche(){
//   //chiamare una update , passando dal nostro apidb, dove gli passeremo la nostr storia
//   console.log("sto per chiamare l'update passandogli "+ JSON.stringify(this.storia))
//   this.api.updateStoria(this.storia.id,this.storia.steps);

//  }

onSaveStory() {
  this.api.updateStoria(
    this.storia
  );
  this.form.reset();
}

resettaForm() {
  this.tempContenuto = ''
  this.tempClickToObject = ''

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

onImagePicked(event: Event, type ?) {
  const file = (event.target as HTMLInputElement).files[0];
  this.form.patchValue({ image: file });
  this.form.get('image').updateValueAndValidity();
  const reader = new FileReader();
  reader.onload = () => {
    if (type && type == 'puzzle') {
      this.tempImgPuzzle = reader.result as string;
    } else {
      this.imagePreview = reader.result as string;

    }
  };
  reader.readAsDataURL(file);
}

ngOnInit(): void {
  this.id = this.activeRoute.snapshot.params.id;
  this.api.getStoria(this.id).subscribe((singleStory) => {
    this.storia = this.api.reMap(singleStory)
    console.log("ho questa storia appena entro " + JSON.stringify(this.storia))
  });


  this.form = new FormGroup({
    'tempTipologiaAttivita': new FormControl(null, {
      validators: [Validators.required, Validators.minLength(3)]
    }),
    'tempContenuto': new FormControl(null, {
      validators: [Validators.required]
    }),
    'tempRisposta': new FormControl(null, {
      validators: [Validators.required]
    }),
    'numeroRisposte': new FormControl(null, {
      validators: [Validators.required]
    }),

    'image': new FormControl(null, {
      validators: [Validators.required],
      asyncValidators: [mimeType]
    }),
    'rispostaGiusta': new FormControl(null, {
      validators: [Validators.required]
    })

  });

}
}
