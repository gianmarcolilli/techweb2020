import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  isLoading: false;
  form: FormGroup;
  imagePreview: string;
  constructor(private activeRoute: ActivatedRoute, private api: DummyApiService) { }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params.id;
    this.api.getStoria(this.id).subscribe((singleStory)=>
      {
        this.storia = this.api.reMap(singleStory)
      }
    );

    this.form = new FormGroup({
      'activityTitle': new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]
      }),
      'activityId': new FormControl(null, {validators: [Validators.required]
      }),
      'image': new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType]
      })
    });

  }

  onSaveStory(){}

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

}
