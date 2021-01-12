import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { DragDrop, Step, Storia } from 'src/app/interfaces/storia';
import { DummyApiService } from 'src/app/services/dummy-api.service';
import { mimeType } from '../autore/mime-type.validator';


@Component({
  selector: 'app-configura',
  templateUrl: './configura.component.html',
  styleUrls: ['./configura.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ConfiguraComponent implements OnInit {
  id: number;
  storia: Storia;

  tempActivityId = -1;
  tempContenuto = "";
  tempRisposteDomanda: string[] = [];
  tempDifficulty = "";
  tempImgPuzzle = "";
  tempTipoUpload = "";
  tempQuizCorrectIdx = -1;
  tempCorrect = 0;
  tempWrong = 0;
  risposteQuiz: any[];
  tempOrder: DragDrop[] = [];
  tempTipoDomanda : string
  // tempDDdescrizione = "";
  // tempDDposizione = 0;


  tempClickToObject: string = '';
  showConfiguraDomanda: boolean = false;
  showConfiguraClickToObject: boolean = false;
  tempTipologiaAttivita: string = "";
  numeroRisposte: number;
  numeroDnd: number = 0;
  imagePreview: string;
  rispostaGiusta: string = "";
  flagSalvataggio = false;

  form: FormGroup;
  constructor(private activeRoute: ActivatedRoute, private api: DummyApiService, private _formBuilder: FormBuilder, private router: Router) { }



  getTitleTranslation(type) {
    if (type == "domanda") {
      return "domanda"
    }
    if (type == "informazione" || type == "dnd" || type == "fine") {
      return "contenuto"
    }
    if (type == "puzzle") {
      return "messaggio introduttivo"
    }

    return "titolo"
  }


  aggiungiAttivita(type: string, id: number = -1) {
    this.flagSalvataggio = true;
    console.log("sono stato chiamato con tipo =" + type)
    if (type == "domanda") {
      let myActivity = {
        action: 'domanda',
        activityId: id == -1 ? this.storia.steps.length : id,
        activityTitle: this.tempContenuto,
        risposteDomanda: this.tempRisposteDomanda,
        tipoDomanda: this.tempTipoDomanda,
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
        answers: this.risposteQuiz,
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
    if (type == "fine") {
      let myActivity = {
        action: 'fine',
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
        // backImg: this.imagePreview,
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
    if (type == "dnd") {
      let myActivity = {
        action: 'dnd',
        activityId: id == -1 ? this.storia.steps.length : id,
        activityTitle: this.tempContenuto,
        backImg: this.imagePreview,
        order: this.tempOrder,
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

  aggiornaRisposteQuiz() {
    this.risposteQuiz = [];
    for (let i = 0; i < this.numeroRisposte; i++) {
      this.risposteQuiz[i] = "";
    }
  }

  aggiornaOrder() {
    this.tempOrder.push(
      {
        posizione: this.numeroDnd,
        desc: ""
      })
    this.numeroDnd++;
  }

  aggiornaTempRisposta() {
    this.tempRisposteDomanda.push("")
  }

  editAttivita(attivita: Step) {
    this.resettaForm()
    //generale
    this.tempContenuto = attivita.activityTitle;
    this.tempTipologiaAttivita = attivita.action;
    this.tempCorrect = attivita.correctId;
    this.tempWrong = attivita.wrongId;
    this.tempActivityId = attivita.activityId;
    this.imagePreview = attivita.backImg;
    this.tempQuizCorrectIdx=attivita.quizCorrectIdx;

    console.log("corretto = " + this.tempCorrect + " sbagliato = " + this.tempWrong);

    //specifica
    if (attivita.action == "domanda") {
      this.tempRisposteDomanda = attivita.risposteDomanda;
    }
    if (attivita.action == "quiz") {
      this.risposteQuiz = attivita.answers
    }
    if (attivita.action == "puzzle") {
      if (attivita.puzzleImg.charAt(0) == 'd') {
        this.tempTipoUpload = "locale"
      } else if (attivita.puzzleImg.charAt(0) == 'w' || attivita.puzzleImg.charAt(0) == 'h') {
        this.tempTipoUpload = "web"
      }
      this.tempDifficulty = attivita.difficulty;
      this.tempImgPuzzle = attivita.puzzleImg;
    }
    if (attivita.action == "dnd") {
      this.tempOrder = attivita.order;
    }
  }

  eliminaAttivita(activityId: number): void {
    this.storia.steps.splice(activityId, 1);
    this.flagSalvataggio = true;
  }

  onSaveActivity() {
    this.aggiungiAttivita(this.tempTipologiaAttivita, this.tempActivityId)
    this.resettaForm();
    this.tempActivityId = -1
  }
  onSaveStory() {
    this.api.updateStoria(
      this.storia
    ).subscribe(response => {
      this.router.navigate(["/configura/" + this.storia.id]);
    });
    this.flagSalvataggio = false;
    this.resettaForm()
  }

  resettaForm() {
    this.tempContenuto = ''
    this.tempClickToObject = ''
    this.tempActivityId = -1;
    this.tempContenuto = "";
    this.tempRisposteDomanda = [];
    this.tempDifficulty = "";
    this.tempImgPuzzle = "";
    this.tempTipoUpload = "";
    this.tempQuizCorrectIdx = -1;
    this.tempCorrect = 0;
    this.tempWrong = 0;
    this.risposteQuiz = [];
    this.tempOrder = [];
    this.tempTipologiaAttivita = "";
    this.numeroRisposte = 0;
    this.imagePreview = "";
    this.rispostaGiusta = "";
    this.form.reset()
  }

  inputChanged(ev: Event, idx) {
    console.log(idx + " : ")
    console.log(ev.returnValue)
    // this.risposteQuiz[idx] = "risposy"+idx
  }
  onImagePicked(event: Event, type?) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image: file });
    this.form.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {

      if (type && type == 'puzzle') {
        this.tempImgPuzzle = reader.result as string;
        let base64 = this.tempImgPuzzle.split('base64')
        this.api.uploadImage(base64[1]).subscribe((res) => {
          this.tempImgPuzzle = res.data.link
        })
      } else {
        this.imagePreview = reader.result as string;
        let base64 = this.imagePreview.split('base64')
        this.api.uploadImage(base64[1]).subscribe((res) => {
          this.imagePreview = res.data.link
        })

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
      })


    });

  }
}
