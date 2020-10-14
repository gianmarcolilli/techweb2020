import { Component, OnInit, ViewChild } from '@angular/core';

import { DummyApiService } from '../../services/dummy-api.service';
@Component({
  selector: 'app-autore',
  templateUrl: './autore.component.html',
  styleUrls: ['./autore.component.css']
})
export class AutoreComponent implements OnInit {

  storie : any [];

  constructor(private api: DummyApiService) { }

  ngOnInit(): void {


    this.api.getStories().subscribe(
        (arrayDiOggetti)=>{
            this.storie = arrayDiOggetti

        }
    );


  }

}
