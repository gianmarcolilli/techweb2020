import { Component, OnInit,  ViewEncapsulation, Injectable } from '@angular/core';
import { DummyApiService } from '../../services/dummy-api.service';
import { Storia } from '../../interfaces/storia';
import { SweetAlert2LoaderService } from '@sweetalert2/ngx-sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { mimeType } from './mime-type.validator';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { saveAs } from 'file-saver/dist/FileSaver';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-autore',
  templateUrl: './autore.component.html',
  styleUrls: ['./autore.component.scss'],
  encapsulation: ViewEncapsulation.None

})


@Injectable()
export class AutoreComponent implements OnInit {
  titolo: string = "Menu' Autore";
  storie: Storia[] = [];
  storia: Storia;
  myTempName: string = "";
  myTempDidascalia: string = "";
  myTempFasciaEta: string = "";
  statoMod: boolean[] = [];
  isLoading: boolean = false;
  form: FormGroup;
  imagePreview: string;
  getStorySubscription: Subscription;

  constructor(private api: DummyApiService, private swalLoader: SweetAlert2LoaderService, private router: Router, private http: HttpClient, public dialog: MatDialog) {

  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image: file });
    this.form.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      let img = reader.result as string;
      let base64 = img.split('base64')
      this.api.uploadImage(base64[1]).subscribe((res) => {
      this.imagePreview = res.data.link

      })
    };
    reader.readAsDataURL(file);
  }


  showAlert(testo: string) {
    let promiseDiSwal = this.swalLoader.swal;
    console.log(testo)

    promiseDiSwal.then((istanzadellaClasseSwal) => {
      istanzadellaClasseSwal.fire(
        testo
      )
    });
  }

  aggiungiStoria(): void {
    this.isLoading = true;
    console.log("wohoo devo aggiungere una storia !")

    if (this.form.invalid) {
      alert("errore compila i tutti i campi")
      this.isLoading = false;
      return;
    }
    this.isLoading = true;

    const tempStoria = {
      title: this.form.value.myTempName,
      didascalia: this.form.value.myTempDidascalia,
      fasciaEta: this.form.value.myTempFasciaEta,
      image: this.imagePreview,
      attivita: []
    }

    this.api.addNewStory(tempStoria)
      .subscribe(responseData => {
        alert("fatto: " + responseData.message)
        this.isLoading = false;
        this.refreshData();
      });

    this.form.reset();
  }


  configuraStoria(id: number): void {
    this.router.navigateByUrl('configura/' + id);
  }

  eliminaStoria(id: number): void {
    this.api.deleteStory(id).subscribe(
      (responseData: any) => {
        alert(responseData.message)
        this.refreshData()
      }
    )
  }

  salvaModifiche(i: number) {

    console.log("le mie modifiche sono :");
    let tempStoria: Storia;
    this.api.getStoria(this.storie[i].id).subscribe((res) => {

      tempStoria = this.api.reMap(res)
      if (this.imagePreview != "") {
        tempStoria.urlBackground = this.imagePreview
      } else {
        tempStoria.urlBackground = this.storie[i].urlBackground
      }
      tempStoria.nome = this.storie[i].nome
      console.log(this.storie[i].nome)
      this.api.updateStoria(tempStoria).subscribe(() => {
        this.refreshData()
      });
    })

  }

  download(i: number) {
    let tempStoria: Storia;
    this.api.getStoria(i).subscribe(storia => {
      storia = this.api.reMapForDownload(storia)
      const blob = new Blob([JSON.stringify(storia)], { type: 'text/json' });
      const fileName = storia.title+'.json';
      saveAs(blob, fileName);
    }, err => {
      console.log(err);
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(UploadDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}​​`);
      this.refreshData()

    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  ngOnInit(): void {

    this.form = new FormGroup({
      myTempDidascalia: new FormControl(null, {
        validators: [Validators.required]
      }),
      myTempName: new FormControl(null, {
        validators: [Validators.required]
      }),
      myTempFasciaEta: new FormControl(null, {
        validators: [Validators.required]
      }),
      image: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType]
      })
    });
    this.refreshData()
  }




  refreshData() {
    if (this.getStorySubscription) {
      this.getStorySubscription.unsubscribe()
    }
    this.getStorySubscription = this.api.getStories().subscribe(
      (risultato) => {
        this.storie = [];
        if (risultato && risultato.posts) {
          risultato.posts.forEach(element => {
            this.storie.push(this.api.reMap(element));
            console.log();
          });
        }
        for (let i = 0; i < this.storie.length; i++) {
          this.statoMod.push(false);
        }
      }
    );
  }
}



@Component({
  selector: 'upload-dialog',
  templateUrl: 'upload-dialog.html',
})
export class UploadDialog {
  private selectedFile: File;

  constructor(public dialogRef: MatDialogRef<UploadDialog>, private api: DummyApiService) { }


  onNoClick(): void {
    this.dialogRef.close();
  }

  onFileSelect(event) {
    this.selectedFile = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsText(this.selectedFile, "UTF-8");
    fileReader.onload = () => {
      console.log(fileReader.result);
      let storia = JSON.parse(fileReader.result as string)
      this.api.addNewStory( storia ).subscribe(
        (res)=>{
        if (res){
          alert(res.message)
        }else{
          alert("Generic error")
        }
      }
      ,
      (err)=>{
        alert(JSON.stringify(err))
      });
    }
    fileReader.onerror = (error) => {
      console.log(error);
    }
  }

}​​
