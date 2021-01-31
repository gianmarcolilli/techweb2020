import { Component, Input, NgZone, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { DragDrop } from 'src/app/interfaces/storia';
import { VisualizzaComponent } from '../visualizza/visualizza.component';
import * as _ from 'lodash';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-dragndrop',
  templateUrl: './dragndrop.component.html',
  styleUrls: ['./dragndrop.component.scss']
})
export class DragndropComponent implements OnInit {

  @Input('order') order:DragDrop[] = [];
  steps:number=0;
  isCompleted:boolean = false;
  arrayNgFor: DragDrop[];
  constructor(private visComp: VisualizzaComponent,private ngZone : NgZone) {
    this.arrayNgFor = this.order
  }

  //Metodo chiamato ogni volta che sposto una tessera (drop appunto significa rilascio)
  drop(event: CdkDragDrop<number[]>) {
    this.steps++
    moveItemInArray(this.arrayNgFor, event.previousIndex, event.currentIndex);
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
  verifyAccomplishment():boolean{
    let complete = true

    for (let i = 0; i < this.arrayNgFor.length; i++) {
      if(this.arrayNgFor[i].posizione != i){
       complete = false;
       break;
      }
    }
    return complete
  }


   shuffle(){
    let myOrder = _.shuffle(this.order)
    this.ngZone.run(()=>{
        this.arrayNgFor = myOrder
    })
    console.log(this.order)
  }
  ngOnInit(): void {
      this.shuffle()

}
}
