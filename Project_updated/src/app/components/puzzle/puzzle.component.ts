import { Component, Input, HostListener, NgModule, ViewChild, OnInit } from '@angular/core';
import {
  CdkDrag,
  CdkDragStart,
  CdkDropList, CdkDropListGroup, CdkDragMove, CdkDragEnter,
  moveItemInArray
} from "@angular/cdk/drag-drop";
import { ViewportRuler } from "@angular/cdk/overlay";
import { VisualizzaComponent } from '../visualizza/visualizza.component';
import { timer } from 'rxjs';

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.scss']
})
export class PuzzleComponent implements OnInit {


  @Input('puzzleUrl') imageUrl: string;
  @Input('difficulty') difficulty: number;

  @ViewChild(CdkDropListGroup) listGroup: CdkDropListGroup<CdkDropList>;
  @ViewChild(CdkDropList) placeholder: CdkDropList;

  public items: Array<number> = [];

  public target: CdkDropList;
  public targetIndex: number;
  public source: CdkDropList;
  public sourceIndex: number;
  public dragIndex: number;
  public activeContainer;

  imageName: string;
  steps: number = 0;
  isCompleted: boolean = false;
  totalBoxes: number;
  boxSize: number;
  Image: any[] = [];
  imageSize: number;
  timeVar: any;
  timer: any = timer(0, 1000);
  ticks: string = '0:00';

  constructor(private viewportRuler: ViewportRuler, private visComp: VisualizzaComponent) {
    this.target = null;
    this.source = null;
    this.getScreenSize();
  }

  //ascolta i cambiamenti di dimensione dello schermo
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.reset();
    this.imageSize = window.innerWidth * 0.8;
    this.initializeGame();
    this.breakImageParts();
    this.shuffle();
  }

  verifyAccomplishment() {
    let complete = true

    for (let i = 0; i < this.Image.length; i++) {
      if (this.Image[i].index != (this.items[i] - 1)) {
        complete = false;
        return complete;
      }
    }

    this.timeVar.unsubscribe();
    return complete
  }

  avanzamentoStep() {
    if (this.isCompleted) {
      this.visComp.gestisciAvanzamento(undefined);
    }
  }

  ngOnInit(): void {

    //array che ci inidica quante caselle avrà il puzzle
    for (let i = 0; i < (Math.pow(this.difficulty, 2)); i++) {
      this.items.push(i + 1)
    }


    this.imageName = this.imageUrl
      .substr(this.imageUrl.lastIndexOf('/') + 1)
      .split('.')[0];
    this.initImageUrl();
    this.startGame();
  }

  initializeGame(): void {
    this.boxSize = 100 / (this.difficulty - 1);
    this.totalBoxes = this.difficulty * this.difficulty;
  }

  reset(): void {
    this.Image = [];
  }

  //controlla che tipo di risporsa è
  initImageUrl() {
    if (this.imageUrl.startsWith('http')) {
      this.imageUrl = this.imageUrl;
    } else if (this.imageUrl.startsWith('data:image/')) {
      this.imageUrl = this.imageUrl;
    } else {
      this.imageUrl = './assets/images/' + this.imageUrl;
    }
  }

  startGame(): void {
    this.getScreenSize();
    if (this.timeVar) {
      this.timeVar.unsubscribe();
    }
    this.timeVar = this.timer.subscribe((t) => {
      this.settime(t);
    });
  }

  settime(t: number): void {
    this.ticks = Math.floor(t / 60).toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false,
    }) + ':' + (t % 60).toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
  }

  breakImageParts() {
    for (let i = 0; i < this.totalBoxes; i++) {
      const x: string = (this.boxSize * (i % (this.difficulty))) + '%';
      const y: string = (this.boxSize * Math.floor(i / (this.difficulty))) + '%';
      let img: ImageBox = new ImageBox();
      img.x_pos = x;
      img.y_pos = y;
      img.index = i;
      this.Image.push(img);
    }
    this.boxSize = this.imageSize / this.difficulty;
  }

  ngAfterViewInit() {
    let phElement = this.placeholder.element.nativeElement;

    phElement.style.display = 'none';
    phElement.parentElement.removeChild(phElement);
  }

  shuffle() {
    this.items.sort(function () {
      return .5 - Math.random();
    });
  }

  dragMoved(e: CdkDragMove) {
    let point = this.getPointerPositionOnPage(e.event);

    this.listGroup._items.forEach(dropList => {
      if (__isInsideDropListClientRect(dropList, point.x, point.y)) {
        this.activeContainer = dropList;
        return;
      }
    });
  }

  dropListDropped($event) {
    if (!this.target)
      return;

    this.steps++;
    let phElement = this.placeholder.element.nativeElement;
    let parent = phElement.parentElement;

    phElement.style.display = 'none';

    parent.removeChild(phElement);
    parent.appendChild(phElement);
    parent.insertBefore(this.source.element.nativeElement, parent.children[this.sourceIndex]);

    this.target = null;
    this.source = null;

    if (this.sourceIndex != this.targetIndex) {
      moveItemInArray(this.items, this.sourceIndex, this.targetIndex);
      this.isCompleted = this.verifyAccomplishment()
    }
  }

  dropListEnterPredicate = (drag: CdkDrag, drop: CdkDropList) => {
    if (drop == this.placeholder)
      return true;

    if (drop != this.activeContainer)
      return false;

    let phElement = this.placeholder.element.nativeElement;
    let sourceElement = drag.dropContainer.element.nativeElement;
    let dropElement = drop.element.nativeElement;

    let dragIndex = __indexOf(dropElement.parentElement.children, (this.source ? phElement : sourceElement));
    let dropIndex = __indexOf(dropElement.parentElement.children, dropElement);

    if (!this.source) {
      this.sourceIndex = dragIndex;
      this.source = drag.dropContainer;

      phElement.style.width = sourceElement.clientWidth + 'px';
      phElement.style.height = sourceElement.clientHeight + 'px';

      sourceElement.parentElement.removeChild(sourceElement);
    }

    this.targetIndex = dropIndex;
    this.target = drop;

    phElement.style.display = '';
    dropElement.parentElement.insertBefore(phElement, (dropIndex > dragIndex
      ? dropElement.nextSibling : dropElement));

    this.placeholder._dropListRef.enter(drag._dragRef, drag.element.nativeElement.offsetLeft, drag.element.nativeElement.offsetTop)
    return false;
  }

  /** Determines the point of the page that was touched by the user. */
  getPointerPositionOnPage(event: MouseEvent | TouchEvent) {
    // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
    const point = __isTouchEvent(event) ? (event.touches[0] || event.changedTouches[0]) : event;
    const scrollPosition = this.viewportRuler.getViewportScrollPosition();

    return {
      x: point.pageX - scrollPosition.left,
      y: point.pageY - scrollPosition.top
    };
  }
}

function __indexOf(collection, node) {
  return Array.prototype.indexOf.call(collection, node);
};

/** Determines whether an event is a touch event. */
function __isTouchEvent(event: MouseEvent | TouchEvent): event is TouchEvent {
  return event.type.startsWith('touch');
}

function __isInsideDropListClientRect(dropList: CdkDropList, x: number, y: number) {
  const { top, bottom, left, right } = dropList.element.nativeElement.getBoundingClientRect();
  return y >= top && y <= bottom && x >= left && x <= right;
}

class ImageBox {
  x_pos: string;
  y_pos: string;
  index: number;
}
