import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from "@angular/common/http";


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


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoreComponent } from './components/autore/autore.component';
import { HttpClientModule } from '@angular/common/http';
import { MyUppercasePipe } from './pipes/my-uppercase.pipe';
import { VisualizzaComponent } from './components/visualizza/visualizza.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModificaComponent } from './components/autore/modifica/modifica.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PlayerComponent } from './components/player/player.component';
import { NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QRCodeModule } from 'angularx-qrcode';
import { SquadreNamePipe } from './pipes/squadre-name.pipe';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ConfiguraComponent } from './components/configura/configura.component';
import { ImagePuzzleComponent } from './components/image-puzzle/image-puzzle.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { AuthInterceptor } from "./components/auth/auth-interceptor";
import { DragndropComponent } from './components/dragndrop/dragndrop.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    AutoreComponent,
    MyUppercasePipe,
    VisualizzaComponent,
    HomePageComponent,
    ModificaComponent,
    HeaderComponent,
    PlayerComponent,
    SquadreNamePipe,
    ConfiguraComponent,
    ImagePuzzleComponent,
    LoginComponent,
    SignupComponent,
    DragndropComponent
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

    NgbModule,
    NgbAlertModule,
    QRCodeModule


  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
