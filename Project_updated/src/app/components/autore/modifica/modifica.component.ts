import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Storia } from 'src/app/interfaces/storia';
import { DummyApiService } from 'src/app/services/dummy-api.service';
import { mimeType } from '../mime-type.validator';

@Component({
  selector: 'app-modifica',
  templateUrl: './modifica.component.html',
  styleUrls: ['./modifica.component.css']
})
export class ModificaComponent implements OnInit {
  @Input('id') id: number;
  @Input('title') title: string;
  @Input('sfondo') sfondo: string;
  form: FormGroup;
  imagePreview: string="";

  constructor(private api: DummyApiService, private router: Router) { }

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

  salvaModifiche() {

    console.log("le mie modifiche sono :");
    console.log("nome è :" + this.title);
    console.log("id è :" + this.id);
    let tempStoria:Storia;
    this.api.getStoria(this.id).subscribe((res) => {

      tempStoria = this.api.reMap(res)
      if (this.imagePreview!="") {
        tempStoria.urlBackground = this.imagePreview
      }else{
        tempStoria.urlBackground = this.sfondo
      }
      tempStoria.nome = this.title

      this.api.updateStoria(tempStoria).subscribe();
    })

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
