import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { DragDrop, Step, Storia } from 'src/app/interfaces/storia';
import { DummyApiService } from 'src/app/services/dummy-api.service';
import { mimeType } from '../autore/mime-type.validator';


@Component({
  selector: 'app-configura',
  templateUrl: './configura.component.html',
  styleUrls: ['./configura.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ConfiguraComponent implements OnInit {
  id: number;
  storia: Storia;

  tempActivityId = -1;
  tempContenuto = "";
  tempRisposta = "";
  tempDifficulty = "";
  tempImgPuzzle = "";
  tempTipoUpload = "";
  tempQuizCorrectIdx = -1;
  tempCorrect = 0;
  tempWrong = 0;
  tempOrder: DragDrop[]=[];
  tempDDdescrizione = "";
  tempDDposizione = 0;


  tempClickToObject: string = '';
  showConfiguraDomanda: boolean = false;
  showConfiguraClickToObject: boolean = false;
  tempTipologiaAttivita: string = "";
  numeroRisposte: number;
  imagePreview: string;
  rispostaGiusta: string = "";
  flagSalvataggio=false;

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

  aggiungiDD(){
    let lastIdx = this.tempOrder.length
    this.tempOrder.push(
      {
        posizione: lastIdx,
        desc: ""
      }
    )
  }

  aggiungiAttivita(type: string, id: number = -1) {
    this.flagSalvataggio=true;
    console.log("sono stato chiamato con tipo =" + type)
    if (type == "domanda") {
      let myActivity = {
        action: 'domanda',
        activityId: id == -1 ? this.storia.steps.length : id,
        activityTitle: this.tempContenuto,
        risposta: this.tempRisposta,
        backImg: this.imagePreview,
        correctId: this.tempCorrect,
        wrongId: this.tempWrong
      }
      if (id == -1) {
        this.storia.steps.push(myActivity)
      } else {
        this.storia.steps[id] = myActivity
      }
    }
    console.log("storia aggiornata: " + this.storia);
    if (type == "quiz") {
      let myActivity = {
        action: 'quiz',
        activityId: id == -1 ? this.storia.steps.length : id,
        activityTitle: this.tempContenuto,
        backImg: this.imagePreview,
        correctId: this.tempCorrect,
        wrongId: this.tempWrong,
        answers: this.arrayRisposte,
        quizCorrectIdx: this.tempQuizCorrectIdx.valueOf()
      }
      if (id == -1) {
        this.storia.steps.push(myActivity)
      } else {
        this.storia.steps[id] = myActivity
      }
    }
    if (type == "informazione") {
      let myActivity = {
        action: 'informazione',
        activityId: id == -1 ? this.storia.steps.length : id,
        activityTitle: this.tempContenuto,
        backImg: this.imagePreview,
        correctId: this.tempCorrect,
        wrongId: this.tempWrong
      }
      if (id == -1) {
        this.storia.steps.push(myActivity)
      } else {
        this.storia.steps[id] = myActivity
      }
    }
    if (type == "puzzle") {
      let myActivity = {
        action: 'puzzle',
        activityId: id == -1 ? this.storia.steps.length : id,
        activityTitle: this.tempContenuto,
        backImg: this.imagePreview,
        puzzleImg: this.tempImgPuzzle,
        difficulty: this.tempDifficulty,
        correctId: this.tempCorrect,
        wrongId: this.tempWrong
      }
      if (id == -1) {
        this.storia.steps.push(myActivity)
      } else {
        this.storia.steps[id] = myActivity
      }
    }

    this.resettaForm()
  }

  aggiornaArrayRisposte() {
    this.arrayRisposte = [];
    for (let i = 0; i < this.numeroRisposte; i++) {
      this.arrayRisposte[i] = "";
    }
  }

  editAttivita(attivita: Step) {
    this.resettaForm()
    //generale
    this.tempContenuto = attivita.activityTitle;
    this.tempTipologiaAttivita = attivita.action;
    this.tempCorrect = attivita.correctId;
    this.tempWrong = attivita.wrongId;
    this.tempActivityId = attivita.activityId

    console.log("corretto = " + this.tempCorrect + " sbagliato = " + this.tempWrong);

    //specifica
    if (attivita.action == "domanda") {
      this.tempRisposta = attivita.risposta;
    }
    if (attivita.action == "quiz") {

    }
    if (attivita.action == "puzzle") {
      this.tempDifficulty = "";
      this.tempImgPuzzle = "";
    }





  }
  eliminaAttivita(activityId: number): void {
    this.storia.steps.splice(activityId, 1);
    this.flagSalvataggio=true;
  }





  //  salvaModifiche(){
  //   //chiamare una update , passando dal nostro apidb, dove gli passeremo la nostr storia
  //   console.log("sto per chiamare l'update passandogli "+ JSON.stringify(this.storia))
  //   this.api.updateStoria(this.storia.id,this.storia.steps);

  //  }

  onSaveActivity() {
    this.aggiungiAttivita(this.tempTipologiaAttivita, this.tempActivityId)
    this.resettaForm();
    this.tempActivityId = -1
  }
  onSaveStory() {
    this.api.updateStoria(
      this.storia
    );
    this.flagSalvataggio=false;
    this.resettaForm()
  }

  resettaForm() {
    this.tempContenuto = ''
    this.tempClickToObject = ''
    this.tempActivityId = -1;
    this.tempContenuto = "";
    this.tempRisposta = "";
    this.tempDifficulty = "";
    this.tempImgPuzzle = "";
    this.tempTipoUpload = "";
    this.tempQuizCorrectIdx = -1;
    this.tempCorrect = 0;
    this.tempWrong = 0;
    this.tempClickToObject = '';
    this.form.reset()
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
  inputChanged(ev: Event, idx) {
    console.log(idx + " : ")
    console.log(ev.returnValue)
    // this.arrayRisposte[idx] = "risposy"+idx
  }
  onImagePicked(event: Event, type?) {
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

  trackByFn(index: any, item: any) {
    return index;
  }
  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params.id;
    this.api.getStoria(this.id).subscribe((singleStory) => {
      this.storia = this.api.reMap(singleStory);
      // console.log("ho questa storia appena entro " + JSON.stringify(this.storia))
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
      }),
      'tempCorrect': new FormControl(null, {
        validators: [Validators.required]
      }),
      'tempWrong': new FormControl(null, {
        validators: [Validators.required]
      }),
      'tempDDdrescrizione': new FormControl(null, {
        validators: [Validators.required]
      }),
      'tempDDposizione': new FormControl(null, {
        validators: [Validators.required]
      })

    });

  }
}
