import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input('my-title') myTitle: string;

  constructor( private router : Router ) { }

  navigateToHome(){
    this.router.navigateByUrl("home")
  }

  navigateToAutore(){
    this.router.navigateByUrl("autore")
  }

  navigateToPlayer(){
    this.router.navigateByUrl("player")
  }

  ngOnInit(): void {
  }

}
