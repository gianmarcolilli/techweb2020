import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Game } from 'src/app/interfaces/game';
import { DummyApiService } from 'src/app/services/dummy-api.service';


@Component({
  selector: 'app-classifica',
  templateUrl: './classifica.component.html',
  styleUrls: ['./classifica.component.scss']
})

export class ClassificaComponent implements OnInit {
  @Input('idClasse') idClasse: number;
  displayedColumns: string[] = ['idSquadra', 'idClasse', 'score'];
  games: Game[] = [];
  dataSource: MatTableDataSource<Game>;


  @ViewChild(MatSort) sort: MatSort;

  constructor(private apiDb : DummyApiService) {

  }
  //Prende tutti i games da db e li ordina per punteggio
  ngOnInit(): void {

    console.log(this.idClasse);

    this.apiDb.getGames().subscribe((res)=>{

      res.posts.forEach(element => {
        if(element.idClasse == this.idClasse){
          this.games.push(element)
        }
      });
      // this.games = res.posts
      this.dataSource = new MatTableDataSource(this.games);
      this.dataSource.sort = this.sort;
    })
  }

}

