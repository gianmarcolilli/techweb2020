import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import {DragDropModule} from '@angular/cdk/drag-drop';
import { AngularFileUploaderModule } from "angular-file-uploader";


import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MyUppercasePipe } from './pipes/my-uppercase.pipe';
import { SquadreNamePipe } from './pipes/squadre-name.pipe';

import { NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QRCodeModule } from 'angularx-qrcode';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AutoreComponent, UploadDialog } from './components/autore/autore.component';
import { VisualizzaComponent } from './components/visualizza/visualizza.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ModificaComponent } from './components/autore/modifica/modifica.component';
import { HeaderComponent } from './components/header/header.component';
import { PlayerComponent } from './components/player/player.component';
import { ConfiguraComponent, CancellazioneDialog } from './components/configura/configura.component';
import { ImagePuzzleComponent } from './components/image-puzzle/image-puzzle.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { DragndropComponent } from './components/dragndrop/dragndrop.component';
import { ClassificaComponent } from './components/classifica/classifica.component';



// import {MatNativeDateModule} from '@angular/material/core';
// import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
// import {DemoMaterialModule} from './app/material-module';

// import {DialogContentExample, DialogContentExampleDialog} from './app/dialog-content-example';

@NgModule({
  declarations: [
    AppComponent,
    AutoreComponent,
    UploadDialog,
    MyUppercasePipe,
    VisualizzaComponent,
    HomePageComponent,
    ModificaComponent,
    HeaderComponent,
    PlayerComponent,
    SquadreNamePipe,
    ConfiguraComponent,
    CancellazioneDialog,
    ImagePuzzleComponent,
    LoginComponent,
    SignupComponent,
    DragndropComponent,
    ClassificaComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    NgbModule,
    NgbAlertModule,
    QRCodeModule,
    SweetAlert2Module.forRoot(),

    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatListModule,
    MatChipsModule,
    MatIconModule,
    MatRadioModule,
    MatDialogModule,
    MatGridListModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    MatSnackBarModule,
    DragDropModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatMenuModule,
    MatTableModule,
    MatSortModule,
    AngularFileUploaderModule,
    MatDialogModule,

    // CancellazioneDialog,

    NgbModule,
    NgbAlertModule,
    QRCodeModule


  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {floatLabel: 'always'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
