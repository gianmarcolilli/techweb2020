import { TypeScriptEmitter } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DummyApiService } from 'src/app/services/dummy-api.service';
import { Squadra } from "../../interfaces/squadra";
import { Router } from '@angular/router';
const MAXPARTECIPANTI = 5;
const MINPARTECIPANTI = 2;

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

  squadre: Squadra[] = [

  ]

  // dimensioniPreferite = [2, 3, 4, 5
  // ];

  // nDimensionePreferita: number = -1;
  // resto = 0;
  nSquadre = -1;
  nPartecipanti = -1;
  nPartecipantiAggiunti = 0;
  personeSquadra = -1;
  checkPartecipanti: boolean[] = [];

  getStories() {
    this.apiDb.getStories().subscribe((risultato) => {
      this.storie = risultato.posts
    })
  }


  aggiungiPlayer(idSquadra) {
    if (this.nPartecipantiAggiunti + 1 > this.nPartecipanti) return;
    if (this.squadre[idSquadra].players.length + 1 > MAXPARTECIPANTI) return;


    for (let i = 0; i < this.checkPartecipanti.length; i++) {
      if (this.checkPartecipanti[i] == false) {
        this.squadre[idSquadra].players.push(
          'playo' + i
        )
        this.checkPartecipanti[i] = true;
        i = this.checkPartecipanti.length
      }
    }

    // this.squadre[idSquadra].players.push(
    //   'playo' + this.nPartecipantiAggiunti
    // )

    console.log(this.checkPartecipanti)
    this.nPartecipantiAggiunti += 1

  }
  rimuoviPlayer(idSquadra) {
    var posDaRimuovere = this.squadre[idSquadra].players.pop();
    this.nPartecipantiAggiunti--
    this.checkPartecipanti[(posDaRimuovere.substring(5, 7))] = false
    console.log(this.checkPartecipanti);


  }

  azzeraSquadre() {
    this.squadre = []
    this.nPartecipantiAggiunti = 0
  }

  aggiungiSquadra() {
    let lastIdx = this.squadre.length
    this.squadre.push(
      {
        id: lastIdx,
        players: []
        // nome : " squadra" + lastIdx
      }
    )
  }

  aggiungiNuovaSquadra() {
    let lastIdx = this.squadre.length
    this.squadre.push(
      {
        id: lastIdx,
        players: []
        // nome : " squadra" + lastIdx
      }
    )
    this.aggiungiPartecipanti(MINPARTECIPANTI, lastIdx);
  }

  aggiungiPartecipanti(numPartecipanti, idS) {
    for (let index = 0; index < numPartecipanti; index++) {
      this.aggiungiPlayer(idS)
    }

  }

  nPartecipantiChanged() {
    // if(!this.nDimensionePreferita) return;

    for (let i = 0; i < this.nPartecipanti; i++) {
      this.checkPartecipanti[i]=false;

    }

    let minNGruppi = this.nPartecipanti / MAXPARTECIPANTI
    if (minNGruppi > Math.trunc(minNGruppi)) {
      this.nSquadre = Math.trunc(minNGruppi + 1)
    } else {
      this.nSquadre = minNGruppi
    }

    let maxNGruppi = Math.trunc(this.nPartecipanti / MINPARTECIPANTI)
    this.azzeraSquadre()
    for (let i = 0; i < this.nSquadre; i++) {
      this.aggiungiSquadra()
      this.aggiungiPartecipanti(MINPARTECIPANTI, i)
    }



    // if(this.nPartecipanti > 0) { //check aggiuntivo su n partecipanti
    // this.nSquadre = Math.trunc(this.nPartecipanti / MAXPARTECIPANTI)
    // let personeAssegnate = this.nSquadre * MAXPARTECIPANTI
    // this.personeSquadra = personeAssegnate / this.nSquadre

  }

  playClick() {
    if (this.fasciaEta == '' || this.traccia == -1 || this.tipologiaGruppo == "") {//check campi
      this.showFormError()
    } else if (this.tipologiaGruppo == "classe" && this.nPartecipantiAggiunti < this.nPartecipanti) {
      this.showFormError()
    } else {
      this.playClicked = true;
    }

    }
    iniziaPartita(id: number): void {
      this.router.navigateByUrl('visualizza/' + id);
    }


  constructor(private apiDb: DummyApiService, private activeRoute: ActivatedRoute, private router: Router) {
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
