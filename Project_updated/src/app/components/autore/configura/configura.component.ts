import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { DragDrop, Step, Storia } from 'src/app/interfaces/storia';
import { DummyApiService } from 'src/app/services/dummy-api.service';
import { mimeType } from '../mime-type.validator';

import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  id: number,
  steps:Step[]
}

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
  tempTipoDomanda : string;

  tempPosArray: number;


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
  constructor(private activeRoute: ActivatedRoute, private api: DummyApiService, private _formBuilder: FormBuilder, private router: Router, public dialog: MatDialog) { }


  //Gestisce il testo mostrato nel placeholder
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

// metodo che aggiunge un attività alla storia nel database tramite una push
// dopo aver verificato la tipologia di attività tramite un if
  aggiungiAttivita(type: string, id: number = -1, posArray:number) {
    this.flagSalvataggio = true;
    let proxId:number;
    if(this.storia.steps.length == 0){
      proxId=0
    } else {
      proxId=(this.storia.steps[this.storia.steps.length - 1].activityId + 1)
    }
    console.log("Prox id: "+proxId )
    console.log("sono stato chiamato con tipo =" + type)
    if (type == "domanda") {
      let myActivity = {
        action: 'domanda',
        activityId: id == -1 ? proxId : id,
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
        this.storia.steps[posArray] = myActivity
      }
    }
    console.log("storia aggiornata: " + this.storia);
    if (type == "quiz") {
      let myActivity = {
        action: 'quiz',
        activityId: id == -1 ? proxId : id,
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
        this.storia.steps[posArray] = myActivity
      }
    }
    if (type == "informazione") {
      let myActivity = {
        action: 'informazione',
        activityId: id == -1 ? proxId : id,
        activityTitle: this.tempContenuto,
        backImg: this.imagePreview,
        correctId: this.tempCorrect,
        wrongId: this.tempWrong
      }
      if (id == -1) {
        this.storia.steps.push(myActivity)
      } else {
        this.storia.steps[posArray] = myActivity
      }
    }
    if (type == "fine") {
      let myActivity = {
        action: 'fine',
        activityId: id == -1 ? proxId : id,
        activityTitle: this.tempContenuto,
        backImg: this.imagePreview,
        correctId: this.tempCorrect,
        wrongId: this.tempWrong
      }
      if (id == -1) {
        this.storia.steps.push(myActivity)
      } else {
        this.storia.steps[posArray] = myActivity
      }
    }
    if (type == "puzzle") {
      let myActivity = {
        action: 'puzzle',
        activityId: id == -1 ? proxId : id,
        activityTitle: this.tempContenuto,
        puzzleImg: this.tempImgPuzzle,
        difficulty: this.tempDifficulty,
        correctId: this.tempCorrect,
        wrongId: this.tempWrong
      }
      if (id == -1) {
        this.storia.steps.push(myActivity)
      } else {
        this.storia.steps[posArray] = myActivity
      }
    }
    if (type == "dnd") {
      let myActivity = {
        action: 'dnd',
        activityId: id == -1 ? proxId : id,
        activityTitle: this.tempContenuto,
        backImg: this.imagePreview,
        order: this.tempOrder,
        correctId: this.tempCorrect,
        wrongId: this.tempWrong
      }
      if (id == -1) {
        this.storia.steps.push(myActivity)
      } else {
        this.storia.steps[posArray] = myActivity
      }
    }
    this.resettaForm()
  }

  //metodo utilizzato per generare le risposte possibili di un quiz
  aggiornaRisposteQuiz() {
    this.risposteQuiz = [];
    for (let i = 0; i < this.numeroRisposte; i++) {
      this.risposteQuiz[i] = "";
    }
  }

  //per aggiornare l'ordine del dnd
  aggiornaOrder() {
    this.tempOrder.push(
      {
        posizione: this.numeroDnd,
        desc: ""
      })
    this.numeroDnd++;
  }
//per aggiorare array risposte possibili in domanda
  aggiornaTempRisposta() {
    this.tempRisposteDomanda.push("")
  }

//metodo per modificare un attività
  editAttivita(attivita: Step, posArray:number) {
    this.resettaForm()
    this.tempPosArray = posArray;
    console.log('edito:' +attivita.activityId+" "+attivita.activityTitle);

    //generale
    this.tempContenuto = attivita.activityTitle;
    this.tempTipologiaAttivita = attivita.action;
    this.tempCorrect = attivita.correctId;
    this.tempWrong = attivita.wrongId;
    this.tempActivityId = attivita.activityId;
    this.imagePreview = attivita.backImg;


    console.log("corretto = " + this.tempCorrect + " sbagliato = " + this.tempWrong);

    //specifica
    if (attivita.action == "domanda") {
      this.tempTipoDomanda = attivita.tipoDomanda
      this.tempRisposteDomanda = attivita.risposteDomanda;
    }
    if (attivita.action == "quiz") {
      this.risposteQuiz = attivita.answers
      this.tempQuizCorrectIdx=attivita.quizCorrectIdx;
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

  // eliminaAttivita(activityId: number): void {
  //   this.storia.steps.splice(activityId, 1);
  //   this.flagSalvataggio = true;
  // }



//metodo per salvare attivià che ha subito una modifica
  onSaveActivity() {
    this.aggiungiAttivita(this.tempTipologiaAttivita, this.tempActivityId, this.tempPosArray)
    this.resettaForm();
    this.tempActivityId = -1
  }


//metodo per caricare la storia tramite update
  onSaveStory() {
    this.api.updateStoria(
      this.storia
    ).subscribe(response => {
      this.router.navigate(["/configura/" + this.storia.id]);
    });
    this.flagSalvataggio = false;
    this.resettaForm()
  }

  //metodo per svuotare il form delle attività
  resettaForm() {
    this.tempContenuto = ''
    this.tempClickToObject = ''
    this.tempActivityId = -1;
    this.tempContenuto = "";
    this.tempRisposteDomanda = [];
    this.tempTipoDomanda = "";
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
    this.tempPosArray = -1;
    this.form.reset()
  }

  //Trasforma il file immagine in base64, dopo di che lo passiamo a un servizio che lo porta in un server online, e ci restiruisce il link
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

  //metodo per tenere traccia dell'array del dnd e delle risposte
  trackByFn(index: any, item: any) {
    return index;
  }
  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params.id;
    this.api.getStoria(this.id).subscribe((singleStory) => {
      this.storia = this.api.reMap(singleStory);
    });


    this.form = new FormGroup({
      'tempTipologiaAttivita': new FormControl(null, {
        validators: [Validators.required]
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

  // metodo per aprire alert in fase di cancellazione di attività
  openDialog(j:number) {
    const dialogRef = this.dialog.open(CancellazioneDialog, {
      data: {
        id:j,
        steps: this.storia.steps,
      }
    });

    dialogRef.afterClosed().subscribe(result => {

      this.flagSalvataggio = true;
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'cancellazione-dialog',
  templateUrl: 'cancellazione-dialog.html',
})
export class CancellazioneDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}


//metodo per eliminare attività tramite splice
  eliminaAttivita(activityId: number): void {
    console.log('cancello: '+activityId);

    this.data.steps.splice(activityId, 1);
  }
}

