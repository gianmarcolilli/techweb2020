import { Component, OnInit, ViewChild, ViewEncapsulation, Input, Injectable, Inject } from '@angular/core';
import { DummyApiService } from '../../services/dummy-api.service';
import { Storia } from '../../interfaces/storia';
import { SweetAlert2LoaderService } from '@sweetalert2/ngx-sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';

import { mimeType } from './mime-type.validator';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { saveAs } from 'file-saver/dist/FileSaver';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface DialogData {
  animal: string;
  name: string;
}

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
      this.imagePreview = reader.result as string;
      let base64 = this.imagePreview.split('base64')
      this.api.uploadImage(base64[1]).subscribe((res) => {
        this.imagePreview = res.data.link
      })
    };
    reader.readAsDataURL(file);
  }


  // onImagePicked(event: Event) {
  //   const file = (event.target as HTMLInputElement).files[0];
  //   this.form.patchValue({ image: file });
  //   this.form.get('image').updateValueAndValidity();
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     this.imagePreview = reader.result as string;
  //     let base64 = this.imagePreview.split('base64')
  //     this.api.uploadImage(base64[1]).subscribe((res)=>{
  //       this.imagePreview=res.data.link

  //     })
  //   };
  //   reader.readAsDataURL(file);
  // }

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
  modificaStoria(): void {
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
    // console.log("nome è :" + this.storia.nome);
    // console.log("id è :" + id);
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
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}​​`);
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  ngOnInit(): void {

    this.form = new FormGroup({
      myTempDidascalia: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
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
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {
  private selectedFile: File;

  constructor(public dialogRef: MatDialogRef<DialogContentExampleDialog>, @Inject(MAT_DIALOG_DATA) public data: DialogData, private api: DummyApiService) { }

  // upload() {
  //   let fileReader = new FileReader();
  //   fileReader.onload = (e) => {
  //     console.log(fileReader.result);
  //     this.api.addNewStory(fileReader.result).subscribe();
  //   }
  //   fileReader.readAsText(this.selectedFile);
  // }
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
      this.api.addNewStory( storia ).subscribe();
    }
    fileReader.onerror = (error) => {
      console.log(error);
    }
  }

}​​
