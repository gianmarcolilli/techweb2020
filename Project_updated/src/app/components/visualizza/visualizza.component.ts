import { Component, OnInit } from '@angular/core';
import { RESOURCE_CACHE_PROVIDER } from '@angular/platform-browser-dynamic';
import { ActivatedRoute } from '@angular/router';
import { DummyApiService } from 'src/app/services/dummy-api.service';

@Component({
  selector: 'app-visualizza',
  templateUrl: './visualizza.component.html',
  styleUrls: ['./visualizza.component.css']
})
export class VisualizzaComponent implements OnInit {

  id="";
  title  = "";
  urlIconaPrincip: string ="";
  constructor(private pluto:ActivatedRoute, private apiDb:DummyApiService) { }




  refresh(){


    let valore = this.id;

    this.avviaLoading()
    this.apiDb.getStories().subscribe(
      (res) => {
        if( res && res.length > 0){
          res.forEach((element) => {
              if(element.id == valore ){
                //element è la nostra storia
                this.id=element.id
                this.title = element.nome
                this.urlIconaPrincip =element.urlBackground

              }
          });


        }
        this.stoppaLoading()
      }
    );
  }
// chiamata,
// sottoscrizione
// assegnamo il risultato alla nostra proprietà di classe

  ngOnInit(): void {
     this.id = this.pluto.snapshot.params.id;
    this.refresh()

    // effettuare la chiamata al db( passando dal servizio dummy-api)

  }

}
