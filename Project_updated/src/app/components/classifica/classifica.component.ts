import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Game } from 'src/app/interfaces/game';
import { DummyApiService } from 'src/app/services/dummy-api.service';
import { VisualizzaComponent } from '../visualizza/visualizza.component';


@Component({
  selector: 'app-classifica',
  templateUrl: './classifica.component.html',
  styleUrls: ['./classifica.component.scss']
})

export class ClassificaComponent implements OnInit {
  games: Game[] = [];
  dataSource: MatTableDataSource<Game>;

  @ViewChild(MatSort) sort: MatSort;
  constructor(private apiDb : DummyApiService) {
    this.dataSource = new MatTableDataSource(this.games);
   }

  ngOnInit(): void {
    this.apiDb.getGames().subscribe((res)=>{
      this.games = res.posts
      this.dataSource.sort = this.sort;
    })
  }

  // ngAfterViewInit() {

  //   this.dataSource.sort = this.sort;

  // }

  displayedColumns: string[] = ['idSquadra', 'idClasse', 'score'];
}

