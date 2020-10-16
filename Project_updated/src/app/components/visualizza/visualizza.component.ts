import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-visualizza',
  templateUrl: './visualizza.component.html',
  styleUrls: ['./visualizza.component.css']
})
export class VisualizzaComponent implements OnInit {



  title : string = "";
  sfondo: string ="";
  constructor(private pluto:ActivatedRoute) { }
  ngOnInit(): void {
    const valore = this.pluto.snapshot.params.id;
    console.log("l' id è"+valore);


    // effettuare la chiamata al db( passando dal servizio dummy-api)


      this.title = "mio titolo "
      this.sfondo = "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" // https://www.google.it/miaimmagine.png




  }

}
