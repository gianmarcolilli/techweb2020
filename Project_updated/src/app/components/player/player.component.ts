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
  traccia:any = -1;
  playClicked = false;
  formError = false;
  dimensioni = [];
  alerts = [];
  squadre: Squadra[] = []
  idClasseUsati = 0;

  // dimensioniPreferite = [2, 3, 4, 5
  // ];

  // nDimensionePreferita: number = -1;
  // resto = 0;
  nSquadre = -1;
  nPartecipanti = -1;
  nPartecipantiAggiunti = 0;
  personeSquadra = -1;
  checkPartecipanti: boolean[] = [];
  contatore = 0;

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

    this.nPartecipantiAggiunti += 1

  }
  rimuoviPlayer(idSquadra) {
    var posDaRimuovere = this.squadre[idSquadra].players.pop();
    this.nPartecipantiAggiunti--
    this.checkPartecipanti[(posDaRimuovere.substring(5, 7))] = false
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
        players: [],
        name: " squadra" + this.contatore
      }
      )
    this.contatore++;
  }

  eliminaSquadra(idSquadra) {
    var playerRemoved = this.squadre[idSquadra].players.length;
    for (let index = 0; index < playerRemoved; index++) {
      this.rimuoviPlayer(idSquadra);
    }

    this.squadre.splice(idSquadra, 1);
    for (let index = idSquadra; index < this.squadre.length; index++) {
      this.squadre[index].id = this.squadre[index].id - 1;
    }
  }

  aggiungiNuovaSquadra() {
    let lastIdx = this.squadre.length
    this.squadre.push(
      {
        id: lastIdx,
        players: [],
        name: " squadra" + this.contatore
      }
    )
    this.contatore++
    this.aggiungiPartecipanti(MINPARTECIPANTI, lastIdx);
  }

  aggiungiPartecipanti(numPartecipanti, idS) {
    for (let index = 0; index < numPartecipanti; index++) {
      this.aggiungiPlayer(idS)
    }

  }

  nPartecipantiChanged() {
    // if(!this.nDimensionePreferita) return;
    this.contatore=0;

    for (let i = 0; i < this.nPartecipanti; i++) {
      this.checkPartecipanti[i] = false;

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

    if(this.tipologiaGruppo!="individuale"){
      for (let i = 0; i < this.squadre.length; i++) {
        this.apiDb.addNewGame(this.squadre[i].id, this.idClasseUsati).subscribe((res)=> {
          console.log(res);
        })
      }
      this.idClasseUsati++
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
    if(this.activeRoute.snapshot.params.mode == 'autoplay'){
      this.iniziaPartita(this.traccia)
    }

    this.getStories();
  }





}
