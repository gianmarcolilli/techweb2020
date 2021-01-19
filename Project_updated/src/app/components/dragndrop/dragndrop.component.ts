import { Component, Input, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { DragDrop } from 'src/app/interfaces/storia';
import { VisualizzaComponent } from '../visualizza/visualizza.component';
import * as _ from 'lodash';

@Component({
  selector: 'app-dragndrop',
  templateUrl: './dragndrop.component.html',
  styleUrls: ['./dragndrop.component.scss']
})
export class DragndropComponent implements OnInit {

  @Input('order') order:DragDrop[] = [];
  steps:number=0;
  isCompleted:boolean = false;
  constructor(private visComp: VisualizzaComponent) {}

  //Metodo chiamato ogni volta che sposto una tessera (drop appunto significa rilascio)
  drop(event: CdkDragDrop<number[]>) {
    this.steps++
    moveItemInArray(this.order, event.previousIndex, event.currentIndex);
    this.isCompleted = this.verifyAccomplishment()
  }

  //Permette di accedere allo step successivo
  avanzamentoStep(idQ){
    if(this.isCompleted){
      this.visComp.gestisciAvanzamento(undefined);
    }
  }

  //A ogni spostamenta di una tessera verifica che tutte siano nella posizione corretta
  //Una volta che l'array è stato ordinato restituisce complete=true, così permettendo l'avanzamento
  verifyAccomplishment(){
    let complete = true

    for (let i = 0; i < this.order.length; i++) {
      if(this.order[i].posizione != i){
       complete = false;
       break;
      }
    }
    return complete
  }


  ngOnInit(): void {
    //Mette in ordine sparso le tessere del drag&drop
    this.order = _.shuffle(this.order)
  }

}
