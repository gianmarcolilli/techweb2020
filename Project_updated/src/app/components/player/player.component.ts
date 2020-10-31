import { TypeScriptEmitter } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DummyApiService } from 'src/app/services/dummy-api.service';
import { Squadra } from "../../interfaces/squadra";

const MAXPARTECIPANTI = 5;

const myAlert = {
  type: 'danger',
  message: 'compila tutti i campi'
}
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  titolo: string = "Player";
  tipologiaGruppo = "";
  fasciaEta = "";
  storie = [];
  traccia = -1;
  playClicked = false;
  formError = false;
  dimensioni = [

  ];
  alerts = [
  ];

  squadre : Squadra[] = [

  ]

  // dimensioniPreferite = [2, 3, 4, 5
  // ];

  // nDimensionePreferita: number = -1;
  // resto = 0;
  nSquadre = -1;
  nPartecipanti = -1;
  nPartecipantiAggiunti = 0;
  personeSquadra = -1;
  getStories() {
    this.apiDb.getStories().subscribe((storietemp) => {
      this.storie = storietemp
    })
  }


  aggiungiPlayer(idSquadra){
    if(this.nPartecipantiAggiunti + 1 > this.nPartecipanti) return;
    if(this.squadre[idSquadra].players.length +1 >MAXPARTECIPANTI) return;


    this.squadre[idSquadra].players.push(
      'playo' + this.nPartecipantiAggiunti
    )
    this.nPartecipantiAggiunti+=1

  }

  azzeraSquadre(){
    this.squadre = []
    this.nPartecipantiAggiunti = 0
  }


  aggiungiSquadra(){
    let lastIdx = this.squadre.length
    this.squadre.push(
      {
        id: lastIdx,
        players : []
        // nome : " squadra" + lastIdx
      }
    )
  }

  nPartecipantiChanged() {
    // if(!this.nDimensionePreferita) return;




    let minNGruppi = this.nPartecipanti / MAXPARTECIPANTI
    this.nSquadre = Math.trunc(minNGruppi + 1)
    this.azzeraSquadre()
    for(let i = 0; i < this.nSquadre ;i++){
      this.aggiungiSquadra()
    }



    // if(this.nPartecipanti > 0) { //check aggiuntivo su n partecipanti
    // this.nSquadre = Math.trunc(this.nPartecipanti / MAXPARTECIPANTI)
    // let personeAssegnate = this.nSquadre * MAXPARTECIPANTI
    // this.personeSquadra = personeAssegnate / this.nSquadre

  }

  playClick() {
    if (this.fasciaEta != '' && this.traccia != -1 && this.tipologiaGruppo != "") {//check campi


      if (this.tipologiaGruppo == 'classe') { //check aggiuntivi se classe


      }

      this.playClicked = true
    } else {
      this.showFormError()
    }
  }

  constructor(private apiDb: DummyApiService, private activeRoute: ActivatedRoute) {
    for (let i = 15; i <= 25; i++) {
      this.dimensioni.push(i)

    }

  }

  close() {
    this.alerts = []
  }

  showFormError() {
    this.alerts = []
    this.alerts.push(myAlert)
  }

  ngOnInit(): void {

    if (this.activeRoute.snapshot.params.tipo) {
      this.tipologiaGruppo = this.activeRoute.snapshot.params.tipo
    }
    if (this.activeRoute.snapshot.params.fascia) {
      this.fasciaEta = this.activeRoute.snapshot.params.fascia
    }
    if (this.activeRoute.snapshot.params.traccia) {
      this.traccia = parseInt(this.activeRoute.snapshot.params.traccia)
    }

    this.getStories();
  }



}
