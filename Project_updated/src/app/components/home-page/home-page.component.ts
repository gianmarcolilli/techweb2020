import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(  private pippo : Router ) { }

  navigateToStory(storyValue){
        this.pippo.navigateByUrl("visualizza/4")
  }

  ngOnInit(): void {
  }

}
