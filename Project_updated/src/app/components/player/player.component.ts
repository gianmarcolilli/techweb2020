import { TypeScriptEmitter } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
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

  constructor(private apiDb: DummyApiService) { }

  ngOnInit(): void {
    this.getStories();
  }



}
