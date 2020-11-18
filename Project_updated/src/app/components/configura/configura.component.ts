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

  tempDomanda:string = '';
  tempClickToObject:string = '';
  showConfiguraDomanda:boolean = false;
  showConfiguraClickToObject:boolean = false;
  tipologiaAttivita:string ="";
  numeroRisposte: number;
  imagePreview : string;

  form: FormGroup;
  constructor(private activeRoute: ActivatedRoute, private api: DummyApiService, private _formBuilder: FormBuilder) { }



  aggiungiAttivita(type: string) {
    if (type == "domande") {
      this.storia.steps.push({
        action: '',
        actionImg: '',
        activityId: 0,
        activityTitle: this.tempDomanda,
        backImg: '',
        correctId: 0,
        wrongId: 9,
        answers: [],
        chatMessages: []
      })
    }
    if (type=="clickToObject"){
      this.storia.steps.push({
        action: '',
        actionImg: '',
        activityId: 0,
        activityTitle: this.tempClickToObject,
        backImg: '',
        correctId: 0,
        wrongId: 9,
        answers: [],
        chatMessages: []
      })
    }

      this.resettaForm()
  }

  resettaForm() {
    this.tempDomanda = ''
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

  onTipologiaPicked(event:Event){
    this.form.get('tipologiaAttivita').updateValueAndValidity();
  }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params.id;
    this.api.getStoria(this.id).subscribe((singleStory) => {
      this.storia = this.api.reMap(singleStory)

    });


    this.form = new FormGroup({
      'tipologiaAttivita': new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]
      }),
      'numeroRisposte': new FormControl(null, {validators: [Validators.required]
      }),
      'image': new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType]
      })

    });

  }

  onSaveStory(){}



}
