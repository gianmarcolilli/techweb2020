import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule} from '@angular/material/select';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";


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
import { LobbyComponent } from './components/lobby/lobby.component';
import { SquadreNamePipe } from './pipes/squadre-name.pipe';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

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
    LobbyComponent,
    SquadreNamePipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatListModule,
    FontAwesomeModule,
    MatChipsModule,
    MatIconModule,
    MatRadioModule,
    NgbModule,
    NgbAlertModule,
    QRCodeModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    SweetAlert2Module.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
