import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Storia } from 'src/app/interfaces/storia';
import { DummyApiService } from 'src/app/services/dummy-api.service';
import { mimeType } from '../mime-type.validator';

@Component({
  selector: 'app-modifica',
  templateUrl: './modifica.component.html',
  styleUrls: ['./modifica.component.scss']
})
export class ModificaComponent implements OnInit {
  @Input('id') id: number;
  @Input('title') title: string;
  @Input('sfondo') sfondo: string;
  form: FormGroup;
  imagePreview: string="";

  constructor(private api: DummyApiService, private router: Router) { }

  //Trasforma il file immagine in base64, dopo di che lo passiamo a un servizio che lo porta in un server online, e ci restiruisce il link
  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image: file });
    this.form.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
      let base64 = this.imagePreview.split('base64')
      this.api.uploadImage(base64[1]).subscribe((res) => {
        this.imagePreview = res.data.link
        this.sfondo = this.imagePreview
        console.log(this.sfondo);
      })
    };
    reader.readAsDataURL(file);
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      image: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType]

      })
    });

  }

}
