// import { isNullOrUndefined } from 'util';
import {
  Component,
  Injectable,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { timer } from 'rxjs';
import { VisualizzaComponent } from '../visualizza/visualizza.component';

import { HostListener } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-image-puzzle',
  templateUrl: './image-puzzle.component.html',
  styleUrls: ['./image-puzzle.component.scss'],
})
export class ImagePuzzleComponent implements OnInit {
  @Input('puzzleUrl') imageUrl: string = '';
  @Input('difficulty') difficulty: string = '2';

  screenHeight: number;
  screenWidth: number;



  imageSize: number;
  gridsize: number = 2;
  boxSize: number = 100 / (this.gridsize - 1);
  index: number = 0;
  totalBoxes: number = this.gridsize * this.gridsize;
  Image: any[] = [];
  imageName: string = this.imageUrl
    .substr(this.imageUrl.lastIndexOf('/') + 1)
    .split('.')[0];
  steps: number = 0;
  ticks: string = '0:00';
  timer: any = timer(0, 1000);
  timeVar: any;
  gameComplete: Boolean = false;

  indexes: number[] = [];
  position: number[] = [];

  constructor(private visComp: VisualizzaComponent) {
    this.getScreenSize();
    console.log("imageSize:" + this.imageSize)
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.imageSize = window.innerWidth;
        this.screenHeight = window.innerHeight;
        console.log(this.imageSize, this.screenHeight);

        this.reset();
        this.initializeGame();
        this.breakImageParts();
        this.reRandomize();
  }

  initImageUrl() {
    if (this.imageUrl.startsWith('http')) {
      this.imageUrl = this.imageUrl;
    } else if (this.imageUrl.startsWith('data:image/')) {
      this.imageUrl = this.imageUrl;
    } else {
      this.imageUrl = './assets/images/' + this.imageUrl;
    }
  }
  ngOnInit() {
    this.initImageUrl();
    this.startGame();
  }

  isSorted(indexes): Boolean {
    let i: number = 0;
    for (i = 0; i < indexes.length; i++) {
      if (indexes[i] !== i) {
        return false;
      }
    }
    return true;
  }

  randomize(imageParts: any[]): any[] {
    let i = 0,
      img: any[] = [],
      ran = 0;
    for (i = 0; i < imageParts.length; i++) {
      ran = Math.floor(Math.random() * imageParts.length);
      while (imageParts[ran] == null) {
        ran = Math.floor(Math.random() * imageParts.length);
      }
      img.push(imageParts[ran]);
      this.position.push(imageParts[ran].index);
      imageParts[ran] = null;
    }
    this.printIndexes(this.indexes);
    this.printIndexes(this.position);
    return img;
  }

  onDragStart(event: any): void {
    event.dataTransfer.setData('data', event.target.id);
  }
  onDrop(event: any): void {
    let origin = event.dataTransfer.getData('data');
    let dest = event.target.id;

    let originEl = document.getElementById(origin);
    let destEl = document.getElementById(dest);

    let origincss = originEl.style.cssText;
    let destcss = event.target.style.cssText;

    destEl.style.cssText = origincss;
    originEl.style.cssText = destcss;
    originEl.id = dest;
    destEl.id = origin;

    for (let i = 0; i < this.position.length; i++) {
      if (this.position[i].toString() === originEl.id) {
        this.position[i] = Number(destEl.id);
      } else if (this.position[i].toString() === destEl.id) {
        this.position[i] = Number(originEl.id);
      }
    }

    this.printIndexes(this.position);
    this.steps++;
    this.gameComplete = this.isSorted(this.position);
    if (this.gameComplete) {
      if (this.timeVar) {
        this.timeVar.unsubscribe();
      }
    }
  }

  avanzamentoStep(idQ) {
    if (this.gameComplete) {
      this.visComp.gestisciAvanzamento(undefined);
    }
  }

  allowDrop(event): void {
    event.preventDefault();
    event.target.style.opacity = 1;
  }

  printIndexes(sorts: number[]): void {
    let i: number = 0,
      ind: string = '';
    for (i = 0; i < sorts.length; i++) {
      ind += sorts[i].toString() + ' , ';
    }
  }

  reRandomize(): void {
    this.gameComplete = false;
    this.Image = this.randomize(this.Image);
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
    this.ticks =
      Math.floor(t / 60).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
      }) +
      ':' +
      (t % 60).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
  }
  breakImageParts(): void {
    for (this.index = 0; this.index < this.totalBoxes; this.index++) {
      const x: string = this.boxSize * (this.index % this.gridsize) + '%';
      const y: string =
        this.boxSize * Math.floor(this.index / this.gridsize) + '%';
      let img: ImageBox = new ImageBox();
      img.x_pos = x;
      img.y_pos = y;
      img.index = this.index;
      this.indexes.push(this.index);
      this.Image.push(img);
    }

    this.boxSize = this.imageSize / this.gridsize;
  }

  initializeGame(): void {
    this.gridsize = Number(this.difficulty);
    this.boxSize = 100 / (this.gridsize - 1);
    this.index = 0;
    this.totalBoxes = this.gridsize * this.gridsize;
  }

  reset(): void {
    this.Image = [];
    this.indexes = [];
    this.position = [];
  }
}

class ImageBox {
  x_pos: string;
  y_pos: string;
  index: number;
}
