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
  styleUrls: ['./player.component.css', './player.component.scss']
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

  popolaDimensioni(tipo:string){
    this.dimensioni = []
    if(tipo=='classe'){
      console.log('classe');

      for (let i = 15; i <= 25; i++) {
        this.dimensioni.push(i)
      }
    } else if(tipo=='gruppo') {
      console.log('gruppo');
      for (let i = 2; i <= 5; i++) {
        this.dimensioni.push(i)
      }
    }
  }

  aggiungiPlayer(idSquadra) {
    // if (this.nPartecipantiAggiunti + 1 > this.nPartecipanti) return;
    // if (this.squadre[idSquadra].players.length + 1 > MAXPARTECIPANTI) return;


    for (let i = 0; i < this.checkPartecipanti.length; i++) {
      if (this.checkPartecipanti[i] == false) {
        this.squadre[idSquadra].players.push(
          'player' + i
        )
        this.nPartecipantiAggiunti += 1
        this.checkPartecipanti[i] = true;
        i = this.checkPartecipanti.length
      }
    }
  }

  rimuoviPlayer(idSquadra) {
    var posDaRimuovere = this.squadre[idSquadra].players.pop();
    this.nPartecipantiAggiunti--
    this.checkPartecipanti[(posDaRimuovere.substring(6, 8))] = false
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

    // let maxNGruppi = Math.trunc(this.nPartecipanti / MINPARTECIPANTI)
    this.azzeraSquadre()
    for (let i = 0; i < this.nSquadre; i++) {
      this.aggiungiSquadra()
      this.aggiungiPartecipanti(MINPARTECIPANTI, i)
    }
  }

  playClick() {
    if (this.fasciaEta == '' || this.traccia == -1 || this.tipologiaGruppo == "") {
      this.showFormError()
    } else if (this.tipologiaGruppo == "classe" && this.nPartecipantiAggiunti < this.nPartecipanti) {
      this.showFormError()
    } else {
      this.playClicked = true;
    }

    if(this.tipologiaGruppo!="individuale"){
      this.apiDb.getGames().subscribe( conta => {
        let numeroGame = conta.maxPosts
        for (let i = 0; i < this.squadre.length; i++) {
          this.apiDb.addNewGame(this.squadre[i].id, this.idClasseUsati, numeroGame, this.squadre[i].players.length).subscribe((res)=> {
            console.log(res);
          })
          this.squadre[i].idPartita=numeroGame
          numeroGame++;
        }
        this.idClasseUsati++
      })
    }
  }

  iniziaPartita(id: number, idPartita:number = -1): void {

    if(idPartita!=-1){
      console.log('anche qua arrivati siamo con id partita '+ idPartita);
      this.router.navigateByUrl('visualizza/'+id+'/'+idPartita);
    }else {
      this.router.navigateByUrl('visualizza/' + id);
    }
  }


  constructor(private apiDb: DummyApiService, private activeRoute: ActivatedRoute, private router: Router) {}

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
    if(this.activeRoute.snapshot.params.partita){
      console.log('arrivati siamo');

      this.iniziaPartita(this.traccia, this.activeRoute.snapshot.params.partita)
      return
    }
    if(this.activeRoute.snapshot.params.mode == 'autoplay'){
      this.iniziaPartita(this.traccia)
    }
    this.getStories();
  }


}
