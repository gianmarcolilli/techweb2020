import { TypeScriptEmitter } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DummyApiService } from 'src/app/services/dummy-api.service';

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

  getStories() {
    this.apiDb.getStories().subscribe( (storietemp) => {
      this.storie = storietemp
    })
  }

  constructor(private apiDb: DummyApiService, private activeRoute : ActivatedRoute) { }

  ngOnInit(): void {

    if(this.activeRoute.snapshot.params.tipo){
        this.tipologiaGruppo = this.activeRoute.snapshot.params.tipo
    }
    if(this.activeRoute.snapshot.params.fascia){
      this.fasciaEta = this.activeRoute.snapshot.params.fascia
    }
    if(this.activeRoute.snapshot.params.traccia){
      this.traccia =  parseInt(this.activeRoute.snapshot.params.traccia)
    }



    this.getStories();
  }



}
