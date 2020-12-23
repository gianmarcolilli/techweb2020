import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dragndrop',
  templateUrl: './dragndrop.component.html',
  styleUrls: ['./dragndrop.component.scss']
})
export class DragndropComponent implements OnInit {

  timePeriods = [];

  constructor() { }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
  }

  ngOnInit(): void {
  }

}

