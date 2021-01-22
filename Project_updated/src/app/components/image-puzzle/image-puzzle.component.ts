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

  //Metodo di inizializzazione URL
  //Risorsa web
  //Risorsa codificata (esempio base64)
  //Risorsa locale
  constructor(private visComp: VisualizzaComponent) {
    this.getScreenSize();
    console.log("imageSize:" + this.imageSize)
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.reset();
    this.imageSize = window.innerWidth * 0.8;
    this.screenHeight = window.innerHeight;
    console.log(this.imageSize, this.screenHeight);

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

  //Metodo controllo sorting degli indici
  isSorted(indexes): Boolean {
    let i: number = 0;
    for (i = 0; i < indexes.length; i++) {
      if (indexes[i] !== i) {
        return false;
      }
    }
    return true;
  }

  //Metodo per riassegnare indici delle immagini in cui è stata scomposta l' immagine completa
  //Il metodo restituisce un array di indici
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

  //Metodo di settaggio dati realitivi all' operazione di trascinamento e salvati in oggetto DataTransfer
  onDragStart(event: any): void {
    event.dataTransfer.setData('data', event.target.id);
  }

  //Metodo get dei dati di trascinamento utilizzato per il confronto con il documento origine
  //se tutte le posizioni combaciano col file origine gameComplete viene settato a true
  //ogni azione avvalora di 1 il numero di step impiegati
  //timeVar registra il tempo impiegato a completare il puzzle
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
      //Metodo del visualizzaComponent
      this.visComp.gestisciAvanzamento(undefined);
    }
  }

  allowDrop(event): void {
    event.preventDefault();
    event.target.style.opacity = 1;
  }

  //Metodo di stampa degli indici
  printIndexes(sorts: number[]): void {
    let i: number = 0,
      ind: string = '';
    for (i = 0; i < sorts.length; i++) {
      ind += sorts[i].toString() + ' , ';
    }
  }

  //Metodo per scomporre nuovamente l' immagine completata in maniera casuale
  reRandomize(): void {
    this.gameComplete = false;
    this.Image = this.randomize(this.Image);
  }

  //Metodo di inizializzazione degli elementi per effettuare un game
  //-InizializeGame: settaggio della griglia per difficoltà selezionata
  //-breakImageParts: suddivisione dell' immagine in parti
  //-reRandomize scomposizione degli indici delle posizioni dei blocchi
  //-nuova sottoscrizione al timer timeVar
  startGame(): void {
    this.getScreenSize();

    if (this.timeVar) {
      this.timeVar.unsubscribe();
    }
    this.timeVar = this.timer.subscribe((t) => {
      this.settime(t);
    });
  }

  //Formattazione dell' ora 'mm:ss'
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

  //Metodo di suddivisione dell' immagine in base al livello di difficoltà selezionato nel configura e calcolato nell' initializeGame()
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

  //Metodo di inizializzazione game
  //Impostazione della gridlist in relazione al numero di boxes per difficoltà selezionata:
  //Facile: 4 boxes
  //Medio: 9 boxes
  //Difficile: 16 boxes
  initializeGame(): void {
    this.gridsize = Number(this.difficulty);
    this.boxSize = 100 / (this.gridsize - 1);
    this.index = 0;
    this.totalBoxes = this.gridsize * this.gridsize;
  }

  //Metodo reset
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
