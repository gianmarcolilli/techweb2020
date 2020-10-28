import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  titolo: string = "Home Page";

  constructor(  private router : Router ) { }

  navigateToStory(storyValue){
        this.router.navigateByUrl("visualizza/4")
  }

  // navigateToAutore(){
  //     this.router.navigateByUrl("autore")
  // }

  ngOnInit(): void {

  }

}
