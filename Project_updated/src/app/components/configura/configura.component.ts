import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storia } from 'src/app/interfaces/storia';
import { DummyApiService } from 'src/app/services/dummy-api.service';


@Component({
  selector: 'app-configura',
  templateUrl: './configura.component.html',
  styleUrls: ['./configura.component.css']
})
export class ConfiguraComponent implements OnInit {
  id: number;
  storia: Storia;
  constructor(private activeRoute: ActivatedRoute, private api: DummyApiService) { }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params.id;
    this.api.getStoria(this.id).subscribe((singleStory)=>
      {
        this.storia = this.api.reMap(singleStory)
      }

    )

  }

}
