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

  drop(event: CdkDragDrop<number[]>) {
    this.steps++
    moveItemInArray(this.order, event.previousIndex, event.currentIndex);
    this.isCompleted = this.verifyAccomplishment()
  }

  avanzamentoStep(idQ){
    if(this.isCompleted){
      this.visComp.gestisciAvanzamento(undefined);
    }
  }

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
    this.order = _.shuffle(this.order)
  }

}
