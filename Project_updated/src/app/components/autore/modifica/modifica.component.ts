import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modifica',
  templateUrl: './modifica.component.html',
  styleUrls: ['./modifica.component.css']
})
export class ModificaComponent implements OnInit {
  @Input('id') id: string;
  @Input('nome') nome: string;
  @Input('sfondo') sfondo: string;

  constructor() { }


  salvaModifiche(){

      console.log("le mie modifiche sono :");
      console.log("nome è :"+this.nome);
      console.log("id è :"+this.id);
      console.log("sfondo è :"+this.sfondo);

      // this.api.updateStoria({
      //   name:+this.nome,
      //   bac
      // })
  }


  ngOnInit(): void {


  }

}
