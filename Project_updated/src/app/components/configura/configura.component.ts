import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DummyApiService } from 'src/app/services/dummy-api.service';


@Component({
  selector: 'app-configura',
  templateUrl: './configura.component.html',
  styleUrls: ['./configura.component.css']
})
export class ConfiguraComponent implements OnInit {
  id: number;

  constructor(private activeRoute: ActivatedRoute, private apiDB: DummyApiService) { }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params.id;
    this.apiDB.getStoria(this.id).subscribe((singleStory)=>
      {
        console.log(singleStory);
      }

    )

  }

}
