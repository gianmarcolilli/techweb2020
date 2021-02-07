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
  styleUrls: ['./player.component.scss']
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

  //Metodo get del servizio dummyApi che restituisce elenco delle storie tramite observable
  getStories() {
    this.apiDb.getStories().subscribe((risultato) => {
      this.storie = risultato.posts
    })
  }

  //Metodo chiamato dal radio button nel player per resituire il numero di studenti possibili per squadra
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

  //Metodo utilizzato per aggiungere il singolo player a squadra con idSquadra dato
  aggiungiPlayer(idSquadra) {
     if (this.nPartecipantiAggiunti + 1 > this.nPartecipanti) return;
     if (this.squadre[idSquadra].players.length + 1 > MAXPARTECIPANTI) return;


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

  //Metodo utilizzato per rimuovere un player da squadra con idSquadra dato
  rimuoviPlayer(idSquadra) {
    var posDaRimuovere = this.squadre[idSquadra].players.pop();
    this.nPartecipantiAggiunti--
    this.checkPartecipanti[(posDaRimuovere.substring(6, 8))] = false
  }

  //Metodo che inizializza squadre e players chiamato prima di popolare il numero di squadre minimo per partecipanti selezionato
  azzeraSquadre() {
    this.squadre = []
    this.nPartecipantiAggiunti = 0
  }

  //Metodo di aggiunta squadre che viene chiamato ciclicamente quando viene selezionato il numero di partecipanti in modalità classe
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

  //Metodo che consente di eliminare una squadra specifica tramite idSquadra e scala gli id delle squadre successive
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

  //Metodo di aggiunta squadra abbinato al button visibile nel player, per permettere di creare un numero maggiore di squadre rispetto al "numero minimo" di squadre create per default
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

  //Metodo di assegnamento dei players per squadra. Utilizzato nella creazione delle squadre di default con numero di partecipanti per squadra uguale a 2: min di partecipanti per squadra
  aggiungiPartecipanti(numPartecipanti, idS) {
    for (let index = 0; index < numPartecipanti; index++) {
      this.aggiungiPlayer(idS)
    }
  }

  //Metodo che viene chiamato in automatico quando l' utente seleziona il numero di partecipanti totali sa suddividere in squadre
  //Per default assumiamo come numero massimo di partecipanti per squadra uguale a 5 player e attraverso il quale si ottiene il numero minimo di squadre
  //In base al numero minimo di partecipanti vengono utilizzati i metodi azzeraSquadra, aggiungiSquadra e aggiungiPartecipanti sopra descritti
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
    this.azzeraSquadre()
    for (let i = 0; i < this.nSquadre; i++) {
      this.aggiungiSquadra()
      if (this.tipologiaGruppo=='gruppo') {
        this.aggiungiPartecipanti(this.nPartecipanti, i)
      } else {
        this.aggiungiPartecipanti(MINPARTECIPANTI, i)
      }
    }
  }

  //Il metodo PlayClick è un metodo che gestisce la visualizzazione dei QR code per le modalità gruppo o classe.
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
        let maxClasse =0;
        for (let i = 0; i < conta.posts.length; i++) {
          if(conta.posts[i].idClasse>=maxClasse){
            maxClasse=conta.posts[i].idClasse+1
          }

        }
        for (let i = 0; i < this.squadre.length; i++) {
          console.log('Il mio id squadra: '+this.squadre[i].id)
          this.apiDb.addNewGame(this.squadre[i].id,maxClasse, numeroGame, this.squadre[i].players.length).subscribe((res)=> {
            console.log(res);
          })
          this.squadre[i].idPartita=numeroGame
          numeroGame++;
        }
        // this.idClasseUsati++
      })
    }
  }

  //Metodo che attraverso il servizio di routing gestisce la navigazione del player verso la partita
  iniziaPartita(id: number, idPartita:number = -1): void {

    if(idPartita!=-1){
      this.router.navigateByUrl('visualizza/'+id+'/'+idPartita);
    }else {
      this.router.navigateByUrl('visualizza/' + id);
    }
  }


  constructor(private apiDb: DummyApiService, private activeRoute: ActivatedRoute, private router: Router) {}

  //Metodo di pulizia dell' alert associato al click sulla x di chiusura
  close() {
    this.alerts = []
  }

  //Metodo di visualizzazione degli errori associati alla funzione play click
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

      this.iniziaPartita(this.traccia, this.activeRoute.snapshot.params.partita)
      return
    }
    if(this.activeRoute.snapshot.params.mode == 'autoplay'){
      this.iniziaPartita(this.traccia)
    }
    this.getStories();
  }


}
