import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';


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

@NgModule({
  declarations: [
    AppComponent,
    AutoreComponent,
    MyUppercasePipe,
    VisualizzaComponent,
    HomePageComponent,
    ModificaComponent,
    HeaderComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
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
    NgbAlertModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
