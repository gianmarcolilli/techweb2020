(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Utente\Desktop\techweb2020\techweb2020\Project_updated\src\main.ts */"zUnb");


/***/ }),

/***/ "1x60":
/*!*******************************************************!*\
  !*** ./src/app/components/puzzle/puzzle.component.ts ***!
  \*******************************************************/
/*! exports provided: PuzzleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuzzleComponent", function() { return PuzzleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _visualizza_visualizza_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../visualizza/visualizza.component */ "C7BR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









const _c0 = function (a0, a2, a3) { return { "background-image": a0, "background-repeat": "no-repeat", "background-position": a2, "background-size": a3 }; };
function PuzzleComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function PuzzleComponent_div_2_Template_div_cdkDropListDropped_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.dropListDropped($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDragMoved", function PuzzleComponent_div_2_Template_div_cdkDragMoved_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.dragMoved($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itm_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDropListEnterPredicate", ctx_r0.dropListEnterPredicate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r0.boxSize, "px")("height", ctx_r0.boxSize, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](6, _c0, "url(" + ctx_r0.imageUrl + ") ", "" + ctx_r0.Image[itm_r3 - 1].x_pos + " " + ctx_r0.Image[itm_r3 - 1].y_pos + "", "" + ctx_r0.difficulty * 100 + "% " + ctx_r0.difficulty * 100 + "%"));
} }
function PuzzleComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Ottimo lavoro, hai completato il puzzle!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PuzzleComponent_div_3_Template_i_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.avanzamentoStep(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "play_arrow");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Hai impiegato ", ctx_r1.ticks, " e ", ctx_r1.steps, " mosse.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.hoProceduto);
} }
function PuzzleComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Tempo: ", ctx_r2.ticks, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Mosse : ", ctx_r2.steps, "");
} }
const _c1 = function (a0) { return { width: a0 }; };
class PuzzleComponent {
    //Quelli che saranno @Input
    // imageUrl:string = 'https://i.imgur.com/4X6O8T7.jpg'
    // difficulty: number = 3
    constructor(viewportRuler, visComp) {
        this.viewportRuler = viewportRuler;
        this.visComp = visComp;
        this.items = [];
        this.steps = 0;
        this.isCompleted = false;
        this.Image = [];
        this.timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, 1000);
        this.ticks = '0:00';
        this.hoProceduto = false;
        this.dropListEnterPredicate = (drag, drop) => {
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
            this.placeholder._dropListRef.enter(drag._dragRef, drag.element.nativeElement.offsetLeft, drag.element.nativeElement.offsetTop);
            return false;
        };
        this.target = null;
        this.source = null;
        this.getScreenSize();
    }
    getScreenSize(event) {
        this.reset();
        this.imageSize = window.innerWidth * 0.8;
        this.initializeGame();
        this.breakImageParts();
        //Usare shuffle
        // this.reRandomize();
        this.shuffle();
    }
    verifyAccomplishment() {
        let complete = true;
        for (let i = 0; i < this.Image.length; i++) {
            if (this.Image[i].index != (this.items[i] - 1)) {
                complete = false;
                return complete;
            }
        }
        this.timeVar.unsubscribe();
        return complete;
    }
    avanzamentoStep() {
        if (this.isCompleted) {
            this.hoProceduto = true;
            this.visComp.gestisciAvanzamento(undefined);
        }
    }
    ngOnInit() {
        for (let i = 0; i < (Math.pow(this.difficulty, 2)); i++) {
            this.items.push(i + 1);
        }
        this.imageName = this.imageUrl
            .substr(this.imageUrl.lastIndexOf('/') + 1)
            .split('.')[0];
        this.initImageUrl();
        this.startGame();
    }
    initializeGame() {
        this.boxSize = 100 / (this.difficulty - 1);
        this.totalBoxes = this.difficulty * this.difficulty;
    }
    reset() {
        this.Image = [];
    }
    initImageUrl() {
        if (this.imageUrl.startsWith('http')) {
            this.imageUrl = this.imageUrl;
        }
        else if (this.imageUrl.startsWith('data:image/')) {
            this.imageUrl = this.imageUrl;
        }
        else {
            this.imageUrl = './assets/images/' + this.imageUrl;
        }
    }
    startGame() {
        this.getScreenSize();
        if (this.timeVar) {
            this.timeVar.unsubscribe();
        }
        this.timeVar = this.timer.subscribe((t) => {
            this.settime(t);
        });
    }
    settime(t) {
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
            const x = (this.boxSize * (i % (this.difficulty))) + '%';
            const y = (this.boxSize * Math.floor(i / (this.difficulty))) + '%';
            let img = new ImageBox();
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
    dragMoved(e) {
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
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(this.items, this.sourceIndex, this.targetIndex);
            this.isCompleted = this.verifyAccomplishment();
        }
    }
    /** Determines the point of the page that was touched by the user. */
    getPointerPositionOnPage(event) {
        // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
        const point = __isTouchEvent(event) ? (event.touches[0] || event.changedTouches[0]) : event;
        const scrollPosition = this.viewportRuler.getViewportScrollPosition();
        return {
            x: point.pageX - scrollPosition.left,
            y: point.pageY - scrollPosition.top
        };
    }
}
PuzzleComponent.ɵfac = function PuzzleComponent_Factory(t) { return new (t || PuzzleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_visualizza_visualizza_component__WEBPACK_IMPORTED_MODULE_4__["VisualizzaComponent"])); };
PuzzleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PuzzleComponent, selectors: [["app-puzzle"]], viewQuery: function PuzzleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropListGroup"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropList"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.listGroup = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.placeholder = _t.first);
    } }, hostBindings: function PuzzleComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function PuzzleComponent_resize_HostBindingHandler($event) { return ctx.getScreenSize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { imageUrl: ["puzzleUrl", "imageUrl"], difficulty: "difficulty" }, decls: 5, vars: 7, consts: [["cdkDropListGroup", "", 1, "example-container"], ["cdkDropList", "", 3, "ngStyle", "cdkDropListEnterPredicate", "cdkDropListDropped"], ["cdkDropList", "", 3, "cdkDropListEnterPredicate", "cdkDropListDropped", 4, "ngFor", "ngForOf"], ["class", "successMessage", 4, "ngIf"], ["class", "score-detail", 4, "ngIf"], ["cdkDropList", "", 3, "cdkDropListEnterPredicate", "cdkDropListDropped"], ["cdkDrag", "", 1, "example-box", 3, "ngStyle", "cdkDragMoved"], [1, "successMessage"], ["mat-fab", "", "color", "primary", 1, "my-fab-button", 3, "disabled"], [1, "material-icons", 3, "click"], [1, "score-detail"]], template: function PuzzleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function PuzzleComponent_Template_div_cdkDropListDropped_1_listener($event) { return ctx.dropListDropped($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PuzzleComponent_div_2_Template, 2, 10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PuzzleComponent_div_3_Template, 9, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PuzzleComponent_div_4_Template, 5, 2, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, "" + ctx.imageSize + "px"))("cdkDropListEnterPredicate", ctx.dropListEnterPredicate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCompleted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isCompleted);
    } }, directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropListGroup"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDrag"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]], styles: [".example-list[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n}\n\n.example-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: table-cell;\n  padding: 4px;\n}\n\n.example-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: 4vh 0;\n}\n\n.example-box[_ngcontent-%COMP%] {\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-box[_ngcontent-%COMP%]:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  opacity: 0.6;\n}\n\n.cdk-drop-list[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n\n.successMessage[_ngcontent-%COMP%] {\n  margin: 3%;\n  border: 1px solid green;\n  border-radius: 10px;\n  color: #5c5f66;\n  background-color: lightgreen;\n  padding: 2%;\n}\n\n.successMessage[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.2), 0px 0px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 8px rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wdXp6bGUvcHV6emxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0FBSEY7O0FBTUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBSEY7O0FBTUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsdURBQUE7RUFDQSwrR0FBQTtBQUhGOztBQU9BO0VBQ0UscUhBQUE7RUFFQSxZQUFBO0FBTEY7O0FBUUE7RUFDRSxhQUFBO0FBTEY7O0FBUUE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUhBQUE7QUFMRjs7QUFTQTtFQUNFLFlBQUE7QUFORjs7QUFTQTtFQUNFLHNEQUFBO0FBTkY7O0FBU0E7RUFDRSxpQkFBQTtBQU5GOztBQVNBO0VBQ0UsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQXBFVztFQXFFWCw0QkFBQTtFQUNBLFdBQUE7QUFORjs7QUFPRTtFQUNFLHdIQUFBO0FBTEoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3B1enpsZS9wdXp6bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZm9udC1jb2xvcjogIzVjNWY2NjtcclxuJHByaW1hcnktY29sb3I6ICMzYjNhOTk7XHJcbiRiYWNrZ3JvdW5kOiByZ2JhKDIxMiwgMjAwLCAyMDAsIDAuNjg1KTtcclxuXHJcbi5leGFtcGxlLWxpc3Qge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uZXhhbXBsZS1saXN0IGxpIHtcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIHBhZGRpbmc6IDRweDtcclxufVxyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW46IDR2aCAwO1xyXG59XHJcblxyXG4uZXhhbXBsZS1ib3gge1xyXG4gIGN1cnNvcjogbW92ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyMDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxuICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksXHJcbiAgICAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG59XHJcblxyXG4uZXhhbXBsZS1ib3g6YWN0aXZlIHtcclxuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcbiAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gIG9wYWNpdHk6IDAuNjtcclxufVxyXG5cclxuLmNkay1kcm9wLWxpc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1wcmV2aWV3IHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcbiAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG59XHJcblxyXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xyXG4gIG9wYWNpdHk6IDAuMztcclxufVxyXG5cclxuLmNkay1kcmFnLWFuaW1hdGluZyB7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIG1hcmdpbi1yaWdodDogNHB4O1xyXG59XHJcblxyXG4uc3VjY2Vzc01lc3NhZ2Uge1xyXG4gIG1hcmdpbjogMyU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBjb2xvcjogJGZvbnQtY29sb3I7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcclxuICBwYWRkaW5nOiAyJTtcclxuICBidXR0b24ge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA5cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAgICAgMHB4IDBweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggOHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PuzzleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-puzzle',
                templateUrl: './puzzle.component.html',
                styleUrls: ['./puzzle.component.scss']
            }]
    }], function () { return [{ type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["ViewportRuler"] }, { type: _visualizza_visualizza_component__WEBPACK_IMPORTED_MODULE_4__["VisualizzaComponent"] }]; }, { imageUrl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['puzzleUrl']
        }], difficulty: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['difficulty']
        }], listGroup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropListGroup"]]
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropList"]]
        }], getScreenSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();
function __indexOf(collection, node) {
    return Array.prototype.indexOf.call(collection, node);
}
;
/** Determines whether an event is a touch event. */
function __isTouchEvent(event) {
    return event.type.startsWith('touch');
}
function __isInsideDropListClientRect(dropList, x, y) {
    const { top, bottom, left, right } = dropList.element.nativeElement.getBoundingClientRect();
    return y >= top && y <= bottom && x >= left && x <= right;
}
class ImageBox {
}


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "jC6o");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function HeaderComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "dialpad");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Signup Autore");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Login Autore");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.navigateToAutore(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "assignment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Menu' Autore");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.navigateToHome(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "videogame_asset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Menu' Player");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onLogout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "exit_to_app");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.showFiller = false;
        this.userIsAuthenticated = false;
    }
    //navigazione verso HomePage
    navigateToHome() {
        this.router.navigateByUrl("");
    }
    //navigazione verso component autore
    navigateToAutore() {
        this.router.navigateByUrl("autore");
    }
    //navigazione verso component player
    navigateToPlayer() {
        this.router.navigateByUrl("player");
    }
    ngOnInit() {
        //per eseguire l'autenticazione
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.authListenerSubs = this.authService
            .getAuthStatusListener()
            .subscribe(isAuthenticated => {
            this.userIsAuthenticated = isAuthenticated;
        });
    }
    //per eseguire logout da autore
    onLogout() {
        this.authService.logout();
    }
    //completa il logout tramite unsubscribe
    ngOnDestroy() {
        this.authListenerSubs.unsubscribe();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], inputs: { myTitle: ["my-title", "myTitle"] }, decls: 17, vars: 7, consts: [["color", "primary"], ["mat-button", "", "aria-label", "Example icon-button with home icon", 1, "example-icon", 3, "click"], ["id", "stemma"], [1, "title"], ["mat-icon-button", "", "aria-label", "Example icon-button with a menu", 1, "menu", 3, "matMenuTriggerFor"], [1, "mat-menu-container"], ["menu", "matMenu"], ["mat-menu-item", "", "routerLink", "/signup", "routerLinkActive", "mat-accent", 4, "ngIf"], ["mat-menu-item", "", "routerLink", "/login", "routerLinkActive", "mat-accent", 4, "ngIf"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", "routerLink", "/signup", "routerLinkActive", "mat-accent"], ["mat-menu-item", "", "routerLink", "/login", "routerLinkActive", "mat-accent"], ["mat-menu-item", "", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_1_listener() { return ctx.navigateToHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "M&M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-menu", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HeaderComponent_button_12_Template, 5, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HeaderComponent_button_13_Template, 5, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HeaderComponent_button_14_Template, 5, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HeaderComponent_button_15_Template, 5, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HeaderComponent_button_16_Template, 5, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.myTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userIsAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userIsAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userIsAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userIsAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userIsAuthenticated);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["_MatMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Acme&family=Architects+Daughter&family=Caveat:wght@700&family=Courgette&family=Montserrat:wght@500&family=Patrick+Hand&family=Permanent+Marker&display=swap');\r\n\r\n.mat-toolbar[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  opacity: 100%;\r\n  width: 100%;\r\n  font-family: \"Acme\", sans-serif;\r\n}\r\n\r\n.mat-menu-container[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  float: left;\r\n}\r\n\r\n@media (max-width: 1024px) {\r\n  .menu[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n}\r\n\r\n.container1[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  justify-content: space-between;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  font-family: \"Acme\", sans-serif;\r\n  font-size: 1.5em;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  font-size: 2.5em;\r\n  text-decoration: none;\r\n  color: white;\r\n  font-family: \"Acme\", sans-serif;\r\n}\r\n\r\nspan[_ngcontent-%COMP%] {\r\n  font-family: \"Acme\", sans-serif;\r\n}\r\n\r\n.example-icon[_ngcontent-%COMP%] {\r\n  padding: 2px;\r\n  float: left;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbU5BQW1OOztBQUVuTjtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLFdBQVc7RUFDWCwrQkFBK0I7QUFDakM7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUNBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFDQTtFQUNFLFdBQVc7RUFDWCw4QkFBOEI7QUFDaEM7O0FBQ0E7RUFDRSwrQkFBK0I7RUFDL0IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QWNtZSZmYW1pbHk9QXJjaGl0ZWN0cytEYXVnaHRlciZmYW1pbHk9Q2F2ZWF0OndnaHRANzAwJmZhbWlseT1Db3VyZ2V0dGUmZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEA1MDAmZmFtaWx5PVBhdHJpY2srSGFuZCZmYW1pbHk9UGVybWFuZW50K01hcmtlciZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbi5tYXQtdG9vbGJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgb3BhY2l0eTogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LWZhbWlseTogXCJBY21lXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuLm1hdC1tZW51LWNvbnRhaW5lcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAubWVudXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcbi5jb250YWluZXIxIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLnRpdGxlIHtcclxuICBmb250LWZhbWlseTogXCJBY21lXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxufVxyXG5cclxuYSB7XHJcbiAgZm9udC1zaXplOiAyLjVlbTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkFjbWVcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuc3BhbiB7XHJcbiAgZm9udC1mYW1pbHk6IFwiQWNtZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZXhhbXBsZS1pY29uIHtcclxuICBwYWRkaW5nOiAycHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { myTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['my-title']
        }] }); })();


/***/ }),

/***/ "AS+B":
/*!******************************************************************!*\
  !*** ./src/app/components/autore/modifica/modifica.component.ts ***!
  \******************************************************************/
/*! exports provided: ModificaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificaComponent", function() { return ModificaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _mime_type_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mime-type.validator */ "dYRJ");
/* harmony import */ var src_app_services_dummy_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/dummy-api.service */ "yYPB");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









function ModificaComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.imagePreview, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r1.form.value.title);
} }
class ModificaComponent {
    constructor(api, router) {
        this.api = api;
        this.router = router;
        this.imagePreview = "";
    }
    //Trasforma il file immagine in base64, dopo di che lo passiamo a un servizio che lo porta in un server online, e ci restiruisce il link
    onImagePicked(event) {
        const file = event.target.files[0];
        this.form.patchValue({ image: file });
        this.form.get('image').updateValueAndValidity();
        const reader = new FileReader();
        reader.onload = () => {
            this.imagePreview = reader.result;
            let base64 = this.imagePreview.split('base64');
            this.api.uploadImage(base64[1]).subscribe((res) => {
                this.imagePreview = res.data.link;
                this.sfondo = this.imagePreview;
                console.log(this.sfondo);
            });
        };
        reader.readAsDataURL(file);
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                asyncValidators: [_mime_type_validator__WEBPACK_IMPORTED_MODULE_2__["mimeType"]]
            })
        });
    }
}
ModificaComponent.ɵfac = function ModificaComponent_Factory(t) { return new (t || ModificaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_dummy_api_service__WEBPACK_IMPORTED_MODULE_3__["DummyApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
ModificaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModificaComponent, selectors: [["app-modifica"]], inputs: { id: "id", title: "title", sfondo: "sfondo" }, decls: 18, vars: 4, consts: [[1, "container-input"], ["type", "text", "id", "id", "name", "id", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "title", "name", "title", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Copia il link dal web o carica dal pc", "id", "sfondo", "name", "sfondo", 1, "form-control", 3, "ngModel", "ngModelChange"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["type", "file", 3, "change"], ["filePicker", ""], ["class", "image-preview", 4, "ngIf"], [1, "image-preview"], [3, "src", "alt"]], template: function ModificaComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Id:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ModificaComponent_Template_input_ngModelChange_3_listener($event) { return ctx.id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Titolo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ModificaComponent_Template_input_ngModelChange_7_listener($event) { return ctx.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Immagine copertina:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ModificaComponent_Template_input_ngModelChange_11_listener($event) { return ctx.sfondo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModificaComponent_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16); return _r0.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Pick Image ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ModificaComponent_Template_input_change_15_listener($event) { return ctx.onImagePicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ModificaComponent_div_17_Template, 2, 2, "div", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.sfondo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imagePreview !== "" && ctx.imagePreview && ctx.form.get("image").valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: [".container-input[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n}\n.container-input[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 60%;\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdXRvcmUvbW9kaWZpY2EvbW9kaWZpY2EuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQUpGO0FBS0U7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQUhKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hdXRvcmUvbW9kaWZpY2EvbW9kaWZpY2EuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZm9udC1jb2xvcjogIzVjNWY2NjtcclxuJHByaW1hcnktY29sb3I6ICMzYjNhOTk7XHJcbiRiYWNrZ3JvdW5kIDogcmdiYSgyMTIsIDIwMCwgMjAwLCAwLjY4NSk7XHJcbiRibHVCYWNrZ3JvdW5kOiAjMTQxNDRkYWY7XHJcblxyXG4uY29udGFpbmVyLWlucHV0e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLmZvcm0tY29udHJvbHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModificaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modifica',
                templateUrl: './modifica.component.html',
                styleUrls: ['./modifica.component.scss']
            }]
    }], function () { return [{ type: src_app_services_dummy_api_service__WEBPACK_IMPORTED_MODULE_3__["DummyApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['id']
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['title']
        }], sfondo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['sfondo']
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "C7BR":
/*!***************************************************************!*\
  !*** ./src/app/components/visualizza/visualizza.component.ts ***!
  \***************************************************************/
/*! exports provided: VisualizzaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizzaComponent", function() { return VisualizzaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-device-detector */ "9YtQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_dummy_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/dummy-api.service */ "yYPB");








function VisualizzaComponent_section_1_div_1_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VisualizzaComponent_section_1_div_1_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r4.iniziaStep(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.hoDatoOk || ctx_r3.hoProcedutoIo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.startText ? ctx_r3.startText : "Inizia", " ");
} }
function VisualizzaComponent_section_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, VisualizzaComponent_section_1_div_1_button_6_Template, 2, 2, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.storia.nome, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.storia.urlBackground, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.currentStepId < 0);
} }
function VisualizzaComponent_section_1_section_6_div_1_div_1_img_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 18);
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r13.currentStep.backImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function VisualizzaComponent_section_1_section_6_div_1_div_1_ng_container_13_mat_list_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VisualizzaComponent_section_1_section_6_div_1_div_1_ng_container_13_mat_list_1_Template_mat_list_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const i_r17 = ctx.index; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); return ctx_r18.gestisciAvanzamento(i_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answ_r16 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r15.hoDatoOk || ctx_r15.hoProcedutoIo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](answ_r16);
} }
function VisualizzaComponent_section_1_section_6_div_1_div_1_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VisualizzaComponent_section_1_section_6_div_1_div_1_ng_container_13_mat_list_1_Template, 4, 2, "mat-list", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r14.currentStep.answers);
} }
function VisualizzaComponent_section_1_section_6_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, VisualizzaComponent_section_1_section_6_div_1_div_1_img_11_Template, 1, 1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, VisualizzaComponent_section_1_section_6_div_1_div_1_ng_container_13_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Punteggio : ", ctx_r7.punteggio, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.currentStep.activityTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.currentStep.backImg != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.currentStep.answers && ctx_r7.currentStep.answers.length > 0);
} }
function VisualizzaComponent_section_1_section_6_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-puzzle", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Punteggio : ", ctx_r8.punteggio, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.currentStep.activityTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("difficulty", ctx_r8.currentStep.difficulty)("puzzleUrl", ctx_r8.currentStep.puzzleImg);
} }
function VisualizzaComponent_section_1_section_6_div_1_div_3_img_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 18);
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r21.currentStep.backImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function VisualizzaComponent_section_1_section_6_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, VisualizzaComponent_section_1_section_6_div_1_div_3_img_10_Template, 1, 1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-dragndrop", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Punteggio : ", ctx_r9.punteggio, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.currentStep.activityTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.currentStep.backImg != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("order", ctx_r9.currentStep.order);
} }
function VisualizzaComponent_section_1_section_6_div_1_div_4_img_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 18);
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r22.currentStep.backImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function VisualizzaComponent_section_1_section_6_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, VisualizzaComponent_section_1_section_6_div_1_div_4_img_10_Template, 1, 1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VisualizzaComponent_section_1_section_6_div_1_div_4_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r23.tempRisposta = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VisualizzaComponent_section_1_section_6_div_1_div_4_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r25.gestisciAvanzamento(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "play_arrow");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Punteggio : ", ctx_r10.punteggio, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.currentStep.activityTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.currentStep.backImg != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r10.tempRisposta);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r10.hoDatoOk || ctx_r10.hoProcedutoIo);
} }
function VisualizzaComponent_section_1_section_6_div_1_div_5_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 18);
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r26.currentStep.backImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function VisualizzaComponent_section_1_section_6_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, VisualizzaComponent_section_1_section_6_div_1_div_5_img_7_Template, 1, 1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VisualizzaComponent_section_1_section_6_div_1_div_5_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r27.gestisciAvanzamento(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "play_arrow");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Punteggio : ", ctx_r11.punteggio, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.currentStep.backImg != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.currentStep.activityTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r11.hoDatoOk || ctx_r11.hoProcedutoIo);
} }
function VisualizzaComponent_section_1_section_6_div_1_div_6_img_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 18);
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r29.currentStep.backImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function VisualizzaComponent_section_1_section_6_div_1_div_6_section_10_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VisualizzaComponent_section_1_section_6_div_1_div_6_section_10_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r32.okClassifica = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Visualizza classifica ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VisualizzaComponent_section_1_section_6_div_1_div_6_app_classifica_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-classifica", 33);
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("idClasse", ctx_r31.idClasse);
} }
function VisualizzaComponent_section_1_section_6_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Partita Finita");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, VisualizzaComponent_section_1_section_6_div_1_div_6_img_8_Template, 1, 1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, VisualizzaComponent_section_1_section_6_div_1_div_6_section_10_Template, 3, 0, "section", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, VisualizzaComponent_section_1_section_6_div_1_div_6_app_classifica_11_Template, 1, 1, "app-classifica", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.currentStep.activityTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.currentStep.backImg != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.currentStep.action == "fine" && ctx_r12.idPartita != 0 - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.okClassifica);
} }
function VisualizzaComponent_section_1_section_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VisualizzaComponent_section_1_section_6_div_1_div_1_Template, 14, 4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VisualizzaComponent_section_1_section_6_div_1_div_2_Template, 11, 4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, VisualizzaComponent_section_1_section_6_div_1_div_3_Template, 12, 4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, VisualizzaComponent_section_1_section_6_div_1_div_4_Template, 18, 5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VisualizzaComponent_section_1_section_6_div_1_div_5_Template, 16, 4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, VisualizzaComponent_section_1_section_6_div_1_div_6_Template, 12, 4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.currentStep.action == "quiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.currentStep.action == "puzzle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.currentStep.action == "dnd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.currentStep.action == "domanda");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.currentStep.action == "informazione");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.currentStep.action == "fine");
} }
function VisualizzaComponent_section_1_section_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VisualizzaComponent_section_1_section_6_div_1_Template, 7, 6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.currentStepId != 0 - 1);
} }
function VisualizzaComponent_section_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VisualizzaComponent_section_1_div_1_Template, 7, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, VisualizzaComponent_section_1_section_6_Template, 2, 1, "section", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentStepId < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.didascalia, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentStep);
} }
class VisualizzaComponent {
    constructor(device, activeRoute, apiDb, router) {
        this.device = device;
        this.activeRoute = activeRoute;
        this.apiDb = apiDb;
        this.router = router;
        this.title = "";
        this.urlIconaPrincip = "";
        this.didascalia = "";
        this.startText = "";
        this.steps = [];
        this.currentStepId = -1;
        this.nextStepId = -1;
        this.hoDatoOk = false;
        this.hoProcedutoIo = false;
        this.variabileOk = 0;
        this.numeroPlayers = 0;
        this.arrayPlayers = [];
        this.stop = false;
        this.tempRisposta = "";
        this.idPartita = -1;
        this.punteggio = 0;
        this.timestampGlobale = Date.now();
        this.okClassifica = false;
    }
    randomize(el) {
        return lodash__WEBPACK_IMPORTED_MODULE_3__["shuffle"](el);
    }
    //Metodo refresh della storia tramite get del servizio dummyApi.
    //Questo metodo ha la funzione di rimanere in ascolto di eventuali modifiche lato database e permette ai players di visualizzare gli avanzamenti di squadra.
    refresh() {
        this.apiDb.getStoria(this.id).subscribe((singleStory) => {
            this.storia = this.apiDb.reMap(singleStory);
            this.steps = this.storia.steps;
            this.apiDb.getStep(this.id).subscribe((singleStory) => {
                let str = this.apiDb.reMap(singleStory);
                str.steps.forEach(element => {
                    if (element.activityId == this.currentStepId) {
                        this.currentStep = element;
                    }
                });
            });
            console.log("la mia storia è" + JSON.stringify(this.storia));
        });
    }
    ngOnInit() {
        // let info = this.device.getDeviceInfo()
        // console.log(info)
        this.stepStartAt = Date.now();
        this.resetStepTimer();
        if (this.activeRoute.snapshot.params.partita) {
            this.idPartita = this.activeRoute.snapshot.params.partita;
        }
        //Quando la partita è in modalità gruppo o classe, attraverso la tecnica del polling vengono agiornati dati interrogando il server ogni secondo (1000 millisecondi)
        if (this.idPartita != -1) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(1000) // run every 1000 millisecond
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((res, i) => {
                return this.apiDb.getGame(this.idPartita);
            }))
                .subscribe(res => {
                if (!res)
                    return;
                this.idClasse = res.idClasse;
                this.numeroPlayers = res.numeroPlayer;
                this.arrayPlayers = this.array(res.numeroPlayer);
                this.variabileOk = res.variabileOk;
                this.punteggio = res.score;
                //Se lo step corrente cambia a database a seguito di un update da parte di altro player, il giocatore modifica in locale i dati aggiornati
                if (this.currentStepId != res.currentStepId) {
                    this.currentStepId = res.currentStepId;
                    this.apiDb.getStep(this.id).subscribe((singleStory) => {
                        let str = this.apiDb.reMap(singleStory);
                        str.steps.forEach(element => {
                            if (element.activityId == this.currentStepId) {
                                this.currentStep = element;
                            }
                        });
                    });
                    this.nextStepId = res.nextStepId;
                    this.hoDatoOk = false;
                    this.hoProcedutoIo = false;
                    this.stop = false;
                    return;
                }
                //Nel caso in cui uno dei compagni ha fornito una risposta prima di me ottengo da database punteggio e prossimo step,
                //mi metto in attesa degli altri player attraverso la variabile locale hoDatoOk
                if (this.nextStepId != res.nextStepId && this.hoDatoOk == false && this.hoProcedutoIo == false && this.stop == false) {
                    this.stop = true;
                    // alert('compagno andato avanti! vuoi andare avanti anche tu?')
                    this.apiDb.updateGame(this.idPartita, res.nextStepId, this.punteggio).subscribe((risp) => {
                        console.log(risp);
                        this.hoDatoOk = true;
                        this.nextStepId = risp.result.nextStepId;
                        this.stop = false;
                    });
                    return;
                }
                // if (this.hoProcedutoIo == true && this.nextStepId == res.nextStepId && this.hoDatoOk == true && this.stop == true) {
                //   var timeS = Date.now();
                //   this.stop = false
                //   return;
                // }
                //Se tutti i player hanno dato Ok allora il visualizza carica localmente anche id dello step corrente
                if (res.numeroPlayer == res.variabileOk && this.stop == false) {
                    this.stop = true;
                    this.apiDb.updateGame(this.idPartita, res.nextStepId, this.punteggio).subscribe((risp) => {
                        this.currentStepId = risp.result.currentStepId;
                        this.apiDb.getStep(this.id).subscribe((singleStory) => {
                            let str = this.apiDb.reMap(singleStory);
                            str.steps.forEach(element => {
                                if (element.activityId == this.currentStepId) {
                                    this.currentStep = element;
                                }
                            });
                        });
                        this.nextStepId = risp.result.nextStepId;
                        this.hoDatoOk = false;
                        this.hoProcedutoIo = false;
                        this.stop = false;
                    });
                    this.refresh();
                    return;
                }
            }, error => { });
        }
        this.id = this.activeRoute.snapshot.params.id;
        this.refresh();
    }
    //Metodo che gestisce l' inizia partita dallo step zero
    iniziaStep() {
        if (this.idPartita == -1) {
            this.currentStepId = 0;
            this.apiDb.getStep(this.id).subscribe((singleStory) => {
                let str = this.apiDb.reMap(singleStory);
                str.steps.forEach(element => {
                    if (element.activityId == this.currentStepId) {
                        this.currentStep = element;
                    }
                });
            });
        }
        else {
            this.stop = true;
            this.hoProcedutoIo = true;
            this.hoDatoOk = true;
            this.notificaAvanzamento(0);
        }
    }
    //Metodo utilizzato solamente in tipologia step 'fine' che permette di essere reindirizzati verso la classifica dei punteggi ottenuti.
    fine() {
        this.router.navigateByUrl("classifica");
    }
    //Metodo di update dell' id del prossimo step su database.
    //Questo metodo viene utilizzato dal gestisciAvanzamento() che si occupa di individuare l' id dell prossimo Step.
    notificaAvanzamento(nextStepId) {
        this.apiDb.updateGame(this.idPartita, nextStepId, this.punteggio).subscribe();
        this.nextStepId = nextStepId;
    }
    //Metodo impiegato per calcolare il punteggio.
    //Lo score assegnato è in forma di bonus in caso di risposta corretta, in forma di malus in caso di risposta sbagliata. Nel caso di squadra vale come risposta quella del primo player a risponderee/o completare puzzle/dnd
    //Bonus e malus sono resi proporzionali al timer: quanto più veloce a rispondere correttamente, quanto meno veloce a rispondere scorrettamente.
    gestisciPunteggio(timer) {
        if (timer == NaN || timer == undefined || timer == null)
            return;
        // if (this.currentStepId == 0) return 0;
        if (this.currentStep.action == "informazione")
            return 0;
        if (this.nextStepId == this.currentStep.correctId)
            return Math.round(500 / timer);
        if (this.nextStepId == this.currentStep.wrongId)
            return -Math.round(timer / 50);
    }
    //Metodo che restituisce l' intervallo tra inizio e fine step in secondi (/1000)
    resetStepTimer() {
        let oldTimer = this.stepStartAt;
        this.stepStartAt = Date.now();
        return (this.stepStartAt - oldTimer) / 1000;
    }
    //Metodo che restituisce un array di dimensione data, impiegato nel nostro caso per costituire un array di player in base a quanto selezionato dallo user
    array(length) {
        return Array(length);
    }
    //Metodo di valutazione della risposta forita dall' utente.
    //Questo metodo valuta nel primo if se la risposta fornita dall' utente è di tipo "purchessia(presenza/assenza)", nel nostro caso contrassegnata con 'right'
    //Secondo if effetua un controllo sulla presenza o meno della risposta in una lista di valori
    valutaDomanda() {
        if (this.currentStep.tipoDomanda == 'right') {
            return true;
        }
        if (this.currentStep.tipoDomanda == 'array') {
            for (let i = 0; i < this.currentStep.risposteDomanda.length; i++) {
                if (this.tempRisposta.toLowerCase() == this.currentStep.risposteDomanda[i].toLowerCase()) {
                    return true;
                }
            }
        }
        return false;
    }
    //Metodo di gestione avanzamento agli step della storia differenziata a seconda della modalita (singolo o altro), tipologia (informazione, puzzle, domanda, ecc.)
    //Il metodo inoltre abbina alla gestione degli id anche la gestione del timer e del punteggio
    gestisciAvanzamento(idQuiz) {
        // assegnare il punteggio
        console.log("step corrente: " + this.currentStepId);
        if (this.currentStepId == -1)
            return;
        if (this.currentStep.action == "informazione" || this.currentStep.action == "puzzle" || this.currentStep.action == "dnd") {
            //Avanzamento in gioco modalità singolo
            if (this.idPartita == -1) {
                this.nextStepId = this.currentStep.correctId;
                var tempoImpiegato = this.resetStepTimer();
                console.log("impiegati " + tempoImpiegato + " secondi.");
                this.punteggio = this.punteggio + this.gestisciPunteggio(tempoImpiegato);
                this.currentStepId = this.currentStep.correctId;
                this.apiDb.getStep(this.id).subscribe((singleStory) => {
                    let str = this.apiDb.reMap(singleStory);
                    str.steps.forEach(element => {
                        if (element.activityId == this.currentStepId) {
                            this.currentStep = element;
                        }
                    });
                });
            }
            else {
                //Avanzamento gioco in modalità squadre
                console.log("sto per far diventare lo step corrente " + this.currentStep.correctId);
                this.nextStepId = this.currentStep.correctId;
                this.stop = true;
                this.hoProcedutoIo = true;
                this.hoDatoOk = true;
                var tempoImpiegato = this.resetStepTimer();
                console.log("impiegati " + tempoImpiegato + " secondi.");
                this.punteggio = this.punteggio + this.gestisciPunteggio(tempoImpiegato);
                this.notificaAvanzamento(this.nextStepId);
            }
            return;
        }
        if (this.currentStep.action == "domanda" || this.currentStep.action == "quiz") {
            if (this.currentStep.action == "domanda") {
                console.log("sto confrontando questo :" + this.tempRisposta);
                console.log("con questo  :" + this.currentStep.risposteDomanda);
                if (this.valutaDomanda()) {
                    alert("hai dato la risposta corretta");
                    //Avanzamento in gioco modalità singolo)
                    if (this.idPartita == -1) {
                        this.nextStepId = this.currentStep.correctId;
                        var tempoImpiegato = this.resetStepTimer();
                        console.log("impiegati " + tempoImpiegato + " secondi.");
                        this.punteggio = this.punteggio + this.gestisciPunteggio(tempoImpiegato);
                        this.currentStepId = this.currentStep.correctId;
                        this.apiDb.getStep(this.id).subscribe((singleStory) => {
                            let str = this.apiDb.reMap(singleStory);
                            str.steps.forEach(element => {
                                if (element.activityId == this.currentStepId) {
                                    this.currentStep = element;
                                }
                            });
                        });
                    }
                    else {
                        //Avanzamento gioco in modalità squadre
                        console.log("sto per far diventare lo step corrente " + this.currentStep.correctId);
                        this.nextStepId = this.currentStep.correctId;
                        this.stop = true;
                        this.hoProcedutoIo = true;
                        this.hoDatoOk = true;
                        var tempoImpiegato = this.resetStepTimer();
                        console.log("impiegati " + tempoImpiegato + " secondi.");
                        this.punteggio = this.punteggio + this.gestisciPunteggio(tempoImpiegato);
                        this.notificaAvanzamento(this.nextStepId);
                    }
                }
                else {
                    alert("hai dato la risposta sbagliata");
                    //Avanzamento gioco in modalità individuale
                    if (this.idPartita == -1) {
                        this.nextStepId = this.currentStep.wrongId;
                        var tempoImpiegato = this.resetStepTimer();
                        console.log("impiegati " + tempoImpiegato + " secondi.");
                        this.punteggio = this.punteggio + this.gestisciPunteggio(tempoImpiegato);
                        this.currentStepId = this.currentStep.wrongId;
                        this.apiDb.getStep(this.id).subscribe((singleStory) => {
                            let str = this.apiDb.reMap(singleStory);
                            str.steps.forEach(element => {
                                if (element.activityId == this.currentStepId) {
                                    this.currentStep = element;
                                }
                            });
                        });
                    }
                    else {
                        //Avanzamento gioco in modalità squadre
                        console.log("sto per far diventare lo step corrente " + this.currentStep.wrongId);
                        this.nextStepId = this.currentStep.wrongId;
                        this.stop = true;
                        this.hoProcedutoIo = true;
                        this.hoDatoOk = true;
                        var tempoImpiegato = this.resetStepTimer();
                        console.log("impiegati " + tempoImpiegato + " secondi.");
                        this.punteggio = this.punteggio + this.gestisciPunteggio(tempoImpiegato);
                        this.notificaAvanzamento(this.nextStepId);
                    }
                }
                this.tempRisposta = "";
            }
            if (this.currentStep.action == "quiz") {
                let correctQuizResp = this.currentStep.quizCorrectIdx;
                if (idQuiz == correctQuizResp) {
                    //Avanzamento gioco in modalità individuale
                    if (this.idPartita == -1) {
                        this.nextStepId = this.currentStep.correctId;
                        var tempoImpiegato = this.resetStepTimer();
                        console.log("impiegati " + tempoImpiegato + " secondi.");
                        this.punteggio = this.punteggio + this.gestisciPunteggio(tempoImpiegato);
                        this.currentStepId = this.currentStep.correctId;
                        this.apiDb.getStep(this.id).subscribe((singleStory) => {
                            let str = this.apiDb.reMap(singleStory);
                            str.steps.forEach(element => {
                                if (element.activityId == this.currentStepId) {
                                    this.currentStep = element;
                                }
                            });
                        });
                    }
                    else {
                        //Avanzamento gioco in modalità squadre
                        console.log("sto per far diventare lo step corrente " + this.currentStep.correctId);
                        this.nextStepId = this.currentStep.correctId;
                        this.stop = true;
                        this.hoProcedutoIo = true;
                        this.hoDatoOk = true;
                        var tempoImpiegato = this.resetStepTimer();
                        console.log("impiegati " + tempoImpiegato + " secondi.");
                        this.punteggio = this.punteggio + this.gestisciPunteggio(tempoImpiegato);
                        this.notificaAvanzamento(this.nextStepId);
                    }
                }
                else {
                    //Avanzamento gioco in modalità individuale
                    if (this.idPartita == -1) {
                        this.nextStepId = this.currentStep.wrongId;
                        var tempoImpiegato = this.resetStepTimer();
                        console.log("impiegati " + tempoImpiegato + " secondi.");
                        this.punteggio = this.punteggio + this.gestisciPunteggio(tempoImpiegato);
                        this.currentStepId = this.currentStep.wrongId;
                        this.apiDb.getStep(this.id).subscribe((singleStory) => {
                            let str = this.apiDb.reMap(singleStory);
                            str.steps.forEach(element => {
                                if (element.activityId == this.currentStepId) {
                                    this.currentStep = element;
                                }
                            });
                        });
                    }
                    else {
                        //Avanzamento gioco in modalità squadre
                        console.log("sto per far diventare lo step corrente " + this.currentStep.wrongId);
                        this.nextStepId = this.currentStep.wrongId;
                        this.stop = true;
                        this.hoProcedutoIo = true;
                        this.hoDatoOk = true;
                        var tempoImpiegato = this.resetStepTimer();
                        console.log("impiegati " + tempoImpiegato + " secondi.");
                        this.punteggio = this.punteggio + this.gestisciPunteggio(tempoImpiegato);
                        this.notificaAvanzamento(this.nextStepId);
                    }
                }
            }
        }
        return;
    }
}
VisualizzaComponent.ɵfac = function VisualizzaComponent_Factory(t) { return new (t || VisualizzaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__["DeviceDetectorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_dummy_api_service__WEBPACK_IMPORTED_MODULE_6__["DummyApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
VisualizzaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VisualizzaComponent, selectors: [["app-visualizza"]], decls: 2, vars: 2, consts: [[3, "my-title"], ["id", "mainSection", 4, "ngIf"], ["id", "mainSection"], ["class", "mainContainer", 4, "ngIf"], [4, "ngIf"], [1, "mainContainer"], [1, "copertina"], [1, "storyTitle"], [1, "imgCopertina", 3, "src"], [1, "button-container"], ["mat-raised-button", "", "color", "link", 3, "disabled", "click", 4, "ngIf"], ["mat-raised-button", "", "color", "link", 3, "disabled", "click"], [1, "header-matcard"], [1, "container-player"], [1, "punteggio"], [1, "typing-text"], [1, "backImage"], ["class", "img-responsive", 3, "src", 4, "ngIf"], [1, "img-responsive", 3, "src"], ["role", "list", 3, "click", 4, "ngFor", "ngForOf"], ["role", "list", 3, "click"], ["mat-raised-button", "", "color", "accent", "role", "listitem", 3, "disabled"], ["myIdentifier", ""], [3, "difficulty", "puzzleUrl"], [3, "order"], [1, "input-container"], ["type", "text", "placeholder", "Inserisci qui la risposta ", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "container-btn-avanti"], ["mat-mini-fab", "", 1, "btn-avanti", 3, "disabled", "click"], [1, "material-icons"], [1, "title"], [3, "idClasse", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click"], [3, "idClasse"]], template: function VisualizzaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VisualizzaComponent_section_1_Template, 7, 4, "section", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("my-title", "Visualizza");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.storia);
    } }, styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Acme&family=Architects+Daughter&family=Caveat:wght@700&family=Courgette&family=Montserrat:wght@500&family=Patrick+Hand&family=Permanent+Marker&display=swap\");\nmat-card[_ngcontent-%COMP%] {\n  font-family: \"Acme\", sans-serif !important;\n}\nmat-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #272fa3e7;\n  font-weight: 200;\n}\n.mainSection[_ngcontent-%COMP%] {\n  padding: 2vw;\n  justify-content: center;\n}\n.mainContainer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.copertina[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif !important;\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 10vh;\n  padding: 1vh 0;\n  width: 80%;\n  max-height: -webkit-max-content;\n  max-height: max-content;\n  justify-content: center;\n  box-shadow: 1px 0px 2px 1px rgba(16, 18, 44, 0.336), 0px 0px 11px 7px rgba(13, 10, 34, 0.315);\n  background-color: #272fa3e7;\n  border-radius: 5px;\n}\n.copertina[_ngcontent-%COMP%]   .storyTitle[_ngcontent-%COMP%] {\n  width: 98%;\n  font-family: \"Acme\", sans-serif !important;\n  line-height: initial;\n  font-size: 5.5vw;\n  letter-spacing: 1.2vw;\n  text-align: center;\n  color: white;\n  text-transform: uppercase;\n  font-weight: bold;\n  min-inline-size: -webkit-max-content;\n  min-inline-size: max-content;\n  outline-style: double;\n  margin: 0 4px;\n}\n.copertina[_ngcontent-%COMP%]   .imgCopertina[_ngcontent-%COMP%] {\n  border: solid 5px;\n  border-color: #570606;\n  border-radius: 3px;\n  width: 75%;\n  margin: 2vw 0;\n}\n.copertina[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n  margin-left: auto;\n  margin-right: auto;\n}\n.copertina[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-family: \"Acme\", sans-serif !important;\n  font-size: 4vw;\n  height: 8vw;\n  border-radius: 6px;\n}\nmat-card[_ngcontent-%COMP%] {\n  background-color: rgba(212, 200, 200, 0.685);\n  width: -webkit-fill-available;\n}\n.punteggio[_ngcontent-%COMP%] {\n  float: right;\n  width: 65%;\n}\n.punteggio[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  float: right;\n}\n.container-player[_ngcontent-%COMP%] {\n  width: 35%;\n  float: left;\n  text-align-last: left;\n}\n.container-player[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #272fa3e7;\n}\n.header-matcard[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 3em;\n}\n.backImage[_ngcontent-%COMP%] {\n  position: relative;\n  height: auto;\n  background-color: transparent !important;\n}\n.typing-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background-color: rgba(212, 200, 200, 0.685);\n  padding-left: 4vw;\n  padding-right: 4vw;\n  padding-top: 1vh;\n  padding-bottom: 1vh;\n  margin-left: 4%;\n  margin-right: 4%;\n  margin-top: 4vh;\n  border-radius: 10px;\n  letter-spacing: 0.08em;\n  text-align: center;\n  \n}\n.container-btn-avanti[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.btn-avanti[_ngcontent-%COMP%] {\n  float: right;\n  margin: 0.5em;\n  box-shadow: 1px 0px 2px 1px rgba(16, 18, 44, 0.336), 0px 0px 11px 7px rgba(13, 10, 34, 0.315);\n}\n.input-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.form-control[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  width: 95% !important;\n}\n.img-responsive[_ngcontent-%COMP%] {\n  margin: 2vh 0;\n  border-radius: 8px;\n  box-shadow: 1px 3px 23px 1px rgba(16, 18, 44, 0.336), 4px 3px 25px 21px rgba(13, 10, 34, 0.315);\n}\n@media (max-width: 600px) {\n  .img-responsive[_ngcontent-%COMP%] {\n    max-width: 90%;\n  }\n}\n@media (min-width: 600px) {\n  .img-responsive[_ngcontent-%COMP%] {\n    max-width: 80%;\n  }\n}\n.title[_ngcontent-%COMP%] {\n  width: 100vw;\n  text-align: center;\n  font-family: \"Acme\", sans-serif;\n  color: #5c5f66;\n  font-size: 8vw;\n  padding-top: 0.5em;\n  margin-bottom: 0.5em;\n  justify-content: center;\n}\n.mat-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.mat-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Acme\", sans-serif;\n  margin: 0 !important;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aXN1YWxpenphL3Zpc3VhbGl6emEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsbU5BQUE7QUFNUjtFQUNFLDBDQUFBO0FBSkY7QUFLRTtFQUNFLGdCQU5ZO0VBT1osZ0JBQUE7QUFISjtBQU1BO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0FBSEY7QUFLQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFGRjtBQUlBO0VBQ0UsZ0RBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSwrQkFBQTtFQUFBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2RkFBQTtFQUVBLDJCQUFBO0VBQ0Esa0JBQUE7QUFGRjtBQUlFO0VBQ0UsVUFBQTtFQUNBLDBDQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0VBQUEsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7QUFGSjtBQUlFO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUFGSjtBQUlFO0VBQ0UsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUZKO0FBSUk7RUFDRSwwQ0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFGTjtBQU1BO0VBQ0UsNENBckVXO0VBc0VYLDZCQUFBO0FBSEY7QUFLQTtFQUNFLFlBQUE7RUFDQSxVQUFBO0FBRkY7QUFHRTtFQUNFLFlBQUE7QUFESjtBQUlBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQURGO0FBRUU7RUFDRSxnQkFyRlk7QUFxRmhCO0FBR0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFBRjtBQUVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7QUFDRjtBQUNBO0VBSUUsNENBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFFQSxjQUFBO0FBRkY7QUFpQ0E7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUE5QkY7QUFnQ0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDZGQUFBO0FBN0JGO0FBZ0NBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBN0JGO0FBK0JBO0VBQ0Usd0NBQUE7RUFFQSxxQkFBQTtBQTdCRjtBQStCQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLCtGQUFBO0FBNUJGO0FBK0JFO0VBTkY7SUFPSSxjQUFBO0VBNUJGO0FBQ0Y7QUE2QkU7RUFURjtJQVVJLGNBQUE7RUExQkY7QUFDRjtBQTRCQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsY0FyTFc7RUFzTFgsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtBQXpCRjtBQTRCRTtFQUNFLHVCQUFBO0FBekJKO0FBMEJJO0VBQ0UsK0JBNUxLO0VBNkxMLG9CQUFBO0VBQ0EsWUFBQTtBQXhCTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlzdWFsaXp6YS92aXN1YWxpenphLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFjbWUmZmFtaWx5PUFyY2hpdGVjdHMrRGF1Z2h0ZXImZmFtaWx5PUNhdmVhdDp3Z2h0QDcwMCZmYW1pbHk9Q291cmdldHRlJmZhbWlseT1Nb250c2VycmF0OndnaHRANTAwJmZhbWlseT1QYXRyaWNrK0hhbmQmZmFtaWx5PVBlcm1hbmVudCtNYXJrZXImZGlzcGxheT1zd2FwXCIpO1xyXG5cclxuJGZvbnQtY29sb3I6ICM1YzVmNjY7XHJcbiRwcmltYXJ5LWNvbG9yOiAjMjcyZmEzZTc7XHJcbiRiYWNrZ3JvdW5kOiByZ2JhKDIxMiwgMjAwLCAyMDAsIDAuNjg1KTtcclxuJGZvbnRBY21lOiBcIkFjbWVcIiwgc2Fucy1zZXJpZjtcclxubWF0LWNhcmQge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkFjbWVcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gIHAge1xyXG4gICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICB9XHJcbn1cclxuLm1haW5TZWN0aW9uIHtcclxuICBwYWRkaW5nOiAydnc7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLm1haW5Db250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcbi5jb3BlcnRpbmEge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIG1hcmdpbi10b3A6IDEwdmg7XHJcbiAgcGFkZGluZzogMXZoIDA7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXgtaGVpZ2h0OiBtYXgtY29udGVudDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiAxcHggMHB4IDJweCAxcHggcmdiYSgxNiwgMTgsIDQ0LCAwLjMzNiksXHJcbiAgICAwcHggMHB4IDExcHggN3B4IHJnYmEoMTMsIDEwLCAzNCwgMC4zMTUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNzJmYTNlNztcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gIC5zdG9yeVRpdGxlIHtcclxuICAgIHdpZHRoOiA5OCU7XHJcbiAgICBmb250LWZhbWlseTogXCJBY21lXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuICAgIGxpbmUtaGVpZ2h0OiBpbml0aWFsO1xyXG4gICAgZm9udC1zaXplOiA1LjV2dztcclxuICAgIGxldHRlci1zcGFjaW5nOiAxLjJ2dztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1pbi1pbmxpbmUtc2l6ZTogbWF4LWNvbnRlbnQ7XHJcbiAgICBvdXRsaW5lLXN0eWxlOiBkb3VibGU7XHJcbiAgICBtYXJnaW46IDAgNHB4O1xyXG4gIH1cclxuICAuaW1nQ29wZXJ0aW5hIHtcclxuICAgIGJvcmRlcjogc29saWQgNXB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNTcwNjA2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIG1hcmdpbjogMnZ3IDA7XHJcbiAgfVxyXG4gIC5idXR0b24tY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDphdXRvO1xyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAkZm9udEFjbWUgIWltcG9ydGFudDtcclxuICAgICAgZm9udC1zaXplOiA0dnc7XHJcbiAgICAgIGhlaWdodDogOHZ3O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbm1hdC1jYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZDtcclxuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxufVxyXG4ucHVudGVnZ2lvIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgd2lkdGg6IDY1JTtcclxuICBwIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbn1cclxuLmNvbnRhaW5lci1wbGF5ZXIge1xyXG4gIHdpZHRoOiAzNSU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgdGV4dC1hbGlnbi1sYXN0OiBsZWZ0O1xyXG4gIG1hdC1pY29uIHtcclxuICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICB9XHJcbn1cclxuLmhlYWRlci1tYXRjYXJkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAzZW07XHJcbn1cclxuLmJhY2tJbWFnZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcbi50eXBpbmctdGV4dCBwIHtcclxuICAvLyBhbmltYXRpb246IHR5cGUgNXMgc3RlcHMoMjQyKTtcclxuICAvLyBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIC8vIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTIsIDIwMCwgMjAwLCAwLjY4NSk7XHJcbiAgcGFkZGluZy1sZWZ0OiA0dnc7XHJcbiAgcGFkZGluZy1yaWdodDogNHZ3O1xyXG4gIHBhZGRpbmctdG9wOiAxdmg7XHJcbiAgcGFkZGluZy1ib3R0b206IDF2aDtcclxuICBtYXJnaW4tbGVmdDogNCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0JTtcclxuICBtYXJnaW4tdG9wOiA0dmg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgLyogYW5pbWF0aW9uICovXHJcbiAgLy8gIGFuaW1hdGlvbi1uYW1lOiBzdG9yeTtcclxuICAvLyAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcclxufVxyXG5cclxuLy8gQGtleWZyYW1lcyBzdG9yeSB7XHJcbi8vICAgMCUge1xyXG4vLyAgICAgbWluLXdpZHRoOiAwdnc7XHJcbi8vICAgICBtaW4taGVpZ2h0OiAwdmg7XHJcbi8vICAgfVxyXG5cclxuLy8gICAxMDAlIHtcclxuLy8gICAgIG1pbi13aWR0aDogODB2dztcclxuLy8gICAgIG1pbi1oZWlnaHQ6IDV2aDtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIC50eXBpbmctdGV4dCBwe1xyXG4vLyAgIGFuaW1hdGlvbjogdHlwZSA1cyBzdGVwcygyNDIpLCBibGluay1jYXJldCAuNzVzIHN0ZXAtZW5kIGluZmluaXRlO1xyXG4vLyAgIG92ZXJmbG93OiBoaWRkZW47XHJcbi8vICAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgYmxhY2s7XHJcbi8vICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuLy8gICB3aWR0aDogMTAwJTtcclxuLy8gfVxyXG4vLyBAa2V5ZnJhbWVzIHR5cGV7XHJcbi8vICAgZnJvbSB7IHdpZHRoOiA1MCUgfVxyXG4vLyAgIHRvIHsgd2lkdGg6IDEwMCUgfVxyXG4vLyB9XHJcbi8vIEBrZXlmcmFtZXMgYmxpbmstY2FyZXQge1xyXG4vLyAgIGZyb20sIHRvIHsgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB9XHJcbi8vICAgNTAlIHsgYm9yZGVyLWNvbG9yOiBibGFjazsgfVxyXG4uY29udGFpbmVyLWJ0bi1hdmFudGkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG4uYnRuLWF2YW50aSB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbjogMC41ZW07XHJcbiAgYm94LXNoYWRvdzogMXB4IDBweCAycHggMXB4IHJnYmEoMTYsIDE4LCA0NCwgMC4zMzYpLFxyXG4gICAgMHB4IDBweCAxMXB4IDdweCByZ2JhKDEzLCAxMCwgMzQsIDAuMzE1KTtcclxufVxyXG4uaW5wdXQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgLy9tYXJnaW46IDAuMWVtICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xyXG59XHJcbi5pbWctcmVzcG9uc2l2ZSB7XHJcbiAgbWFyZ2luOiAydmggMDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm94LXNoYWRvdzogMXB4IDNweCAyM3B4IDFweCByZ2JhKDE2LCAxOCwgNDQsIDAuMzM2KSxcclxuICAgIDRweCAzcHggMjVweCAyMXB4IHJnYmEoMTMsIDEwLCAzNCwgMC4zMTUpO1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIG1heC13aWR0aDogOTAlO1xyXG4gIH1cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gIH1cclxufVxyXG4udGl0bGUge1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IFwiQWNtZVwiLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAkZm9udC1jb2xvcjtcclxuICBmb250LXNpemU6IDh2dztcclxuICBwYWRkaW5nLXRvcDogMC41ZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLm1hdC1saXN0IHtcclxuICBidXR0b24ge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1mYW1pbHk6ICRmb250QWNtZTtcclxuICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4iXX0= */"] });
VisualizzaComponent.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VisualizzaComponent, factory: VisualizzaComponent.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VisualizzaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-visualizza',
                templateUrl: './visualizza.component.html',
                styleUrls: ['./visualizza.component.scss']
            }]
    }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__["DeviceDetectorService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: src_app_services_dummy_api_service__WEBPACK_IMPORTED_MODULE_6__["DummyApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "ECse":
/*!********************************************************************!*\
  !*** ./src/app/components/autore/configura/configura.component.ts ***!
  \********************************************************************/
/*! exports provided: ConfiguraComponent, CancellazioneDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguraComponent", function() { return ConfiguraComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancellazioneDialog", function() { return CancellazioneDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _mime_type_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mime-type.validator */ "dYRJ");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_dummy_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/dummy-api.service */ "yYPB");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../header/header.component */ "2MiI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/radio */ "QibW");


















function ConfiguraComponent_mat_card_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfiguraComponent_mat_card_1_div_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.onSaveStory(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Salva storia ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ConfiguraComponent_mat_card_1_div_9_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const act_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", act_r6.backImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ConfiguraComponent_mat_card_1_div_9_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nessuna immagine caricata ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ConfiguraComponent_mat_card_1_div_9_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Risposta:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const act_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](act_r6.risposteDomanda);
} }
function ConfiguraComponent_mat_card_1_div_9_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Id prossimo step:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const act_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](act_r6.correctId);
} }
function ConfiguraComponent_mat_card_1_div_9_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Id Risposta:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Id errato:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Id corretto:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const act_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](act_r6.quizCorrectIdx);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](act_r6.wrongId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](act_r6.correctId);
} }
function ConfiguraComponent_mat_card_1_div_9_p_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nessuna attivit\u00E0 presente ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ConfiguraComponent_mat_card_1_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfiguraComponent_mat_card_1_div_9_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const act_r6 = ctx.$implicit; const j_r7 = ctx.index; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.editAttivita(act_r6, j_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfiguraComponent_mat_card_1_div_9_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const j_r7 = ctx.index; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.openDialog(j_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ConfiguraComponent_mat_card_1_div_9_div_16_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ConfiguraComponent_mat_card_1_div_9_div_17_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Contenuto:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ConfiguraComponent_mat_card_1_div_9_div_22_Template, 5, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ConfiguraComponent_mat_card_1_div_9_div_23_Template, 5, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ConfiguraComponent_mat_card_1_div_9_div_24_Template, 13, 3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ConfiguraComponent_mat_card_1_div_9_p_25_Template, 2, 0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const act_r6 = ctx.$implicit;
    const j_r7 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" #", j_r7, " Attivit\u00E0 n.", act_r6.activityId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Tipologia: (", act_r6.action, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", act_r6.backImg != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", act_r6.backImg == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](act_r6.activityTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", act_r6.action == "domanda");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", act_r6.action == "informazione");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", act_r6.action == "quiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.storia.steps || ctx_r3.storia.steps.length == 0);
} }
function ConfiguraComponent_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ConfiguraComponent_mat_card_1_div_2_Template, 3, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ConfiguraComponent_mat_card_1_div_9_Template, 26, 10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.flagSalvataggio == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.storia.nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.storia.urlBackground, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", "  immagine sfondo di  " + ctx_r0.storia.nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.storia.steps);
} }
function ConfiguraComponent_mat_card_2_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Per favore inserisci tipologia");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ConfiguraComponent_mat_card_2_mat_form_field_21_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "textarea", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfiguraComponent_mat_card_2_mat_form_field_21_Template_textarea_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r34.tempContenuto = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, ctx_r22.getTitleTranslation(ctx_r22.tempTipologiaAttivita)), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r22.tempContenuto)("placeholder", "Inserisci " + ctx_r22.getTitleTranslation(ctx_r22.tempTipologiaAttivita));
} }
function ConfiguraComponent_mat_card_2_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r23.imagePreview, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ConfiguraComponent_mat_card_2_mat_form_field_23_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Inserisci un numero");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ConfiguraComponent_mat_card_2_mat_form_field_23_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Numero Risposte");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ConfiguraComponent_mat_card_2_mat_form_field_23_Template_mat_select_selectionChange_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r37.aggiornaRisposteQuiz(); })("valueChange", function ConfiguraComponent_mat_card_2_mat_form_field_23_Template_mat_select_valueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r39.numeroRisposte = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ConfiguraComponent_mat_card_2_mat_form_field_23_mat_error_10_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r24.numeroRisposte);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.form.get("numeroRisposte").invalid);
} }
const _c0 = function () { return { standalone: true }; };
function ConfiguraComponent_mat_card_2_section_24_div_12_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfiguraComponent_mat_card_2_section_24_div_12_div_4_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const i_r43 = ctx.index; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return (ctx_r44.tempRisposteDomanda[i_r43] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r43 = ctx.index;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r41.tempRisposteDomanda[i_r43])("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
} }
function ConfiguraComponent_mat_card_2_section_24_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfiguraComponent_mat_card_2_section_24_div_12_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r46.aggiornaTempRisposta(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Aggiungi elemento ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ConfiguraComponent_mat_card_2_section_24_div_12_div_4_Template, 3, 3, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r40.tempRisposteDomanda, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r40.tempRisposteDomanda)("ngForTrackBy", ctx_r40.trackByFn);
} }
function ConfiguraComponent_mat_card_2_section_24_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Risposta");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfiguraComponent_mat_card_2_section_24_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r48.tempTipoDomanda = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " right ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfiguraComponent_mat_card_2_section_24_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r50.tempTipoDomanda = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " array ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ConfiguraComponent_mat_card_2_section_24_div_12_Template, 5, 3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r25.tempTipoDomanda)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r25.tempTipoDomanda)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r25.tempTipoDomanda == "array");
} }
function ConfiguraComponent_mat_card_2_div_25_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfiguraComponent_mat_card_2_div_25_div_5_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55); const i_r53 = ctx.index; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r54.tempOrder[i_r53].desc = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfiguraComponent_mat_card_2_div_25_div_5_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55); const i_r53 = ctx.index; const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r56.tempOrder[i_r53].posizione = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r53 = ctx.index;
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r51.tempOrder[i_r53].desc)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r51.tempOrder[i_r53].posizione)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
} }
function ConfiguraComponent_mat_card_2_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Inserisci gli elementi da ordinare");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfiguraComponent_mat_card_2_div_25_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r57.aggiornaOrder(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Aggiungi elemento ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ConfiguraComponent_mat_card_2_div_25_div_5_Template, 4, 6, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r26.tempOrder)("ngForTrackBy", ctx_r26.trackByFn);
} }
function ConfiguraComponent_mat_card_2_div_26_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-radio-button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfiguraComponent_mat_card_2_div_26_div_5_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63); const i_r61 = ctx.index; const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return (ctx_r62.risposteQuiz[i_r61] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r61 = ctx.index;
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r59.risposteQuiz[i_r61])("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
} }
function ConfiguraComponent_mat_card_2_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-radio-group", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfiguraComponent_mat_card_2_div_26_Template_mat_radio_group_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r64.tempQuizCorrectIdx = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Inserisci le risposte e indica quella corretta");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ConfiguraComponent_mat_card_2_div_26_div_5_Template, 4, 4, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r27.tempQuizCorrectIdx)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r27.risposteQuiz)("ngForTrackBy", ctx_r27.trackByFn);
} }
function ConfiguraComponent_mat_card_2_section_27_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Image Url!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfiguraComponent_mat_card_2_section_27_div_13_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r68.tempImgPuzzle = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r66.tempImgPuzzle)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
} }
function ConfiguraComponent_mat_card_2_section_27_div_14_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r71.tempImgPuzzle, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ConfiguraComponent_mat_card_2_section_27_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Carica la tua immagine:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfiguraComponent_mat_card_2_section_27_div_14_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return _r70.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Pick Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 80, 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ConfiguraComponent_mat_card_2_section_27_div_14_Template_input_change_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r74.onImagePicked($event, "puzzle"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ConfiguraComponent_mat_card_2_section_27_div_14_div_10_Template, 2, 1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r67.tempImgPuzzle !== "" && ctx_r67.tempImgPuzzle);
} }
function ConfiguraComponent_mat_card_2_section_27_Template(rf, ctx) { if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Immagine per il puzzle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfiguraComponent_mat_card_2_section_27_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r75.tempTipoUpload = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Risorsa Web");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfiguraComponent_mat_card_2_section_27_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r77.tempTipoUpload = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "File Locale");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ConfiguraComponent_mat_card_2_section_27_div_13_Template, 7, 3, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ConfiguraComponent_mat_card_2_section_27_div_14_Template, 11, 1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Difficulty Level");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfiguraComponent_mat_card_2_section_27_Template_input_ngModelChange_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r78.tempDifficulty = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Low ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfiguraComponent_mat_card_2_section_27_Template_input_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r79.tempDifficulty = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Medium ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfiguraComponent_mat_card_2_section_27_Template_input_ngModelChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r80.tempDifficulty = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " High ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r28.tempTipoUpload)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r28.tempTipoUpload)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r28.tempTipoUpload == "web");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r28.tempTipoUpload == "locale");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r28.tempDifficulty)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r28.tempDifficulty)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r28.tempDifficulty)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c0));
} }
function ConfiguraComponent_mat_card_2_section_28_mat_form_field_1_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const act_r86 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", act_r86.activityId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", act_r86.activityId, " : ", act_r86.activityTitle, " ");
} }
function ConfiguraComponent_mat_card_2_section_28_mat_form_field_1_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Per favore inserisci id coretto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ConfiguraComponent_mat_card_2_section_28_mat_form_field_1_Template(rf, ctx) { if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Corretto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfiguraComponent_mat_card_2_section_28_mat_form_field_1_Template_mat_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r87.tempCorrect = $event; })("valueChange", function ConfiguraComponent_mat_card_2_section_28_mat_form_field_1_Template_mat_select_valueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r89.tempCorrect = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ConfiguraComponent_mat_card_2_section_28_mat_form_field_1_mat_option_4_Template, 2, 3, "mat-option", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ConfiguraComponent_mat_card_2_section_28_mat_form_field_1_mat_error_5_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r81.tempCorrect)("value", ctx_r81.tempCorrect);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r81.storia.steps);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r81.form.get("tempCorrect").invalid);
} }
function ConfiguraComponent_mat_card_2_section_28_mat_form_field_2_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const act_r92 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", act_r92.activityId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", act_r92.activityId, " : ", act_r92.activityTitle, " ");
} }
function ConfiguraComponent_mat_card_2_section_28_mat_form_field_2_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Per favore inserisci id errato");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ConfiguraComponent_mat_card_2_section_28_mat_form_field_2_Template(rf, ctx) { if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sbagliato");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfiguraComponent_mat_card_2_section_28_mat_form_field_2_Template_mat_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r94); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r93.tempWrong = $event; })("valueChange", function ConfiguraComponent_mat_card_2_section_28_mat_form_field_2_Template_mat_select_valueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r94); const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r95.tempWrong = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ConfiguraComponent_mat_card_2_section_28_mat_form_field_2_mat_option_4_Template, 2, 3, "mat-option", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ConfiguraComponent_mat_card_2_section_28_mat_form_field_2_mat_error_5_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r82.tempWrong)("value", ctx_r82.tempWrong);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r82.storia.steps);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r82.form.get("tempWrong").invalid);
} }
function ConfiguraComponent_mat_card_2_section_28_mat_form_field_3_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const act_r98 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", act_r98.activityId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", act_r98.activityId, " : ", act_r98.activityTitle, " ");
} }
function ConfiguraComponent_mat_card_2_section_28_mat_form_field_3_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Per favore inserisci id del prossimo step");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ConfiguraComponent_mat_card_2_section_28_mat_form_field_3_Template(rf, ctx) { if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Prossimo step");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfiguraComponent_mat_card_2_section_28_mat_form_field_3_Template_mat_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r100); const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r99.tempCorrect = $event; })("valueChange", function ConfiguraComponent_mat_card_2_section_28_mat_form_field_3_Template_mat_select_valueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r100); const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r101.tempCorrect = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ConfiguraComponent_mat_card_2_section_28_mat_form_field_3_mat_option_4_Template, 2, 3, "mat-option", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ConfiguraComponent_mat_card_2_section_28_mat_form_field_3_mat_error_5_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r83.tempCorrect)("value", ctx_r83.tempCorrect);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r83.storia.steps);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r83.form.get("tempCorrect").invalid);
} }
function ConfiguraComponent_mat_card_2_section_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConfiguraComponent_mat_card_2_section_28_mat_form_field_1_Template, 6, 4, "mat-form-field", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ConfiguraComponent_mat_card_2_section_28_mat_form_field_2_Template, 6, 4, "mat-form-field", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ConfiguraComponent_mat_card_2_section_28_mat_form_field_3_Template, 6, 4, "mat-form-field", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r29.tempTipologiaAttivita == "domanda" || ctx_r29.tempTipologiaAttivita == "quiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r29.tempTipologiaAttivita == "domanda" || ctx_r29.tempTipologiaAttivita == "quiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r29.tempTipologiaAttivita == "informazione" || ctx_r29.tempTipologiaAttivita == "puzzle" || ctx_r29.tempTipologiaAttivita == "dnd");
} }
function ConfiguraComponent_mat_card_2_div_29_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r103.imagePreview, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r103.form.value.title);
} }
function ConfiguraComponent_mat_card_2_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Nome immagine");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Alt immagine");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfiguraComponent_mat_card_2_div_29_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r105); const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13); return _r102.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Pick Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 80, 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ConfiguraComponent_mat_card_2_div_29_Template_input_change_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r105); const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r106.onImagePicked($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfiguraComponent_mat_card_2_div_29_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r105); const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r107.imagePreview = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ConfiguraComponent_mat_card_2_div_29_div_16_Template, 2, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r30.imagePreview)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r30.imagePreview !== "" && ctx_r30.imagePreview && ctx_r30.form.get("image").valid);
} }
function ConfiguraComponent_mat_card_2_button_31_Template(rf, ctx) { if (rf & 1) {
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfiguraComponent_mat_card_2_button_31_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r109); const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r108.aggiungiAttivita(ctx_r108.tempTipologiaAttivita); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Aggiungi Attivit\u00E0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ConfiguraComponent_mat_card_2_button_33_Template(rf, ctx) { if (rf & 1) {
    const _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfiguraComponent_mat_card_2_button_33_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r110.onSaveActivity(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Salva modifiche ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ConfiguraComponent_mat_card_2_button_34_Template(rf, ctx) { if (rf & 1) {
    const _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfiguraComponent_mat_card_2_button_34_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r113); const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r112.tempActivityId = 0 - 1; return ctx_r112.form.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ESCI ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ConfiguraComponent_mat_card_2_Template(rf, ctx) { if (rf & 1) {
    const _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Aggiungi attivit\u00E0 alla tua storia");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Tipologia Attivit\u00E0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-select", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function ConfiguraComponent_mat_card_2_Template_mat_select_valueChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r115); const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r114.tempTipologiaAttivita = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Testo Informativo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Domanda");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Quiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Puzzle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Drag&Drop");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Fine");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ConfiguraComponent_mat_card_2_mat_error_20_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ConfiguraComponent_mat_card_2_mat_form_field_21_Template, 5, 5, "mat-form-field", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ConfiguraComponent_mat_card_2_div_22_Template, 2, 1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ConfiguraComponent_mat_card_2_mat_form_field_23_Template, 11, 2, "mat-form-field", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ConfiguraComponent_mat_card_2_section_24_Template, 13, 7, "section", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ConfiguraComponent_mat_card_2_div_25_Template, 6, 2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ConfiguraComponent_mat_card_2_div_26_Template, 6, 5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ConfiguraComponent_mat_card_2_section_27_Template, 31, 17, "section", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ConfiguraComponent_mat_card_2_section_28_Template, 4, 3, "section", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ConfiguraComponent_mat_card_2_div_29_Template, 17, 4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ConfiguraComponent_mat_card_2_button_31_Template, 2, 0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ConfiguraComponent_mat_card_2_button_33_Template, 2, 0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ConfiguraComponent_mat_card_2_button_34_Template, 2, 0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.tempTipologiaAttivita);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.get("tempTipologiaAttivita").invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.tempTipologiaAttivita != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.tempTipologiaAttivita != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.tempTipologiaAttivita == "quiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.tempTipologiaAttivita == "domanda");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.tempTipologiaAttivita == "dnd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.tempTipologiaAttivita == "quiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.tempTipologiaAttivita == "puzzle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.tempTipologiaAttivita != "fine");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.tempTipologiaAttivita != "puzzle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.tempActivityId == 0 - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.tempActivityId != 0 - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.tempActivityId != 0 - 1);
} }
class ConfiguraComponent {
    constructor(activeRoute, api, _formBuilder, router, dialog) {
        this.activeRoute = activeRoute;
        this.api = api;
        this._formBuilder = _formBuilder;
        this.router = router;
        this.dialog = dialog;
        this.tempActivityId = -1;
        this.tempContenuto = "";
        this.tempRisposteDomanda = [];
        this.tempDifficulty = "";
        this.tempImgPuzzle = "";
        this.tempTipoUpload = "";
        this.tempQuizCorrectIdx = -1;
        this.tempCorrect = 0;
        this.tempWrong = 0;
        this.tempOrder = [];
        this.tempClickToObject = '';
        this.showConfiguraDomanda = false;
        this.showConfiguraClickToObject = false;
        this.tempTipologiaAttivita = "";
        this.numeroDnd = 0;
        this.rispostaGiusta = "";
        this.flagSalvataggio = false;
    }
    //Gestisce il testo mostrato nel placeholder
    getTitleTranslation(type) {
        if (type == "domanda") {
            return "domanda";
        }
        if (type == "informazione" || type == "dnd" || type == "fine") {
            return "contenuto";
        }
        if (type == "puzzle") {
            return "messaggio introduttivo";
        }
        return "titolo";
    }
    // metodo che aggiunge un attività alla storia nel database tramite una push
    // dopo aver verificato la tipologia di attività tramite un if
    aggiungiAttivita(type, id = -1, posArray) {
        this.flagSalvataggio = true;
        let proxId;
        if (this.storia.steps.length == 0) {
            proxId = 0;
        }
        else {
            proxId = (this.storia.steps[this.storia.steps.length - 1].activityId + 1);
        }
        console.log("Prox id: " + proxId);
        console.log("sono stato chiamato con tipo =" + type);
        if (type == "domanda") {
            let myActivity = {
                action: 'domanda',
                activityId: id == -1 ? proxId : id,
                activityTitle: this.tempContenuto,
                risposteDomanda: this.tempRisposteDomanda,
                tipoDomanda: this.tempTipoDomanda,
                backImg: this.imagePreview,
                correctId: this.tempCorrect,
                wrongId: this.tempWrong
            };
            if (id == -1) {
                this.storia.steps.push(myActivity);
            }
            else {
                this.storia.steps[posArray] = myActivity;
            }
        }
        console.log("storia aggiornata: " + this.storia);
        if (type == "quiz") {
            let myActivity = {
                action: 'quiz',
                activityId: id == -1 ? proxId : id,
                activityTitle: this.tempContenuto,
                backImg: this.imagePreview,
                correctId: this.tempCorrect,
                wrongId: this.tempWrong,
                answers: this.risposteQuiz,
                quizCorrectIdx: this.tempQuizCorrectIdx.valueOf()
            };
            if (id == -1) {
                this.storia.steps.push(myActivity);
            }
            else {
                this.storia.steps[posArray] = myActivity;
            }
        }
        if (type == "informazione") {
            let myActivity = {
                action: 'informazione',
                activityId: id == -1 ? proxId : id,
                activityTitle: this.tempContenuto,
                backImg: this.imagePreview,
                correctId: this.tempCorrect,
                wrongId: this.tempWrong
            };
            if (id == -1) {
                this.storia.steps.push(myActivity);
            }
            else {
                this.storia.steps[posArray] = myActivity;
            }
        }
        if (type == "fine") {
            let myActivity = {
                action: 'fine',
                activityId: id == -1 ? proxId : id,
                activityTitle: this.tempContenuto,
                backImg: this.imagePreview,
                correctId: this.tempCorrect,
                wrongId: this.tempWrong
            };
            if (id == -1) {
                this.storia.steps.push(myActivity);
            }
            else {
                this.storia.steps[posArray] = myActivity;
            }
        }
        if (type == "puzzle") {
            let myActivity = {
                action: 'puzzle',
                activityId: id == -1 ? proxId : id,
                activityTitle: this.tempContenuto,
                puzzleImg: this.tempImgPuzzle,
                difficulty: this.tempDifficulty,
                correctId: this.tempCorrect,
                wrongId: this.tempWrong
            };
            if (id == -1) {
                this.storia.steps.push(myActivity);
            }
            else {
                this.storia.steps[posArray] = myActivity;
            }
        }
        if (type == "dnd") {
            let myActivity = {
                action: 'dnd',
                activityId: id == -1 ? proxId : id,
                activityTitle: this.tempContenuto,
                backImg: this.imagePreview,
                order: this.tempOrder,
                correctId: this.tempCorrect,
                wrongId: this.tempWrong
            };
            if (id == -1) {
                this.storia.steps.push(myActivity);
            }
            else {
                this.storia.steps[posArray] = myActivity;
            }
        }
        this.resettaForm();
    }
    //metodo utilizzato per generare le risposte possibili di un quiz
    aggiornaRisposteQuiz() {
        this.risposteQuiz = [];
        for (let i = 0; i < this.numeroRisposte; i++) {
            this.risposteQuiz[i] = "";
        }
    }
    //per aggiornare l'ordine del dnd
    aggiornaOrder() {
        this.tempOrder.push({
            posizione: this.numeroDnd,
            desc: ""
        });
        this.numeroDnd++;
    }
    //per aggiorare array risposte possibili in domanda
    aggiornaTempRisposta() {
        this.tempRisposteDomanda.push("");
    }
    //metodo per modificare un attività
    editAttivita(attivita, posArray) {
        this.resettaForm();
        this.tempPosArray = posArray;
        console.log('edito:' + attivita.activityId + " " + attivita.activityTitle);
        //generale
        this.tempContenuto = attivita.activityTitle;
        this.tempTipologiaAttivita = attivita.action;
        this.tempCorrect = attivita.correctId;
        this.tempWrong = attivita.wrongId;
        this.tempActivityId = attivita.activityId;
        this.imagePreview = attivita.backImg;
        console.log("corretto = " + this.tempCorrect + " sbagliato = " + this.tempWrong);
        //specifica
        if (attivita.action == "domanda") {
            this.tempTipoDomanda = attivita.tipoDomanda;
            this.tempRisposteDomanda = attivita.risposteDomanda;
        }
        if (attivita.action == "quiz") {
            this.risposteQuiz = attivita.answers;
            this.tempQuizCorrectIdx = attivita.quizCorrectIdx;
        }
        if (attivita.action == "puzzle") {
            if (attivita.puzzleImg.charAt(0) == 'd') {
                this.tempTipoUpload = "locale";
            }
            else if (attivita.puzzleImg.charAt(0) == 'w' || attivita.puzzleImg.charAt(0) == 'h') {
                this.tempTipoUpload = "web";
            }
            this.tempDifficulty = attivita.difficulty;
            this.tempImgPuzzle = attivita.puzzleImg;
        }
        if (attivita.action == "dnd") {
            this.tempOrder = attivita.order;
        }
    }
    // eliminaAttivita(activityId: number): void {
    //   this.storia.steps.splice(activityId, 1);
    //   this.flagSalvataggio = true;
    // }
    //metodo per salvare attivià che ha subito una modifica
    onSaveActivity() {
        this.aggiungiAttivita(this.tempTipologiaAttivita, this.tempActivityId, this.tempPosArray);
        this.resettaForm();
        this.tempActivityId = -1;
    }
    //metodo per caricare la storia tramite update
    onSaveStory() {
        this.api.updateStoria(this.storia).subscribe(response => {
            this.router.navigate(["/configura/" + this.storia.id]);
        });
        this.flagSalvataggio = false;
        this.resettaForm();
    }
    //metodo per svuotare il form delle attività
    resettaForm() {
        this.tempContenuto = '';
        this.tempClickToObject = '';
        this.tempActivityId = -1;
        this.tempContenuto = "";
        this.tempRisposteDomanda = [];
        this.tempTipoDomanda = "";
        this.tempDifficulty = "";
        this.tempImgPuzzle = "";
        this.tempTipoUpload = "";
        this.tempQuizCorrectIdx = -1;
        this.tempCorrect = 0;
        this.tempWrong = 0;
        this.risposteQuiz = [];
        this.tempOrder = [];
        this.tempTipologiaAttivita = "";
        this.numeroRisposte = 0;
        this.imagePreview = "";
        this.rispostaGiusta = "";
        this.tempPosArray = -1;
        this.form.reset();
    }
    //Trasforma il file immagine in base64, dopo di che lo passiamo a un servizio che lo porta in un server online, e ci restiruisce il link
    onImagePicked(event, type) {
        const file = event.target.files[0];
        this.form.patchValue({ image: file });
        this.form.get('image').updateValueAndValidity();
        const reader = new FileReader();
        reader.onload = () => {
            if (type && type == 'puzzle') {
                this.tempImgPuzzle = reader.result;
                let base64 = this.tempImgPuzzle.split('base64');
                this.api.uploadImage(base64[1]).subscribe((res) => {
                    this.tempImgPuzzle = res.data.link;
                });
            }
            else {
                this.imagePreview = reader.result;
                let base64 = this.imagePreview.split('base64');
                this.api.uploadImage(base64[1]).subscribe((res) => {
                    this.imagePreview = res.data.link;
                });
            }
        };
        reader.readAsDataURL(file);
    }
    //metodo per tenere traccia dell'array del dnd e delle risposte
    trackByFn(index, item) {
        return index;
    }
    ngOnInit() {
        this.id = this.activeRoute.snapshot.params.id;
        this.api.getStoria(this.id).subscribe((singleStory) => {
            this.storia = this.api.reMap(singleStory);
        });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'tempTipologiaAttivita': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            }),
            'tempContenuto': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            }),
            'tempRisposta': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            }),
            'numeroRisposte': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            }),
            'image': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                asyncValidators: [_mime_type_validator__WEBPACK_IMPORTED_MODULE_2__["mimeType"]]
            }),
            'rispostaGiusta': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            }),
            'tempCorrect': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            }),
            'tempWrong': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            })
        });
    }
    // metodo per aprire alert in fase di cancellazione di attività
    openDialog(j) {
        const dialogRef = this.dialog.open(CancellazioneDialog, {
            data: {
                id: j,
                steps: this.storia.steps,
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            this.flagSalvataggio = true;
            console.log(`Dialog result: ${result}`);
        });
    }
}
ConfiguraComponent.ɵfac = function ConfiguraComponent_Factory(t) { return new (t || ConfiguraComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_dummy_api_service__WEBPACK_IMPORTED_MODULE_5__["DummyApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"])); };
ConfiguraComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfiguraComponent, selectors: [["app-configura"]], decls: 3, vars: 3, consts: [[3, "my-title"], ["class", "riepilogo-attivita", 4, "ngIf"], ["class", "crea-attivita", 4, "ngIf"], [1, "riepilogo-attivita"], ["class", "salva-button", 4, "ngIf"], [2, "font-weight", "bold"], [1, "img-responsive", 2, "border", "3px solid", 3, "src", "alt"], [4, "ngFor", "ngForOf"], [1, "salva-button"], ["color", "primary", "mat-raised-button", "", 3, "click"], [1, "header"], [1, "header-title"], [1, "button-container"], [1, "button-edit-container"], ["mat-mini-fab", "", "color", "primary", 3, "click"], [1, "material-icons"], ["mat-mini-fab", "", "color", "warn", 3, "click"], ["class", "image-preview", 4, "ngIf"], ["class", "noimage-container", 4, "ngIf"], [4, "ngIf"], ["class", "risposte-quiz", 4, "ngIf"], [1, "image-preview"], [2, "border", "#14144daf 3px solid", 3, "src"], [1, "noimage-container"], [1, "risposte-quiz"], [1, "crea-attivita"], [1, "example-form", 3, "formGroup"], [1, "example-full-width"], ["matNativeControl", "", "required", "", 3, "value", "valueChange"], ["value", "informazione"], ["value", "domanda"], ["value", "quiz"], ["value", "puzzle"], ["value", "dnd"], ["value", "fine"], ["class", "example-full-width", 4, "ngIf"], ["class", "puzzle-preview", 4, "ngIf"], ["mat-raised-button", "", "class", "aggAttivita", "color", "primary", 3, "click", 4, "ngIf"], [1, "container-button"], ["mat-raised-button", "", "color", "primary", "class", "aggAttivita", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "warn", 3, "click", 4, "ngIf"], ["matInput", "", "type", "text", "formControlName", "tempContenuto", 3, "ngModel", "placeholder", "ngModelChange"], [1, "puzzle-preview"], [3, "src"], ["matNativeControl", "", 3, "value", "selectionChange", "valueChange"], ["value", "2"], ["value", "3"], ["value", "4"], [1, "difficulty-levels"], [1, "input-group"], ["type", "radio", "name", "tipoDomanda", "id", "right", "value", "right", "checked", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "right"], ["type", "radio", "name", "tipoDomanda", "id", "array", "value", "array", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "array"], ["mat-stroked-button", "", "color", "link", 3, "click"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "dnd-table"], [3, "ngModel", "ngModelOptions", "ngModelChange"], ["ngmodelaria-label", "Select an option", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "value"], [2, "background-color", "transparent", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "img-puzzle"], ["type", "radio", "name", "upload", "value", "web", "id", "web", "checked", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "web"], ["type", "radio", "name", "upload", "value", "locale", "id", "locale", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "locale"], ["class", "image-url", 4, "ngIf"], [1, "difficolta"], ["type", "radio", "name", "difficulty", "id", "low", "value", "2", "checked", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "low"], ["type", "radio", "name", "difficulty", "id", "medium", "value", "3", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "medium"], ["type", "radio", "name", "difficulty", "id", "high", "value", "4", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "high"], [1, "image-url"], [1, "input-group-btn"], [1, "btn", "btn-default"], ["type", "url", "placeholder", "Image Url...", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "button-pick-puzzle"], ["mat-stroked-button", "", "type", "button", "color", "link", 3, "click"], ["type", "file", 3, "change"], ["puzzlePicker", ""], ["alt", "puzzleImg", 3, "src"], ["formControlName", "tempCorrect", "panelClass", "correct", 3, "ngModel", "value", "ngModelChange", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "tempWrong", "panelClass", "wrong", 3, "ngModel", "value", "ngModelChange", "valueChange"], ["matInput", "", "placeholder", "Inserisci qui il nome dell'immagine"], ["matInput", "", "placeholder", "Inserisci qui il testo alternativo per il'immagine"], ["mat-stroked-button", "", "type", "button", "color", "link", 1, "button-pick", 3, "click"], ["filePicker", ""], [2, "width", "100%"], ["type", "url", "placeholder", "Image Url...", 1, "form-control", 2, "font-size", "0.8em", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "img-responsive", 3, "src", "alt"], ["mat-raised-button", "", "color", "primary", 1, "aggAttivita", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"]], template: function ConfiguraComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConfiguraComponent_mat_card_1_Template, 10, 5, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ConfiguraComponent_mat_card_2_Template, 35, 15, "mat-card", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("my-title", "Configura");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.storia);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.storia);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["TitleCasePipe"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Acme&family=Montserrat&family=Permanent+Marker&display=swap\");\nmat-card {\n  font-family: \"Montserrat\", sans-serif !important;\n  padding-bottom: 0.3em !important;\n}\nmat-card-header {\n  justify-content: center;\n  align-content: flex-start;\n  align-items: flex-start;\n}\nmat-card-header .salva-button {\n  position: absolute;\n  top: 0.2em;\n  right: 0.2em;\n}\nmat-card-title {\n  padding-left: 0.8em;\n  margin-top: 0.2em;\n}\nmat-grid-tile-header {\n  justify-content: space-between;\n  align-content: flex-start;\n  align-items: flex-start;\n  padding: 0.1em !important;\n  font-size: 0.9em !important;\n}\n.riepilogo-attivita {\n  background-color: rgba(51, 50, 148, 0.301);\n}\n.header {\n  display: inline-block;\n  width: 100%;\n  background-color: #14144daf;\n  color: white;\n}\n.header-title {\n  width: 70%;\n  display: inline-flex;\n  justify-content: space-evenly;\n  margin-top: 2vw;\n}\n.button-container {\n  display: inline;\n  width: 20%;\n  float: right;\n  justify-content: flex-end;\n  margin: 0.5vw;\n}\n.button-edit-container {\n  display: inline-flex;\n  margin: 0.1em;\n  transform: scale(0.8);\n}\n.risposte-quiz {\n  display: flex;\n  width: 100%;\n  justify-content: space-evenly;\n}\n.crea-attivita {\n  background-color: rgba(212, 200, 200, 0.685);\n}\nh1 {\n  text-transform: capitalize;\n  font-weight: bold;\n}\nh3 {\n  font-weight: bold;\n}\n.correct.mat-select-panel {\n  background: rgba(6, 187, 6, 0.5);\n}\n.wrong.mat-select-panel {\n  background: rgba(204, 4, 4, 0.5);\n}\nform {\n  margin: auto;\n}\n.example-form {\n  justify-content: center;\n  width: 70%;\n}\n.example-full-width {\n  width: 100%;\n  margin: 0.5rem;\n}\ninput[type=file] {\n  visibility: hidden;\n}\n.button-pick {\n  float: left;\n  margin: 0.3em !important;\n}\n.button-pick-puzzle {\n  max-height: -webkit-fit-content;\n  max-height: -moz-fit-content;\n  max-height: fit-content;\n}\n.img-puzzle {\n  width: 100%;\n}\n.img-url {\n  width: 100%;\n}\n.image-preview {\n  height: 15vh;\n  margin: 1rem 0;\n}\n.noimage-container {\n  border: #14144daf 3px solid;\n  margin: 2px 30%;\n  height: 10%;\n}\n.image-preview img {\n  height: 100%;\n}\n.difficolta {\n  width: 100%;\n}\n.difficulty-levels {\n  display: flex;\n  justify-content: space-around;\n}\n.input-group {\n  display: flex;\n  margin: 2vw;\n  float: left;\n  flex-flow: row wrap;\n  justify-content: space-around;\n  list-style: none;\n  cursor: pointer;\n}\n.input-group label {\n  padding: 1.5em 2em;\n  margin: 0 !important;\n}\n.input-group input[type=radio] {\n  position: absolute;\n  clip: rect(1px, 1px, 1px, 1px);\n}\n.input-group input[type=radio] + label {\n  display: block;\n  cursor: pointer;\n  background-color: #ffffff93;\n  min-height: 1.5em;\n  min-width: 5em;\n  border-radius: 5px;\n  font-size: 0.8em;\n  color: #5c5f66;\n}\n.input-group input[type=radio]:checked + label {\n  background-color: #14144daf;\n  min-height: 1.5em;\n  min-width: 5em;\n  border-radius: 5px;\n  color: white;\n}\n.input-group input[type=radio]:checked + label .mat-icon {\n  color: white;\n}\n.input-group input[type=radio]:checked + label p {\n  color: white;\n}\n.form-control {\n  border-radius: 4px;\n  width: 100%;\n}\n.aggAttivita {\n  margin: 0.8em !important;\n}\n.dnd-table {\n  width: 100%;\n  background-color: rgba(212, 200, 200, 0.685);\n  padding: 1vw;\n  margin: 0.5vw;\n  border-radius: 4px;\n}\n.dnd-table input {\n  background-color: white;\n}\n.container-button {\n  width: 100%;\n  justify-content: space-around;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdXRvcmUvY29uZmlndXJhL2NvbmZpZ3VyYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxtSEFBQTtBQU1SO0VBQ0UsZ0RBQUE7RUFDQSxnQ0FBQTtBQUpGO0FBTUE7RUFDRSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7QUFIRjtBQUlFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQUZKO0FBS0E7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FBRkY7QUFJQTtFQUNFLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7QUFERjtBQUdBO0VBQ0UsMENBQUE7QUFBRjtBQUVBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBaENjO0VBaUNkLFlBQUE7QUFDRjtBQUNBO0VBQ0UsVUFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FBRUY7QUFBQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQUdGO0FBREE7RUFDRSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtBQUlGO0FBREE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0FBSUY7QUFGQTtFQUNFLDRDQTdEVztBQWtFYjtBQUhBO0VBQ0UsMEJBQUE7RUFDQSxpQkFBQTtBQU1GO0FBSkE7RUFDRSxpQkFBQTtBQU9GO0FBSkE7RUFDRSxnQ0FBQTtBQU9GO0FBSkE7RUFDRSxnQ0FBQTtBQU9GO0FBTEE7RUFDRSxZQUFBO0FBUUY7QUFOQTtFQUNFLHVCQUFBO0VBQ0EsVUFBQTtBQVNGO0FBUEE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQVVGO0FBUEE7RUFDRSxrQkFBQTtBQVVGO0FBUkE7RUFDRSxXQUFBO0VBQ0Esd0JBQUE7QUFXRjtBQVRBO0VBQ0UsK0JBQUE7RUFBQSw0QkFBQTtFQUFBLHVCQUFBO0FBWUY7QUFWQTtFQUNFLFdBQUE7QUFhRjtBQVhBO0VBQ0UsV0FBQTtBQWNGO0FBWkE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQWVGO0FBYkE7RUFDRSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBZ0JGO0FBYkE7RUFDRSxZQUFBO0FBZ0JGO0FBZEE7RUFDRSxXQUFBO0FBaUJGO0FBZkE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7QUFrQkY7QUFmQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFrQkY7QUFoQkU7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0FBa0JKO0FBZkU7RUFDRSxrQkFBQTtFQUNBLDhCQUFBO0FBaUJKO0FBZEU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBNUpTO0FBNEtiO0FBZEU7RUFDRSwyQkE1Slk7RUE2SlosaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBZ0JKO0FBZkk7RUFDRSxZQUFBO0FBaUJOO0FBZkk7RUFDRSxZQUFBO0FBaUJOO0FBYkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFnQkY7QUFkQTtFQUNFLHdCQUFBO0FBaUJGO0FBZkE7RUFDRSxXQUFBO0VBQ0EsNENBbkxXO0VBb0xYLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFrQkY7QUFqQkU7RUFDRSx1QkFBQTtBQW1CSjtBQWZBO0VBQ0UsV0FBQTtFQUNBLDZCQUFBO0FBa0JGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hdXRvcmUvY29uZmlndXJhL2NvbmZpZ3VyYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BY21lJmZhbWlseT1Nb250c2VycmF0JmZhbWlseT1QZXJtYW5lbnQrTWFya2VyJmRpc3BsYXk9c3dhcFwiKTtcclxuXHJcbiRmb250LWNvbG9yOiAjNWM1ZjY2O1xyXG4kcHJpbWFyeS1jb2xvcjogIzNiM2E5OTtcclxuJGJhY2tncm91bmQ6IHJnYmEoMjEyLCAyMDAsIDIwMCwgMC42ODUpO1xyXG4kYmx1QmFja2dyb3VuZDogIzE0MTQ0ZGFmO1xyXG5tYXQtY2FyZCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1ib3R0b206IC4zZW0gIWltcG9ydGFudDtcclxufVxyXG5tYXQtY2FyZC1oZWFkZXIge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgLnNhbHZhLWJ1dHRvbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDouMmVtO1xyXG4gICAgcmlnaHQ6IC4yZW07XHJcbiAgfVxyXG59XHJcbm1hdC1jYXJkLXRpdGxlIHtcclxuICBwYWRkaW5nLWxlZnQ6IDAuOGVtO1xyXG4gIG1hcmdpbi10b3A6IC4yZW07XHJcbn1cclxubWF0LWdyaWQtdGlsZS1oZWFkZXIge1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIHBhZGRpbmc6IDAuMWVtICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xyXG59XHJcbi5yaWVwaWxvZ28tYXR0aXZpdGEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTEsIDUwLCAxNDgsIDAuMzAxKTtcclxufVxyXG4uaGVhZGVyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJsdUJhY2tncm91bmQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5oZWFkZXItdGl0bGUge1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgbWFyZ2luLXRvcDogMnZ3O1xyXG59XHJcbi5idXR0b24tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgd2lkdGg6IDIwJTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBtYXJnaW46IDAuNXZ3O1xyXG59XHJcbi5idXR0b24tZWRpdC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIG1hcmdpbjogMC4xZW07XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG59XHJcblxyXG4ucmlzcG9zdGUtcXVpeiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxufVxyXG4uY3JlYS1hdHRpdml0YSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XHJcbn1cclxuaDEge1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbmgzIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmNvcnJlY3QubWF0LXNlbGVjdC1wYW5lbCB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSg2LCAxODcsIDYsIDAuNSk7XHJcbn1cclxuXHJcbi53cm9uZy5tYXQtc2VsZWN0LXBhbmVsIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDIwNCwgNCwgNCwgMC41KTtcclxufVxyXG5mb3JtIHtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuLmV4YW1wbGUtZm9ybSB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDcwJTtcclxufVxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAuNXJlbTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG4uYnV0dG9uLXBpY2sge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbjogMC4zZW0gIWltcG9ydGFudDtcclxufVxyXG4uYnV0dG9uLXBpY2stcHV6emxlIHtcclxuICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcclxufVxyXG4uaW1nLXB1enpsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmltZy11cmwge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5pbWFnZS1wcmV2aWV3IHtcclxuICBoZWlnaHQ6IDE1dmg7XHJcbiAgbWFyZ2luOiAxcmVtIDA7XHJcbn1cclxuLm5vaW1hZ2UtY29udGFpbmVye1xyXG4gIGJvcmRlcjogIzE0MTQ0ZGFmIDNweCBzb2xpZDtcclxuICBtYXJnaW46IDJweCAzMCU7XHJcbiAgaGVpZ2h0OjEwJTtcclxufVxyXG5cclxuLmltYWdlLXByZXZpZXcgaW1nIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmRpZmZpY29sdGEge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5kaWZmaWN1bHR5LWxldmVscyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogMnZ3O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIGxhYmVsIHtcclxuICAgIHBhZGRpbmc6IDEuNWVtIDJlbTtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNsaXA6IHJlY3QoMXB4LCAxcHgsIDFweCwgMXB4KTtcclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9XCJyYWRpb1wiXSArIGxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjkzO1xyXG4gICAgbWluLWhlaWdodDogMS41ZW07XHJcbiAgICBtaW4td2lkdGg6IDVlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICBjb2xvcjogJGZvbnQtY29sb3I7XHJcbiAgfVxyXG4gIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgbGFiZWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdUJhY2tncm91bmQ7XHJcbiAgICBtaW4taGVpZ2h0OiAxLjVlbTtcclxuICAgIG1pbi13aWR0aDogNWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgLm1hdC1pY29uIHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5hZ2dBdHRpdml0YSB7XHJcbiAgbWFyZ2luOiAwLjhlbSAhaW1wb3J0YW50O1xyXG59XHJcbi5kbmQtdGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kO1xyXG4gIHBhZGRpbmc6IDF2dztcclxuICBtYXJnaW46IDAuNXZ3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBpbnB1dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbn1cclxuXHJcbi5jb250YWluZXItYnV0dG9ue1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcbiJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfiguraComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-configura',
                templateUrl: './configura.component.html',
                styleUrls: ['./configura.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: src_app_services_dummy_api_service__WEBPACK_IMPORTED_MODULE_5__["DummyApiService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }]; }, null); })();
class CancellazioneDialog {
    constructor(data) {
        this.data = data;
    }
    //metodo per eliminare attività tramite splice
    eliminaAttivita(activityId) {
        console.log('cancello: ' + activityId);
        this.data.steps.splice(activityId, 1);
    }
}
CancellazioneDialog.ɵfac = function CancellazioneDialog_Factory(t) { return new (t || CancellazioneDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])); };
CancellazioneDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CancellazioneDialog, selectors: [["cancellazione-dialog"]], decls: 12, vars: 1, consts: [["mat-dialog-title", ""], [1, "mat-typography"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close", "click"]], template: function CancellazioneDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sei sicuro di volere eliminare questa attivit\u00E0?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "La cancellazione dell'attivit\u00E0 sar\u00E0 irreversibile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-dialog-actions", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CancellazioneDialog_Template_button_click_10_listener() { return ctx.eliminaAttivita(ctx.data.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Continue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogClose"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CancellazioneDialog, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cancellazione-dialog',
                templateUrl: 'cancellazione-dialog.html',
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "G19n":
/*!************************************************************!*\
  !*** ./src/app/components/auth/signup/signup.component.ts ***!
  \************************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "jC6o");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../header/header.component */ "2MiI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");










function SignupComponent_mat_spinner_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
} }
function SignupComponent_form_3_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter a valid email.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_form_3_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter a valid password.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_form_3_button_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Signup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_form_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function SignupComponent_form_3_Template_form_submit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onSignup(_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SignupComponent_form_3_mat_error_5_Template, 2, 0, "mat-error", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SignupComponent_form_3_mat_error_10_Template, 2, 0, "mat-error", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SignupComponent_form_3_button_12_Template, 2, 0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isLoading);
} }
class SignupComponent {
    constructor(authService) {
        this.authService = authService;
        this.isLoading = false;
        this.titolo = 'Signup';
    }
    // ngOnInit() {
    //   this.authStatusSub =  this.authService.getAuthStatusListener().subscribe(
    //     authStatus => {
    //       this.isLoading= false;
    //     });
    // }
    // ngOnDestroy(){
    //   this.authStatusSub.unsubscribe();
    // }
    //per creare un nuovo profilo tramite authService, dopo aver controllato la validità
    onSignup(form) {
        if (form.invalid) {
            return;
        }
        this.isLoading = true;
        this.authService.createUser(form.value.email, form.value.password);
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["ng-component"]], decls: 4, vars: 3, consts: [[3, "my-title"], [1, "container"], [4, "ngIf"], [3, "submit", 4, "ngIf"], [3, "submit"], ["signupForm", "ngForm"], ["matInput", "", "name", "email", "ngModel", "", "type", "email", "placeholder", "E-Mail", "required", "", "email", ""], ["emailInput", "ngModel"], ["type", "password", "name", "password", "ngModel", "", "matInput", "", "placeholder", "Password", "required", ""], ["passwordInput", "ngModel"], ["mat-raised-button", "", "color", "accent", "type", "submit", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", "type", "submit"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_mat_spinner_2_Template, 1, 0, "mat-spinner", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SignupComponent_form_3_Template, 13, 3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("my-title", ctx.titolo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatSpinner"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["EmailValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]], styles: [".container[_ngcontent-%COMP%] {\n  background-color: rgba(212, 200, 200, 0.685);\n  padding: 1em;\n  padding-top: 5em;\n  border-radius: 5px;\n  width: 70%;\n  height: 22em;\n  margin-top: 7em;\n  box-shadow: 1px 0px 2px 1px rgba(16, 18, 44, 0.336), 0px 0px 11px 7px rgba(13, 10, 34, 0.315);\n}\n\nform[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 75%;\n}\n\nmat-spinner[_ngcontent-%COMP%] {\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdXRoL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSw0Q0FGVztFQUdYLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsNkZBQUE7QUFGRjs7QUFLQTtFQUNFLFdBQUE7QUFGRjs7QUFJQTtFQUNFLFVBQUE7QUFERjs7QUFHQTtFQUNFLFlBQUE7QUFBRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZvbnQtY29sb3I6ICM1YzVmNjY7XHJcbiRwcmltYXJ5LWNvbG9yOiAjM2IzYTk5O1xyXG4kYmFja2dyb3VuZDogcmdiYSgyMTIsIDIwMCwgMjAwLCAwLjY4NSk7XHJcbi5jb250YWluZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjokYmFja2dyb3VuZCA7XHJcbiAgcGFkZGluZzogMWVtO1xyXG4gIHBhZGRpbmctdG9wOiA1ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgaGVpZ2h0OiAyMmVtO1xyXG4gIG1hcmdpbi10b3A6IDdlbTtcclxuICBib3gtc2hhZG93OiAxcHggMHB4IDJweCAxcHggcmdiYSgxNiwgMTgsIDQ0LCAwLjMzNiksXHJcbiAgICAwcHggMHB4IDExcHggN3B4IHJnYmEoMTMsIDEwLCAzNCwgMC4zMTUpO1xyXG59XHJcbmZvcm17XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxubWF0LWZvcm0tZmllbGR7XHJcbiAgd2lkdGg6IDc1JTtcclxufVxyXG5tYXQtc3Bpbm5lciB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.scss']
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "HzFZ":
/*!**********************************************************!*\
  !*** ./src/app/components/auth/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "jC6o");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../header/header.component */ "2MiI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");










function LoginComponent_form_2_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter a valid email.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_form_2_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter a valid password.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_form_2_button_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_form_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LoginComponent_form_2_Template_form_submit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onLogin(_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LoginComponent_form_2_mat_error_5_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LoginComponent_form_2_mat_error_10_Template, 2, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LoginComponent_form_2_button_12_Template, 2, 0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isLoading);
} }
function LoginComponent_mat_spinner_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
} }
class LoginComponent {
    constructor(authService) {
        this.authService = authService;
        this.isLoading = false;
        this.titolo = 'Login';
    }
    ngOnInit() {
        this.authStatusSub = this.authService.getAuthStatusListener().subscribe(authStatus => {
            this.isLoading = false;
        });
    }
    ngOnDestroy() {
        this.authStatusSub.unsubscribe();
    }
    onLogin(form) {
        if (form.invalid) {
            return;
        }
        this.isLoading = true;
        this.authService.login(form.value.email, form.value.password);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["ng-component"]], decls: 4, vars: 3, consts: [[3, "my-title"], [1, "container"], [3, "submit", 4, "ngIf"], [4, "ngIf"], [3, "submit"], ["loginForm", "ngForm"], ["matInput", "", "name", "email", "ngModel", "", "type", "email", "placeholder", "E-Mail", "required", "", "email", ""], ["emailInput", "ngModel"], ["type", "password", "name", "password", "ngModel", "", "matInput", "", "placeholder", "Password", "required", ""], ["passwordInput", "ngModel"], ["mat-raised-button", "", "color", "accent", "type", "submit", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", "type", "submit"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_form_2_Template, 13, 3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginComponent_mat_spinner_3_Template, 1, 0, "mat-spinner", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("my-title", ctx.titolo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["EmailValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatSpinner"]], styles: [".container[_ngcontent-%COMP%] {\n  background-color: rgba(212, 200, 200, 0.685);\n  padding: 1em;\n  padding-top: 5em;\n  border-radius: 5px;\n  width: 70%;\n  height: 22em;\n  margin-top: 7em;\n  box-shadow: 1px 0px 2px 1px rgba(16, 18, 44, 0.336), 0px 0px 11px 7px rgba(13, 10, 34, 0.315);\n}\n\nform[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 75%;\n}\n\nmat-spinner[_ngcontent-%COMP%] {\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsNENBSFc7RUFJWCxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDZGQUFBO0FBSEY7O0FBTUE7RUFDRSxXQUFBO0FBSEY7O0FBS0E7RUFDRSxVQUFBO0FBRkY7O0FBSUE7RUFDRSxZQUFBO0FBREYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZm9udC1jb2xvcjogIzVjNWY2NjtcclxuJHByaW1hcnktY29sb3I6ICMzYjNhOTk7XHJcbiRiYWNrZ3JvdW5kOiByZ2JhKDIxMiwgMjAwLCAyMDAsIDAuNjg1KTtcclxuXHJcbi5jb250YWluZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjokYmFja2dyb3VuZCA7XHJcbiAgcGFkZGluZzogMWVtO1xyXG4gIHBhZGRpbmctdG9wOiA1ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgaGVpZ2h0OiAyMmVtO1xyXG4gIG1hcmdpbi10b3A6IDdlbTtcclxuICBib3gtc2hhZG93OiAxcHggMHB4IDJweCAxcHggcmdiYSgxNiwgMTgsIDQ0LCAwLjMzNiksXHJcbiAgICAwcHggMHB4IDExcHggN3B4IHJnYmEoMTMsIDEwLCAzNCwgMC4zMTUpO1xyXG59XHJcbmZvcm17XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxubWF0LWZvcm0tZmllbGR7XHJcbiAgd2lkdGg6IDc1JTtcclxufVxyXG5tYXQtc3Bpbm5lciB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "KtP/":
/*!*******************************************************!*\
  !*** ./src/app/components/autore/autore.component.ts ***!
  \*******************************************************/
/*! exports provided: AutoreComponent, UploadDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoreComponent", function() { return AutoreComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadDialog", function() { return UploadDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _mime_type_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mime-type.validator */ "dYRJ");
/* harmony import */ var file_saver_dist_FileSaver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! file-saver/dist/FileSaver */ "HXk2");
/* harmony import */ var file_saver_dist_FileSaver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver_dist_FileSaver__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_dummy_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/dummy-api.service */ "yYPB");
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "QJFE");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../auth/auth.service */ "jC6o");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../header/header.component */ "2MiI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");




















function AutoreComponent_mat_accordion_2_mat_expansion_panel_5_div_22_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r12.imagePreview, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r12.form.value.title);
} }
function AutoreComponent_mat_accordion_2_mat_expansion_panel_5_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AutoreComponent_mat_accordion_2_mat_expansion_panel_5_div_22_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const storia_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return storia_r7.nome = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AutoreComponent_mat_accordion_2_mat_expansion_panel_5_div_22_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const storia_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return storia_r7.urlBackground = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutoreComponent_mat_accordion_2_mat_expansion_panel_5_div_22_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return _r11.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Pick Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 27, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AutoreComponent_mat_accordion_2_mat_expansion_panel_5_div_22_Template_input_change_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r19.onImagePicked($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AutoreComponent_mat_accordion_2_mat_expansion_panel_5_div_22_div_9_Template, 2, 2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutoreComponent_mat_accordion_2_mat_expansion_panel_5_div_22_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.salvaModifiche(i_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Salva ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const storia_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", storia_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", storia_r7.nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", storia_r7.urlBackground);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.imagePreview !== "" && ctx_r10.imagePreview && ctx_r10.form.get("image").valid);
} }
function AutoreComponent_mat_accordion_2_mat_expansion_panel_5_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutoreComponent_mat_accordion_2_mat_expansion_panel_5_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const i_r8 = ctx.index; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return (ctx_r23.statoMod[i_r8] = !ctx_r23.statoMod[i_r8]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Modifica ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutoreComponent_mat_accordion_2_mat_expansion_panel_5_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const storia_r7 = ctx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.configuraStoria(storia_r7.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Configura ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutoreComponent_mat_accordion_2_mat_expansion_panel_5_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const storia_r7 = ctx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.download(storia_r7.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Download JSON ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Elimina ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "swal", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("confirm", function AutoreComponent_mat_accordion_2_mat_expansion_panel_5_Template_swal_confirm_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const storia_r7 = ctx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r27.eliminaStoria(storia_r7.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AutoreComponent_mat_accordion_2_mat_expansion_panel_5_div_22_Template, 12, 4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const storia_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](storia_r7.nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swal", _r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", storia_r7.urlBackground, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", "  immagine sfondo di  " + storia_r7.nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.statoMod[i_r8]);
} }
function AutoreComponent_mat_accordion_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-accordion", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Elenco delle storie presenti nel database ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AutoreComponent_mat_accordion_2_mat_expansion_panel_5_Template, 23, 5, "mat-expansion-panel", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.storie);
} }
function AutoreComponent_div_5_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r29.imagePreview, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r29.form.value.title);
} }
function AutoreComponent_div_5_button_26_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutoreComponent_div_5_button_26_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r31.aggiungiStoria(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Salva ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AutoreComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "name :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "didascalia :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "fascia di et\u00E0 :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-radio-group", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-radio-button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " 7 - 10 anni ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-radio-button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " 11 - 14 anni ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-radio-button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " 15 - 18 anni ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutoreComponent_div_5_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24); return _r28.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Pick Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 27, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AutoreComponent_div_5_Template_input_change_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.onImagePicked($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AutoreComponent_div_5_div_25_Template, 2, 2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AutoreComponent_div_5_button_26_Template, 2, 0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.imagePreview !== "" && ctx_r2.imagePreview && ctx_r2.form.get("image").valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.imgurComplete == true);
} }
function AutoreComponent_mat_spinner_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
} }
function AutoreComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Errore");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AutoreComponent {
    constructor(api, swalLoader, router, http, dialog, authService) {
        this.api = api;
        this.swalLoader = swalLoader;
        this.router = router;
        this.http = http;
        this.dialog = dialog;
        this.authService = authService;
        this.titolo = "Menu' Autore";
        this.storie = [];
        this.myTempName = "";
        this.myTempDidascalia = "";
        this.myTempFasciaEta = "";
        this.statoMod = [];
        this.isLoading = false;
        this.userIsAuthenticated = false;
        this.imgurComplete = false;
    }
    //Trasforma il file immagine in base64, dopo di che lo passiamo a un servizio che lo porta in un server online, e ci restiruisce il link
    onImagePicked(event) {
        const file = event.target.files[0];
        this.form.patchValue({ image: file });
        this.form.get('image').updateValueAndValidity();
        const reader = new FileReader();
        reader.onload = () => {
            this.imagePreview = reader.result;
            let base64 = this.imagePreview.split('base64');
            this.api.uploadImage(base64[1]).subscribe((res) => {
                this.imagePreview = res.data.link;
                this.imgurComplete = true;
            });
        };
        reader.readAsDataURL(file);
    }
    //Al click sul pulsante che porta a questo metodo, i dati inseriti vengono passati a db tramite un servizio di dummy-api,
    //una volta conclusa l'operazione sarà visibile la storia
    aggiungiStoria() {
        this.isLoading = true;
        if (this.form.invalid) {
            alert("errore compila i tutti i campi");
            this.isLoading = false;
            return;
        }
        this.isLoading = true;
        let maxIdx = 0;
        this.api.getStories().subscribe((risultato) => {
            if (risultato && risultato.posts) {
                if (risultato.maxPosts == 0) {
                    maxIdx = 0;
                }
                risultato.posts.forEach(element => {
                    this.storie.push(this.api.reMap(element));
                    if (element.id == 0) {
                        maxIdx = 1;
                    }
                    else if (element.id >= maxIdx) {
                        maxIdx = Number(element.id) + 1;
                    }
                });
            }
            const tempStoria = {
                id: maxIdx,
                title: this.form.value.myTempName,
                didascalia: this.form.value.myTempDidascalia,
                fasciaEta: this.form.value.myTempFasciaEta,
                image: this.imagePreview,
                attivita: []
            };
            //Servizio di dummy api
            this.api.addNewStory(tempStoria)
                .subscribe(responseData => {
                alert("fatto: " + responseData.message);
                this.isLoading = false;
                this.refreshData();
            });
            this.form.reset();
        });
    }
    //porta al component configura
    configuraStoria(id) {
        this.router.navigateByUrl('configura/' + id);
    }
    //elimina la storia
    eliminaStoria(id) {
        this.api.deleteStory(id).subscribe((responseData) => {
            alert(responseData.message);
            this.refreshData();
        });
    }
    //Una volta completate le modifiche, verrano riportate a db e salvate
    salvaModifiche(i) {
        console.log("le mie modifiche sono :");
        let tempStoria;
        this.api.getStoria(this.storie[i].id).subscribe((res) => {
            tempStoria = this.api.reMap(res);
            if (this.imagePreview != "") {
                tempStoria.urlBackground = this.imagePreview;
            }
            else {
                tempStoria.urlBackground = this.storie[i].urlBackground;
            }
            tempStoria.nome = this.storie[i].nome;
            console.log(this.storie[i].nome);
            this.api.updateStoria(tempStoria).subscribe(() => {
                this.refreshData();
            });
        });
    }
    //Possibilità di scaricare la storia in formato json
    download(i) {
        let tempStoria;
        this.api.getStoria(i).subscribe(storia => {
            storia = this.api.reMapForDownload(storia);
            const blob = new Blob([JSON.stringify(storia)], { type: 'text/json' });
            const fileName = storia.title + '.json';
            Object(file_saver_dist_FileSaver__WEBPACK_IMPORTED_MODULE_3__["saveAs"])(blob, fileName);
        }, err => {
            console.log(err);
        });
    }
    //Apre un mat-dialog con riferimento al upload-dialog.html per dare la possibilità di effettuare un upload di file json che usi un interfaccia:Storia
    openDialog() {
        const dialogRef = this.dialog.open(UploadDialog);
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}​​`);
            this.refreshData();
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
    ngOnInit() {
        this.userId = this.authService.getUserId();
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.authStatusSub = this.authService
            .getAuthStatusListener()
            .subscribe(isAuthenticated => {
            this.userIsAuthenticated = isAuthenticated;
            this.userId = this.authService.getUserId();
        });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            myTempDidascalia: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            }),
            myTempName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            }),
            myTempFasciaEta: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            }),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                asyncValidators: [_mime_type_validator__WEBPACK_IMPORTED_MODULE_2__["mimeType"]]
            })
        });
        this.refreshData();
    }
    //Ricarica i dati sempre aggiornati
    refreshData() {
        if (this.getStorySubscription) {
            this.getStorySubscription.unsubscribe();
        }
        this.getStorySubscription = this.api.getStories().subscribe((risultato) => {
            this.storie = [];
            if (risultato && risultato.posts) {
                risultato.posts.forEach(element => {
                    this.storie.push(this.api.reMap(element));
                    console.log();
                });
            }
            for (let i = 0; i < this.storie.length; i++) {
                this.statoMod.push(false);
            }
        });
        this.imgurComplete = false;
    }
}
AutoreComponent.ɵfac = function AutoreComponent_Factory(t) { return new (t || AutoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dummy_api_service__WEBPACK_IMPORTED_MODULE_4__["DummyApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_5__["SweetAlert2LoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"])); };
AutoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AutoreComponent, selectors: [["app-autore"]], decls: 14, vars: 6, consts: [[3, "my-title"], [1, "container1"], ["multi", "true", 4, "ngIf", "ngIfElse"], [3, "showConfirmButton"], ["mioAlert", ""], [4, "swalPortal"], [1, "btn-container"], ["mat-raised-button", "", "color", "accent", 3, "swal"], ["mat-raised-button", "", 3, "click"], [4, "ngIf"], ["error", ""], ["multi", "true"], ["hideToggle", ""], [4, "ngFor", "ngForOf"], ["id", "storyTitle"], [1, "container-panel"], [1, "container-modifica"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "info", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "swal"], ["confirmButtonText", "Elimina", 3, "confirm"], ["mioAlert1", ""], [1, "image-container"], [1, "img-story", 3, "src", "alt"], ["type", "text", "disabled", "", 1, "form-control", 3, "placeholder"], ["type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["type", "file", 3, "change"], ["filePicker", ""], ["class", "image-preview", 4, "ngIf"], ["mat-raised-button", "", "color", "warn", 3, "click"], [1, "image-preview"], [3, "src", "alt"], [3, "formGroup"], ["formControlName", "myTempName", "id", "name", "type", "text", 1, "form-control"], ["formControlName", "myTempDidascalia", "id", "didascalia", "type", "text", 1, "form-control"], ["formControlName", "myTempFasciaEta", "aria-label", "Select an option"], ["value", "fasciaUno"], ["value", "fasciaDue"], ["value", "fasciaTre"], ["mat-raised-button", "", "color", "accent", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["aria-hidden", "false", "aria-label", "Example home icon"]], template: function AutoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AutoreComponent_mat_accordion_2_Template, 6, 1, "mat-accordion", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "swal", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AutoreComponent_div_5_Template, 27, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "aggiunta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutoreComponent_Template_button_click_9_listener() { return ctx.openDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AutoreComponent_mat_spinner_11_Template, 1, 0, "mat-spinner", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AutoreComponent_ng_template_12_Template, 7, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("my-title", ctx.titolo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.storie.length > 0)("ngIfElse", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showConfirmButton", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swal", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_5__["SwalComponent"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_5__["SwalPortalDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_5__["SwalDirective"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionPanelTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCard"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__["MatSpinner"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Acme&family=Architects+Daughter&family=Caveat:wght@700&family=Courgette&family=Montserrat:wght@500&family=Patrick+Hand&family=Permanent+Marker&display=swap\");\n* {\n  font-family: \"Montserrat\", sans-serif;\n}\nmat-spinner {\n  margin: auto;\n}\nmat-grid-tile {\n  align-content: flex-end;\n}\n.container-panel {\n  position: relative;\n  width: 100%;\n  height: 40vw;\n}\n.container-panel button {\n  width: 20vw;\n  margin-bottom: 2vw;\n}\n.container-modifica {\n  position: absolute;\n  min-height: -webkit-fit-content;\n  min-height: -moz-fit-content;\n  min-height: fit-content;\n  width: 30%;\n  top: 3vw;\n  left: 2vw;\n}\n.image-container {\n  position: absolute;\n  min-height: -webkit-fit-content;\n  min-height: -moz-fit-content;\n  min-height: fit-content;\n  width: 60%;\n  top: 3vw;\n  right: 2vw;\n}\n.img-story {\n  position: absolute;\n  left: 10vw;\n  width: 30vw;\n  border: 3px solid;\n}\ninput[type=file] {\n  visibility: hidden;\n}\n.container1 {\n  width: 100%;\n  margin: 5px;\n}\nmat-raised-button,\nmat-stroked-button {\n  padding: 5px;\n  margin: 10px;\n}\n#storyTitle {\n  font-size: 1.4vw;\n  text-transform: capitalize;\n}\n.btn-container {\n  display: flex;\n  justify-content: space-evenly;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdXRvcmUvYXV0b3JlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLG1OQUFBO0FBQ1I7RUFDRSxxQ0FBQTtBQUNGO0FBQ0E7RUFDRSxZQUFBO0FBRUY7QUFBQTtFQUNFLHVCQUFBO0FBR0Y7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFFRjtBQUFFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBRUo7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsK0JBQUE7RUFBQSw0QkFBQTtFQUFBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBRUY7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsK0JBQUE7RUFBQSw0QkFBQTtFQUFBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBR0Y7QUFEQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUlGO0FBRkE7RUFDRSxrQkFBQTtBQUtGO0FBSEE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQU1GO0FBSEE7O0VBRUUsWUFBQTtFQUNBLFlBQUE7QUFNRjtBQUhBO0VBQ0UsZ0JBQUE7RUFDQSwwQkFBQTtBQU1GO0FBSEE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7QUFNRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXV0b3JlL2F1dG9yZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BY21lJmZhbWlseT1BcmNoaXRlY3RzK0RhdWdodGVyJmZhbWlseT1DYXZlYXQ6d2dodEA3MDAmZmFtaWx5PUNvdXJnZXR0ZSZmYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDUwMCZmYW1pbHk9UGF0cmljaytIYW5kJmZhbWlseT1QZXJtYW5lbnQrTWFya2VyJmRpc3BsYXk9c3dhcFwiKTtcclxuKiB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xyXG59XHJcbm1hdC1zcGlubmVyIHtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxubWF0LWdyaWQtdGlsZSB7XHJcbiAgYWxpZ24tY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcblxyXG4uY29udGFpbmVyLXBhbmVsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0MHZ3O1xyXG5cclxuICBidXR0b24ge1xyXG4gICAgd2lkdGg6IDIwdnc7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAydnc7XHJcbiAgfVxyXG59XHJcbi5jb250YWluZXItbW9kaWZpY2Ege1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtaW4taGVpZ2h0OiBmaXQtY29udGVudDtcclxuICB3aWR0aDogMzAlO1xyXG4gIHRvcDogM3Z3O1xyXG4gIGxlZnQ6IDJ2dztcclxufVxyXG4uaW1hZ2UtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWluLWhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgd2lkdGg6IDYwJTtcclxuICB0b3A6IDN2dztcclxuICByaWdodDogMnZ3O1xyXG59XHJcbi5pbWctc3Rvcnkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAxMHZ3O1xyXG4gIHdpZHRoOiAzMHZ3O1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkO1xyXG59XHJcbmlucHV0W3R5cGU9XCJmaWxlXCJdIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuLmNvbnRhaW5lcjEge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG5tYXQtcmFpc2VkLWJ1dHRvbixcclxubWF0LXN0cm9rZWQtYnV0dG9uIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4jc3RvcnlUaXRsZSB7XHJcbiAgZm9udC1zaXplOiAxLjR2dztcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuXHJcbn1cclxuLmJ0bi1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbn1cclxuIl19 */"], encapsulation: 2 });
AutoreComponent.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AutoreComponent, factory: AutoreComponent.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-autore',
                templateUrl: './autore.component.html',
                styleUrls: ['./autore.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _services_dummy_api_service__WEBPACK_IMPORTED_MODULE_4__["DummyApiService"] }, { type: _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_5__["SweetAlert2LoaderService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] }]; }, null); })();
//Componente per il dialog di upload
class UploadDialog {
    constructor(dialogRef, api) {
        this.dialogRef = dialogRef;
        this.api = api;
    }
    //Se si decide di chiuder il dialog senza effettuare operazioni
    onNoClick() {
        this.dialogRef.close();
    }
    //Fa scegliere un file di cui effettuare l'upload
    onFileSelect(event) {
        this.selectedFile = event.target.files[0];
        const fileReader = new FileReader();
        fileReader.readAsText(this.selectedFile, "UTF-8");
        fileReader.onload = () => {
            console.log(fileReader.result);
            let storia = JSON.parse(fileReader.result);
            let maxIdx = 0;
            this.api.getStories().subscribe((risultato) => {
                if (risultato && risultato.posts) {
                    if (risultato.maxPosts == 0) {
                        maxIdx = 0;
                    }
                    risultato.posts.forEach(element => {
                        if (element.id == 0) {
                            maxIdx = 1;
                        }
                        else if (element.id >= maxIdx) {
                            maxIdx = Number(element.id) + 1;
                        }
                    });
                }
                storia.id = maxIdx;
                //Servizio di dummy api
                this.api.addNewStory(storia).subscribe((res) => {
                    if (res) {
                        alert(res.message);
                    }
                    else {
                        alert("Generic error");
                    }
                }, (err) => {
                    alert(JSON.stringify(err));
                });
            });
        };
        fileReader.onerror = (error) => {
            console.log(error);
        };
    }
}
UploadDialog.ɵfac = function UploadDialog_Factory(t) { return new (t || UploadDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dummy_api_service__WEBPACK_IMPORTED_MODULE_4__["DummyApiService"])); };
UploadDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UploadDialog, selectors: [["upload-dialog"]], decls: 14, vars: 0, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["type", "file", 2, "display", "none", 3, "change"], ["hiddenfileinput", ""], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"], ["mat-button", "", "cdkFocusInitial", "", 3, "click"], [1, "material-icons", "left"]], template: function UploadDialog_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Hi!\u200B\u200B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Puoi fare l'upload di un file JSON");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UploadDialog_Template_input_change_5_listener($event) { return ctx.onFileSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadDialog_Template_button_click_8_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadDialog_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return _r0.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "cloud");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Select JSON");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadDialog, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'upload-dialog',
                templateUrl: 'upload-dialog.html',
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogRef"] }, { type: _services_dummy_api_service__WEBPACK_IMPORTED_MODULE_4__["DummyApiService"] }]; }, null); })();


/***/ }),

/***/ "L7MN":
/*!*******************************************************!*\
  !*** ./src/app/components/player/player.component.ts ***!
  \*******************************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_dummy_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/dummy-api.service */ "yYPB");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angularx-qrcode */ "0hV+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");













function PlayerComponent_ngb_alert_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function PlayerComponent_ngb_alert_0_Template_ngb_alert_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const alert_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.close(alert_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alert_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", alert_r3.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n", alert_r3.message, "\n");
} }
function PlayerComponent_section_1_mat_form_field_35_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dimensione_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", dimensione_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dimensione_r12, " studenti ");
} }
function PlayerComponent_section_1_mat_form_field_35_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Numero di studenti");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PlayerComponent_section_1_mat_form_field_35_Template_mat_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.nPartecipanti = $event; })("ngModelChange", function PlayerComponent_section_1_mat_form_field_35_Template_mat_select_ngModelChange_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.nPartecipantiChanged(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PlayerComponent_section_1_mat_form_field_35_mat_option_4_Template, 2, 2, "mat-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r6.nPartecipanti);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.dimensioni);
} }
function PlayerComponent_section_1_section_36_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerComponent_section_1_section_36_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r18.aggiungiNuovaSquadra(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " + Aggiungi squadra ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlayerComponent_section_1_section_36_div_6_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerComponent_section_1_section_36_div_6_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const squadra_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r25.eliminaSquadra(squadra_r20.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlayerComponent_section_1_section_36_div_6_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r28);
} }
function PlayerComponent_section_1_section_36_div_6_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerComponent_section_1_section_36_div_6_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const squadra_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r29.aggiungiPlayer(squadra_r20.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlayerComponent_section_1_section_36_div_6_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerComponent_section_1_section_36_div_6_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const squadra_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r32.rimuoviPlayer(squadra_r20.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete_forever");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlayerComponent_section_1_section_36_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PlayerComponent_section_1_section_36_div_6_button_6_Template, 3, 0, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Giocatori:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PlayerComponent_section_1_section_36_div_6_li_11_Template, 3, 1, "li", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PlayerComponent_section_1_section_36_div_6_button_13_Template, 3, 0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PlayerComponent_section_1_section_36_div_6_button_15_Template, 3, 0, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const squadra_r20 = ctx.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](squadra_r20.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.squadre.length > ctx_r17.nSquadre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", squadra_r20.players);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.nPartecipantiAggiunti < ctx_r17.nPartecipanti || squadra_r20.players.length < 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", squadra_r20.players.length > 2);
} }
function PlayerComponent_section_1_section_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PlayerComponent_section_1_section_36_button_4_Template, 2, 0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PlayerComponent_section_1_section_36_div_6_Template, 16, 5, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Partecipanti : ", ctx_r7.nPartecipantiAggiunti, " / ", ctx_r7.nPartecipanti, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.nPartecipanti - ctx_r7.nPartecipantiAggiunti >= 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.squadre);
} }
function PlayerComponent_section_1_div_54_form_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PlayerComponent_section_1_div_54_form_1_div_1_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r38.traccia = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "history_edu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const storia_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", storia_r36.id)("value", storia_r36.id)("ngModel", ctx_r37.traccia);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", storia_r36.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](storia_r36.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", storia_r36.urlBackground, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PlayerComponent_section_1_div_54_form_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PlayerComponent_section_1_div_54_form_1_div_1_Template, 9, 6, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const storia_r36 = ctx.$implicit;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", storia_r36.fasciaEta == ctx_r35.fasciaEta);
} }
function PlayerComponent_section_1_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PlayerComponent_section_1_div_54_form_1_Template, 2, 1, "form", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.storie);
} }
function PlayerComponent_section_1_div_65_qrcode_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "qrcode", 68);
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("qrdata", "https://site192029.tw.cs.unibo.it/player/" + ctx_r41.tipologiaGruppo + "/" + ctx_r41.fasciaEta + "/" + ctx_r41.traccia + "/autoplay")("width", 156)("errorCorrectionLevel", "M");
} }
function PlayerComponent_section_1_div_65_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerComponent_section_1_div_65_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r43.iniziaPartita(ctx_r43.traccia); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Inizia Partita ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlayerComponent_section_1_div_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PlayerComponent_section_1_div_65_qrcode_5_Template, 1, 3, "qrcode", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PlayerComponent_section_1_div_65_button_7_Template, 2, 0, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Traccia: ", ctx_r9.traccia, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.tipologiaGruppo == "individuale");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.tipologiaGruppo == "individuale");
} }
function PlayerComponent_section_1_div_67_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerComponent_section_1_div_67_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r45.playClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "play_arrow");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlayerComponent_section_1_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Seleziona la storia che preferisci e inizia a giocare ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PlayerComponent_section_1_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.tipologiaGruppo = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Individuale");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PlayerComponent_section_1_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r49.tipologiaGruppo = $event; })("click", function PlayerComponent_section_1_Template_input_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.popolaDimensioni("gruppo"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "group");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Gruppo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "(2-5 persone)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PlayerComponent_section_1_Template_input_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r51.tipologiaGruppo = $event; })("click", function PlayerComponent_section_1_Template_input_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r52.popolaDimensioni("classe"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "groups");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Classe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "(15-25 persone)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, PlayerComponent_section_1_mat_form_field_35_Template, 5, 2, "mat-form-field", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, PlayerComponent_section_1_section_36_Template, 7, 4, "section", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "section", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerComponent_section_1_Template_div_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r53.traccia = 0 - 1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PlayerComponent_section_1_Template_input_ngModelChange_40_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r54.fasciaEta = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "7 - 10 anni");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PlayerComponent_section_1_Template_input_ngModelChange_45_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r55.fasciaEta = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "11 - 14 anni");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PlayerComponent_section_1_Template_input_ngModelChange_50_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r56.fasciaEta = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "15 - 18 anni");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, PlayerComponent_section_1_div_54_Template, 2, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Riepilogo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, PlayerComponent_section_1_div_65_Template, 8, 3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, PlayerComponent_section_1_div_67_Template, 4, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.tipologiaGruppo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.tipologiaGruppo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.tipologiaGruppo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.tipologiaGruppo == "classe" || ctx_r1.tipologiaGruppo == "gruppo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.nPartecipanti != 0 - 1 && ctx_r1.tipologiaGruppo == "classe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.fasciaEta);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.fasciaEta);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.fasciaEta);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.fasciaEta != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Gruppo : ", ctx_r1.tipologiaGruppo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Fascia di et\u00E0 : ", ctx_r1.fasciaEta, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.traccia != 0 - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.tipologiaGruppo != "individuale" && ctx_r1.tipologiaGruppo != "" && (ctx_r1.tipologiaGruppo == "classe" && ctx_r1.nPartecipantiAggiunti == ctx_r1.nPartecipanti || ctx_r1.tipologiaGruppo == "gruppo" && ctx_r1.nPartecipanti > 0) && ctx_r1.traccia != 0 - 1);
} }
function PlayerComponent_section_2_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerComponent_section_2_div_1_div_3_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const s_r59 = ctx.$implicit; const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r60.iniziaPartita(ctx_r60.traccia, s_r59.idPartita); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Inizia Partita ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "qrcode", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r59 = ctx.$implicit;
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r59.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("qrdata", "https://site192029.tw.cs.unibo.it/player/" + ctx_r58.tipologiaGruppo + "/" + ctx_r58.fasciaEta + "/" + ctx_r58.traccia + "/autoplay/" + s_r59.idPartita)("width", 156)("errorCorrectionLevel", "M");
} }
function PlayerComponent_section_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Ecco i vostri QR Code! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PlayerComponent_section_2_div_1_div_3_Template, 8, 4, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r57.squadre);
} }
function PlayerComponent_section_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PlayerComponent_section_2_div_1_Template, 4, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.tipologiaGruppo == "classe" || ctx_r2.tipologiaGruppo == "gruppo");
} }
const MAXPARTECIPANTI = 5;
const MINPARTECIPANTI = 2;
const myAlert = {
    type: 'danger',
    message: 'compila tutti i campi'
};
class PlayerComponent {
    constructor(apiDb, activeRoute, router) {
        this.apiDb = apiDb;
        this.activeRoute = activeRoute;
        this.router = router;
        this.titolo = "Player";
        this.tipologiaGruppo = "";
        this.fasciaEta = "";
        this.storie = [];
        this.traccia = -1;
        this.playClicked = false;
        this.formError = false;
        this.dimensioni = [];
        this.alerts = [];
        this.squadre = [];
        this.idClasseUsati = 0;
        this.nSquadre = -1;
        this.nPartecipanti = -1;
        this.nPartecipantiAggiunti = 0;
        this.personeSquadra = -1;
        this.checkPartecipanti = [];
        this.contatore = 0;
    }
    //Metodo get del servizio dummyApi che restituisce elenco delle storie tramite observable
    getStories() {
        this.apiDb.getStories().subscribe((risultato) => {
            this.storie = risultato.posts;
        });
    }
    //Metodo chiamato dal radio button nel player per resituire il numero di studenti possibili per squadra
    popolaDimensioni(tipo) {
        this.dimensioni = [];
        if (tipo == 'classe') {
            console.log('classe');
            for (let i = 15; i <= 25; i++) {
                this.dimensioni.push(i);
            }
        }
        else if (tipo == 'gruppo') {
            console.log('gruppo');
            for (let i = 2; i <= 5; i++) {
                this.dimensioni.push(i);
            }
        }
    }
    //Metodo utilizzato per aggiungere il singolo player a squadra con idSquadra dato
    aggiungiPlayer(idSquadra) {
        if (this.nPartecipantiAggiunti + 1 > this.nPartecipanti)
            return;
        if (this.squadre[idSquadra].players.length + 1 > MAXPARTECIPANTI)
            return;
        for (let i = 0; i < this.checkPartecipanti.length; i++) {
            if (this.checkPartecipanti[i] == false) {
                this.squadre[idSquadra].players.push('player' + i);
                this.nPartecipantiAggiunti += 1;
                this.checkPartecipanti[i] = true;
                i = this.checkPartecipanti.length;
            }
        }
    }
    //Metodo utilizzato per rimuovere un player da squadra con idSquadra dato
    rimuoviPlayer(idSquadra) {
        var posDaRimuovere = this.squadre[idSquadra].players.pop();
        this.nPartecipantiAggiunti--;
        this.checkPartecipanti[(posDaRimuovere.substring(6, 8))] = false;
    }
    //Metodo che inizializza squadre e players chiamato prima di popolare il numero di squadre minimo per partecipanti selezionato
    azzeraSquadre() {
        this.squadre = [];
        this.nPartecipantiAggiunti = 0;
    }
    //Metodo di aggiunta squadre che viene chiamato ciclicamente quando viene selezionato il numero di partecipanti in modalità classe
    aggiungiSquadra() {
        let lastIdx = this.squadre.length;
        this.squadre.push({
            id: lastIdx,
            players: [],
            name: " squadra" + this.contatore
        });
        this.contatore++;
    }
    //Metodo che consente di eliminare una squadra specifica tramite idSquadra e scala gli id delle squadre successive
    eliminaSquadra(idSquadra) {
        var playerRemoved = this.squadre[idSquadra].players.length;
        for (let index = 0; index < playerRemoved; index++) {
            this.rimuoviPlayer(idSquadra);
        }
        this.squadre.splice(idSquadra, 1);
        for (let index = idSquadra; index < this.squadre.length; index++) {
            this.squadre[index].id = this.squadre[index].id - 1;
        }
    }
    //Metodo di aggiunta squadra abbinato al button visibile nel player, per permettere di creare un numero maggiore di squadre rispetto al "numero minimo" di squadre create per default
    aggiungiNuovaSquadra() {
        let lastIdx = this.squadre.length;
        this.squadre.push({
            id: lastIdx,
            players: [],
            name: " squadra" + this.contatore
        });
        this.contatore++;
        this.aggiungiPartecipanti(MINPARTECIPANTI, lastIdx);
    }
    //Metodo di assegnamento dei players per squadra. Utilizzato nella creazione delle squadre di default con numero di partecipanti per squadra uguale a 2: min di partecipanti per squadra
    aggiungiPartecipanti(numPartecipanti, idS) {
        for (let index = 0; index < numPartecipanti; index++) {
            this.aggiungiPlayer(idS);
        }
    }
    //Metodo che viene chiamato in automatico quando l' utente seleziona il numero di partecipanti totali sa suddividere in squadre
    //Per default assumiamo come numero massimo di partecipanti per squadra uguale a 5 player e attraverso il quale si ottiene il numero minimo di squadre
    //In base al numero minimo di partecipanti vengono utilizzati i metodi azzeraSquadra, aggiungiSquadra e aggiungiPartecipanti sopra descritti
    nPartecipantiChanged() {
        this.contatore = 0;
        for (let i = 0; i < this.nPartecipanti; i++) {
            this.checkPartecipanti[i] = false;
        }
        let minNGruppi = this.nPartecipanti / MAXPARTECIPANTI;
        if (minNGruppi > Math.trunc(minNGruppi)) {
            this.nSquadre = Math.trunc(minNGruppi + 1);
        }
        else {
            this.nSquadre = minNGruppi;
        }
        this.azzeraSquadre();
        for (let i = 0; i < this.nSquadre; i++) {
            this.aggiungiSquadra();
            if (this.tipologiaGruppo == 'gruppo') {
                this.aggiungiPartecipanti(this.nPartecipanti, i);
            }
            else {
                this.aggiungiPartecipanti(MINPARTECIPANTI, i);
            }
        }
    }
    //Il metodo PlayClick è un metodo che gestisce la visualizzazione dei QR code per le modalità gruppo o classe.
    playClick() {
        if (this.fasciaEta == '' || this.traccia == -1 || this.tipologiaGruppo == "") {
            this.showFormError();
        }
        else if (this.tipologiaGruppo == "classe" && this.nPartecipantiAggiunti < this.nPartecipanti) {
            this.showFormError();
        }
        else {
            this.playClicked = true;
        }
        if (this.tipologiaGruppo != "individuale") {
            this.apiDb.getGames().subscribe(conta => {
                let numeroGame = conta.maxPosts;
                let maxClasse = 0;
                for (let i = 0; i < conta.posts.length; i++) {
                    if (conta.posts[i].idClasse >= maxClasse) {
                        maxClasse = conta.posts[i].idClasse + 1;
                    }
                }
                for (let i = 0; i < this.squadre.length; i++) {
                    console.log('Il mio id squadra: ' + this.squadre[i].id);
                    this.apiDb.addNewGame(this.squadre[i].id, maxClasse, numeroGame, this.squadre[i].players.length).subscribe((res) => {
                        console.log(res);
                    });
                    this.squadre[i].idPartita = numeroGame;
                    numeroGame++;
                }
            });
        }
    }
    //Metodo che attraverso il servizio di routing gestisce la navigazione del player verso la partita
    iniziaPartita(id, idPartita = -1) {
        if (idPartita != -1) {
            this.router.navigateByUrl('visualizza/' + id + '/' + idPartita);
        }
        else {
            this.router.navigateByUrl('visualizza/' + id);
        }
    }
    //Metodo di pulizia dell' alert associato al click sulla x di chiusura
    close() {
        this.alerts = [];
    }
    //Metodo di visualizzazione degli errori associati alla funzione play click
    showFormError() {
        this.alerts = [];
        this.alerts.push(myAlert);
    }
    ngOnInit() {
        if (this.activeRoute.snapshot.params.tipo) {
            this.tipologiaGruppo = this.activeRoute.snapshot.params.tipo;
        }
        if (this.activeRoute.snapshot.params.fascia) {
            this.fasciaEta = this.activeRoute.snapshot.params.fascia;
        }
        if (this.activeRoute.snapshot.params.traccia) {
            this.traccia = parseInt(this.activeRoute.snapshot.params.traccia);
        }
        if (this.activeRoute.snapshot.params.partita) {
            this.iniziaPartita(this.traccia, this.activeRoute.snapshot.params.partita);
            return;
        }
        if (this.activeRoute.snapshot.params.mode == 'autoplay') {
            this.iniziaPartita(this.traccia);
        }
        this.getStories();
    }
}
PlayerComponent.ɵfac = function PlayerComponent_Factory(t) { return new (t || PlayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_dummy_api_service__WEBPACK_IMPORTED_MODULE_1__["DummyApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
PlayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayerComponent, selectors: [["app-player"]], decls: 3, vars: 3, consts: [[3, "type", "close", 4, "ngFor", "ngForOf"], ["class", "mainSection", 4, "ngIf"], [4, "ngIf"], [3, "type", "close"], [1, "mainSection"], ["id", "tipoS"], [2, "font-size", "1.5em"], [1, "tipoStoria"], [1, "card"], ["type", "radio", "name", "tipologiaGruppo", "id", "Individuale", "value", "individuale", 3, "ngModel", "ngModelChange"], ["for", "Individuale", 1, "fa", "fa-code"], ["id", "icon-tipos", "aria-hidden", "false", "aria-label", "person icon", 1, "material-icons"], ["type", "radio", "name", "tipologiaGruppo", "id", "Gruppo", "value", "gruppo", 3, "ngModel", "ngModelChange", "click"], ["for", "Gruppo", 1, "fa", "fa-code"], ["id", "icon-tipos", "aria-hidden", "false", "aria-label", "group icon", 1, "material-icons"], ["type", "radio", "name", "tipologiaGruppo", "id", "Classe", "value", "classe", 3, "ngModel", "ngModelChange", "click"], ["for", "Classe", 1, "fa", "fa-code"], [1, "text"], [1, "container2"], ["appearance", "fill", "ngDefaultControl", "", "name", "nPartecipanti", 4, "ngIf"], ["id", "sec2", 4, "ngIf"], ["id", "sec3"], ["aria-label", "Select an option", 1, "container4", 3, "click"], ["type", "radio", "name", "fasciaEta", "id", "7-10", "value", "fasciaUno", 3, "ngModel", "ngModelChange"], ["for", "7-10"], ["type", "radio", "name", "fasciaEta", "id", "11-14", "value", "fasciaDue", 3, "ngModel", "ngModelChange"], ["for", "11-14"], ["type", "radio", "name", "fasciaEta", "id", "15-18", "value", "fasciaTre", 3, "ngModel", "ngModelChange"], ["for", "15-18"], ["class", "container5", 4, "ngIf"], [1, "container6"], [1, "container-riepilogo"], [1, "title"], ["class", "fixedLowRight", 3, "click", 4, "ngIf"], ["appearance", "fill", "ngDefaultControl", "", "name", "nPartecipanti"], [3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["id", "sec2"], [1, "partecipanti"], ["mat-stroked-button", "", "color", "primary", 3, "click", 4, "ngIf"], [1, "container3"], ["class", "card", 4, "ngFor", "ngForOf"], ["mat-stroked-button", "", "color", "primary", 3, "click"], [1, "heading"], [1, "nomeS-container"], ["id", "nomeSquadra"], [1, "button-container"], ["mat-mini-fab", "", "color", "warn", 3, "click", 4, "ngIf"], [1, "content"], [2, "font-weight", "bold"], [4, "ngFor", "ngForOf"], [1, "button-add-container"], ["mat-mini-fab", "", "color", "primary", 3, "click", 4, "ngIf"], [1, "button-rem-container"], ["mat-mini-fab", "", "color", "warn", 3, "click"], [1, "material-icons"], ["mat-mini-fab", "", "color", "primary", 3, "click"], [1, "container5"], ["aria-label", "Select an option", 4, "ngFor", "ngForOf"], ["aria-label", "Select an option"], ["class", "card", 4, "ngIf"], ["name", "traccia", "type", "radio", 3, "id", "value", "ngModel", "ngModelChange"], [3, "for"], ["id", "icon-tipos", 1, "material-icons"], [3, "src"], [3, "qrdata", "width", "errorCorrectionLevel", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], [3, "qrdata", "width", "errorCorrectionLevel"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "fixedLowRight", 3, "click"], ["mat-fab", "", "color", "warn", 1, "my-fab-button"], [1, "icon-tipoS"], [2, "font-family", "'Montserrat', sans-serif", "font-size", "2em", "color", "darkgray", "margin-top", "1em", "font-weight", "bold"], ["class", "container6", 4, "ngFor", "ngForOf"], [1, "title-container"], [1, "qrcode-container"]], template: function PlayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PlayerComponent_ngb_alert_0_Template, 2, 2, "ngb-alert", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PlayerComponent_section_1_Template, 68, 13, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PlayerComponent_section_2_Template, 2, 1, "section", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.alerts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.playClicked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.playClicked);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbAlert"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], angularx_qrcode__WEBPACK_IMPORTED_MODULE_10__["QRCodeComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"]], styles: ["@charset \"UTF-8\";\n.fixedLowRight[_ngcontent-%COMP%] {\n  right: 1rem;\n  bottom: 1rem;\n  position: fixed;\n}\n.card-qr[_ngcontent-%COMP%] {\n  align-content: center;\n  padding: 3px;\n}\n.mainSection[_ngcontent-%COMP%] {\n  background-image: url(/assets/logo5.png);\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  padding: 0.5rem;\n  height: 100%;\n  text-align: center;\n  word-wrap: break-word;\n  font-family: \"Montserrat\", sans-serif !important;\n}\n#tipoS[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n}\n#tipoS[_ngcontent-%COMP%]   .tipoStoria[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-wrap: wrap;\n}\n#tipoS[_ngcontent-%COMP%]   .tipoStoria[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: #ffffff93;\n  margin: 2vw;\n  float: left;\n  flex-flow: row wrap;\n  justify-content: space-around;\n  list-style: none;\n  cursor: pointer;\n}\n#tipoS[_ngcontent-%COMP%]   .tipoStoria[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  padding: 1.5em;\n  margin: 0 !important;\n}\n#tipoS[_ngcontent-%COMP%]   .tipoStoria[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n#tipoS[_ngcontent-%COMP%]   .tipoStoria[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] {\n  position: absolute;\n  clip: rect(1px, 1px, 1px, 1px);\n}\n#tipoS[_ngcontent-%COMP%]   .tipoStoria[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 200;\n  color: #3b3a99;\n}\n#tipoS[_ngcontent-%COMP%]   .tipoStoria[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin: 2rem;\n}\n#tipoS[_ngcontent-%COMP%]   .tipoStoria[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);\n  background-color: #14144dc7;\n}\n#tipoS[_ngcontent-%COMP%]   .tipoStoria[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   label[_ngcontent-%COMP%] {\n  color: #3b3a99;\n}\n#tipoS[_ngcontent-%COMP%]   .tipoStoria[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%] {\n  color: white;\n}\n#tipoS[_ngcontent-%COMP%]   .tipoStoria[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   h3[_ngcontent-%COMP%] {\n  color: white;\n}\n#tipoS[_ngcontent-%COMP%]   .tipoStoria[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   h5[_ngcontent-%COMP%] {\n  color: #3b3a99;\n}\n#tipoS[_ngcontent-%COMP%]   .tipoStoria[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: white;\n}\n#tipoS[_ngcontent-%COMP%]   .tipoStoria[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   h3[_ngcontent-%COMP%]:after {\n  width: 2rem;\n}\n#tipoS[_ngcontent-%COMP%]   .tipoStoria[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  display: block;\n  cursor: pointer;\n  transition: color 0.3s;\n  min-height: 14em;\n  min-width: 11em;\n  color: #5c5f66;\n}\n#tipoS[_ngcontent-%COMP%]   .tipoStoria[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before, #tipoS[_ngcontent-%COMP%]   .tipoStoria[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:after {\n  position: static;\n}\n#tipoS[_ngcontent-%COMP%]   .tipoStoria[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);\n  background-color: #14144dc7;\n  min-height: 15em;\n  min-width: 12em;\n  border-radius: 5px;\n}\n#tipoS[_ngcontent-%COMP%]   .tipoStoria[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: white;\n}\n#tipoS[_ngcontent-%COMP%]   .tipoStoria[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n  letter-spacing: 0.1em;\n}\n#tipoS[_ngcontent-%COMP%]   .tipoStoria[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-weight: 100;\n  transition: color 0.3s;\n}\n#tipoS[_ngcontent-%COMP%]   .tipoStoria[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: relative;\n  color: #3b3a99;\n  left: 50%;\n  display: block;\n  transition: width 0.3s;\n}\n#tipoS[_ngcontent-%COMP%]   .tipoStoria[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #5c5f66;\n  text-align: left;\n  line-height: 26px;\n  transition: color 0.3s;\n}\n#tipoS[_ngcontent-%COMP%]   .tipoStoria[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: relative;\n  color: #3b3a99;\n  left: 50%;\n  top: 40px;\n  display: block;\n  width: 40px;\n  height: 1.4px;\n  transition: width 0.3s;\n}\n.container2[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n  flex-wrap: nowrap;\n  padding: 30px;\n}\n.container2[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #3b3a99;\n}\n.container2[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #3b3a99;\n}\n.container2[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: -webkit-max-content;\n  width: max-content;\n  border-radius: 4px;\n}\n.container2[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%] {\n  padding: 5px;\n  color: #5c5f66;\n}\n.container2[_ngcontent-%COMP%]   mat-option[_ngcontent-%COMP%] {\n  color: #3b3a99;\n}\n\n#sec2[_ngcontent-%COMP%]   .partecipanti[_ngcontent-%COMP%] {\n  position: relative;\n  left: 30%;\n  width: 40%;\n  border-radius: 4px;\n  min-height: 4em;\n  margin-bottom: 0.5em;\n  background-color: rgba(212, 200, 200, 0.685);\n}\n#sec2[_ngcontent-%COMP%]   .partecipanti[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding-top: 1em;\n}\n#sec2[_ngcontent-%COMP%]   .container3[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: flex-start;\n  flex-wrap: wrap;\n}\n#sec2[_ngcontent-%COMP%]   .container3[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\n  display: flex;\n  float: right;\n  margin: 5px;\n  justify-content: center;\n  align-content: center;\n  align-items: stretch;\n}\n#sec2[_ngcontent-%COMP%]   .container3[_ngcontent-%COMP%]   .deleteSq[_ngcontent-%COMP%] {\n  align-content: center;\n  margin: 0.3em;\n}\n#sec2[_ngcontent-%COMP%]   .container3[_ngcontent-%COMP%]   .button-add-container[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 5px;\n  justify-content: center;\n  float: left;\n}\n#sec2[_ngcontent-%COMP%]   .container3[_ngcontent-%COMP%]   .button-rem-container[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 5px;\n  justify-content: center;\n  float: right;\n}\n#sec2[_ngcontent-%COMP%]   .container3[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #5c5f66;\n  text-indent: 1em;\n  transition: color 0.3s;\n}\n#sec2[_ngcontent-%COMP%]   .container3[_ngcontent-%COMP%]   .nomeS-container[_ngcontent-%COMP%] {\n  display: flex;\n  float: left;\n}\n#sec2[_ngcontent-%COMP%]   .container3[_ngcontent-%COMP%]   #nomeSquadra[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  color: white;\n  margin-top: 0.5em;\n}\n#sec2[_ngcontent-%COMP%]   .container3[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 23%;\n  margin: 0.5em;\n  min-width: -webkit-max-content;\n  min-width: max-content;\n  min-height: -webkit-max-content;\n  min-height: max-content;\n  background-color: #ffffff;\n  border-radius: 10px;\n  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24);\n}\n#sec2[_ngcontent-%COMP%]   .container3[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  height: 3rem;\n  background-color: #2a34bbe5;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n#sec2[_ngcontent-%COMP%]   .container3[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 1.3vw;\n  justify-content: center;\n}\n#sec2[_ngcontent-%COMP%]   .container3[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n#sec2[_ngcontent-%COMP%]   .container3[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\n\n#sec3[_ngcontent-%COMP%]   .container4[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-wrap: wrap;\n}\n#sec3[_ngcontent-%COMP%]   .container4[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] {\n  position: absolute;\n  clip: rect(1px, 1px, 1px, 1px);\n}\n#sec3[_ngcontent-%COMP%]   .container4[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background-color: #ffffff93;\n  margin: 2vw;\n  display: flex;\n  float: left;\n  flex-flow: row wrap;\n  justify-content: space-around;\n  list-style: none;\n  cursor: pointer;\n  border-radius: 50%;\n}\n#sec3[_ngcontent-%COMP%]   .container4[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  padding: 1em;\n  margin: 0 !important;\n  border-radius: 50%;\n  align-content: center;\n  align-items: center;\n  text-align: center;\n}\n#sec3[_ngcontent-%COMP%]   .container4[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] {\n  position: absolute;\n  clip: rect(1px, 1px, 1px, 1px);\n}\n#sec3[_ngcontent-%COMP%]   .container4[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);\n  background-color: #14144dc7;\n}\n#sec3[_ngcontent-%COMP%]   .container4[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   label[_ngcontent-%COMP%] {\n  color: #3b3a99;\n}\n#sec3[_ngcontent-%COMP%]   .container4[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%] {\n  color: white;\n}\n#sec3[_ngcontent-%COMP%]   .container4[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  display: block;\n  cursor: pointer;\n  transition: color 0.3s;\n  color: #5c5f66;\n  padding-top: 3.6em;\n  min-height: 8em;\n  min-width: 8em;\n}\n#sec3[_ngcontent-%COMP%]   .container4[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before, #sec3[_ngcontent-%COMP%]   .container4[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:after {\n  position: static;\n}\n#sec3[_ngcontent-%COMP%]   .container4[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);\n  background-color: #14144dc7;\n  padding-top: 4em;\n  min-height: 9em;\n  min-width: 9em;\n}\n#sec3[_ngcontent-%COMP%]   .container4[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n  letter-spacing: 0.1em;\n}\n#sec3[_ngcontent-%COMP%]   .container5[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n#sec3[_ngcontent-%COMP%]   .container5[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] {\n  position: absolute;\n  clip: rect(1px, 1px, 1px, 1px);\n}\n#sec3[_ngcontent-%COMP%]   .container5[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background-color: #ffffff93;\n  margin: 10px;\n  display: flex;\n  flex-flow: row wrap;\n  list-style: none;\n}\n#sec3[_ngcontent-%COMP%]   .container5[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin: 2rem;\n}\n#sec3[_ngcontent-%COMP%]   .container5[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 rgba(0, 0, 0, 0.24), 0 rgba(0, 0, 0, 0.19);\n}\n#sec3[_ngcontent-%COMP%]   .container5[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   label[_ngcontent-%COMP%] {\n  color: #3b3a99;\n}\n#sec3[_ngcontent-%COMP%]   .container5[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%] {\n  color: #3b3a99;\n}\n#sec3[_ngcontent-%COMP%]   .container5[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #3b3a99;\n}\n#sec3[_ngcontent-%COMP%]   .container5[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  display: block;\n  cursor: pointer;\n  transition: color 0.3s;\n  color: #5c5f66;\n  padding: 1.5em 2em;\n  min-width: 10rem;\n  min-height: 8rem;\n  margin: 0 !important;\n}\n#sec3[_ngcontent-%COMP%]   .container5[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before, #sec3[_ngcontent-%COMP%]   .container5[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:after {\n  position: static;\n}\n#sec3[_ngcontent-%COMP%]   .container5[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n  border-style: #3b3a99;\n  color: #3b3a99;\n  border: solid 3px;\n  border-radius: 5px;\n  padding: 1.5em 2em;\n  min-width: 12rem;\n  min-height: 10rem;\n  margin: 0 !important;\n}\n#sec3[_ngcontent-%COMP%]   .container5[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #3b3a99;\n  font-weight: bold;\n  letter-spacing: 0.1em;\n}\n#sec3[_ngcontent-%COMP%]   .container5[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #3b3a99;\n}\n#sec3[_ngcontent-%COMP%]   .container5[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: bold;\n  color: #5c5f66;\n  text-align: left;\n  text-indent: 1em;\n  line-height: 26px;\n  transition: color 0.3s;\n}\n.container6[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif !important;\n  display: flex;\n  flex-wrap: wrap;\n  margin-left: 20%;\n  margin-top: 5em;\n  margin-bottom: 5em;\n  padding-top: 1em;\n  padding-bottom: 1em;\n  width: 60%;\n  justify-content: center;\n  box-shadow: 1px 0px 2px 1px rgba(16, 18, 44, 0.336), 0px 0px 11px 7px rgba(13, 10, 34, 0.315);\n  background-color: rgba(212, 200, 200, 0.685);\n  border-radius: 5px;\n}\n.container6[_ngcontent-%COMP%]   .container-riepilogo[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n.container6[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  color: #5c5f66;\n  font-weight: bold;\n  margin: 0.5em;\n}\n.container6[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%] {\n  width: 40%;\n  float: left;\n}\n.container6[_ngcontent-%COMP%]   .qrcode-container[_ngcontent-%COMP%] {\n  width: 60%;\n  float: right;\n}\n@media (min-width: 991px) {\n  #icon-tipos[_ngcontent-%COMP%] {\n    transform: scale(5);\n  }\n\n  .my-fab-button[_ngcontent-%COMP%] {\n    width: 100px;\n    height: 100px;\n    float: right;\n    margin-right: 3em;\n  }\n}\n\n@media (min-width: 768px) and (max-width: 991px) {\n  #icon-tipos[_ngcontent-%COMP%] {\n    transform: scale(4);\n  }\n\n  .my-fab-button[_ngcontent-%COMP%] {\n    width: 80px;\n    height: 80px;\n    float: right;\n    margin-right: 3em;\n  }\n}\n\n@media (max-width: 768px) {\n  #icon-tipos[_ngcontent-%COMP%] {\n    transform: scale(2.5);\n  }\n\n  .my-fab-button[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 60px;\n    float: right;\n    margin-right: 3em;\n  }\n}\n\n@media (max-width: 500px) {\n  #icon-tipos[_ngcontent-%COMP%] {\n    transform: scale(2);\n  }\n\n  .my-fab-button[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 60px;\n    float: right;\n    margin-right: 3em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wbGF5ZXIvcGxheWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUloQjtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUZGO0FBS0E7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUFGRjtBQUtBO0VBQ0Usd0NBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxnREFBQTtBQUZGO0FBS0E7RUFDRSxxQ0FBQTtBQUZGO0FBR0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQURKO0FBR0k7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFETjtBQUdNO0VBQ0UsY0FBQTtFQUNBLG9CQUFBO0FBRFI7QUFFUTtFQUNFLHVCQUFBO0FBQVY7QUFHTTtFQUNFLGtCQUFBO0VBQ0EsOEJBQUE7QUFEUjtBQUlNO0VBQ0UsZ0JBQUE7RUFDQSxjQTNEUTtBQXlEaEI7QUFLTTtFQUNFLFlBQUE7QUFIUjtBQUtNO0VBQ0UsZ0ZBQUE7RUFFQSwyQkFBQTtBQUpSO0FBTU07RUFDRSxjQXZFUTtBQW1FaEI7QUFNTTtFQUNFLFlBQUE7QUFKUjtBQU1NO0VBQ0UsWUFBQTtBQUpSO0FBTU07RUFDRSxjQWhGUTtBQTRFaEI7QUFNTTtFQUNFLFlBQUE7QUFKUjtBQU1NO0VBQ0UsV0FBQTtBQUpSO0FBT007RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FoR0s7QUEyRmI7QUFNUTtFQUVFLGdCQUFBO0FBTFY7QUFTTTtFQUNFLGdGQUFBO0VBRUEsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQVJSO0FBU1E7RUFDRSxZQUFBO0FBUFY7QUFTUTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBUFY7QUFXTTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQVRSO0FBVVE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQTlITTtFQStITixTQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FBUlY7QUFXTTtFQUNFLGNBdElLO0VBdUlMLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQVRSO0FBVVE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQTVJTTtFQTZJTixTQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBUlY7QUFlQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUFaRjtBQWNFO0VBQ0UseUJBbEtZO0FBc0poQjtBQWFJO0VBQ0UsY0FwS1U7QUF5SmhCO0FBZUU7RUFDRSwwQkFBQTtFQUFBLGtCQUFBO0VBQ0Esa0JBQUE7QUFiSjtBQWVFO0VBQ0UsWUFBQTtFQUNBLGNBL0tTO0FBa0tiO0FBZUU7RUFDRSxjQWpMWTtBQW9LaEI7QUFpQkEsYUFBQTtBQUdFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsNENBOUxTO0FBOEtiO0FBaUJJO0VBQ0UsZ0JBQUE7QUFmTjtBQWtCRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBaEJKO0FBa0JJO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0FBaEJOO0FBa0JJO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0FBaEJOO0FBa0JJO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUFoQk47QUFrQkk7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQWhCTjtBQW1CSTtFQUNFLGNBdE9PO0VBdU9QLGdCQUFBO0VBQ0Esc0JBQUE7QUFqQk47QUFtQkk7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQWpCTjtBQW1CSTtFQUNFLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBakJOO0FBb0JJO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQUEsc0JBQUE7RUFDQSwrQkFBQTtFQUFBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZDQUFBO0FBbEJOO0FBcUJJO0VBQ0UsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FBbkJOO0FBc0JJO0VBQ0UsY0FBQTtFQUNBLHVCQUFBO0FBcEJOO0FBc0JJO0VBQ0UscUJBQUE7QUFwQk47QUFzQkk7RUFDRSxnQkFBQTtBQXBCTjtBQXVCRSxlQUFBO0FBQ0Ysb0NBQUE7QUFFRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBckJKO0FBdUJJO0VBQ0Usa0JBQUE7RUFDQSw4QkFBQTtBQXJCTjtBQXdCSTtFQUNFLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBdEJOO0FBd0JNO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUF0QlI7QUF3Qk07RUFDRSxrQkFBQTtFQUNBLDhCQUFBO0FBdEJSO0FBeUJNO0VBQ0UsZ0ZBQUE7RUFFQSwyQkFBQTtBQXhCUjtBQTBCTTtFQUNFLGNBOVRRO0FBc1NoQjtBQTBCTTtFQUNFLFlBQUE7QUF4QlI7QUEyQk07RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0F6VUs7RUEwVUwsa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQXpCUjtBQTBCUTtFQUVFLGdCQUFBO0FBekJWO0FBNkJNO0VBQ0UsZ0ZBQUE7RUFFQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUE1QlI7QUE2QlE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQTNCVjtBQWlDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBL0JKO0FBaUNJO0VBQ0Usa0JBQUE7RUFDQSw4QkFBQTtBQS9CTjtBQWlDSTtFQUNFLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBL0JOO0FBaUNNO0VBQ0UsWUFBQTtBQS9CUjtBQWlDTTtFQUNFLHdEQUFBO0FBL0JSO0FBa0NNO0VBQ0UsY0E1WFE7QUE0VmhCO0FBa0NNO0VBQ0UsY0EvWFE7QUErVmhCO0FBa0NNO0VBQ0UsY0FsWVE7QUFrV2hCO0FBbUNNO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGNBMVlLO0VBMllMLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBakNSO0FBa0NRO0VBRUUsZ0JBQUE7QUFqQ1Y7QUFvQ007RUFDRSxxQkFwWlE7RUFxWlIsY0FyWlE7RUFzWlIsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBbENSO0FBb0NRO0VBQ0UsY0E5Wk07RUErWk4saUJBQUE7RUFDQSxxQkFBQTtBQWxDVjtBQW9DUTtFQUNFLGNBbmFNO0FBaVloQjtBQXFDTTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQTFhSztFQTJhTCxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQW5DUjtBQXdDQTtFQUNFLGdEQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSw2RkFBQTtFQUVBLDRDQTliVztFQStiWCxrQkFBQTtBQXRDRjtBQXVDRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFyQ0o7QUF1Q0U7RUFDRSwwQkFBQTtFQUNBLGNBemNTO0VBMGNULGlCQUFBO0VBQ0EsYUFBQTtBQXJDSjtBQXVDRTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FBckNKO0FBdUNFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUFyQ0o7QUF5Q0E7RUFDRTtJQUNFLG1CQUFBO0VBdENGOztFQXdDQTtJQUNFLFlBQUE7SUFDQSxhQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0VBckNGO0FBQ0Y7QUFzQ0UsaUJBQUE7QUFFRjtFQUNFO0lBQ0UsbUJBQUE7RUFyQ0Y7O0VBdUNBO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0EsaUJBQUE7RUFwQ0Y7QUFDRjtBQXFDRSxnQkFBQTtBQUVGO0VBQ0U7SUFDRSxxQkFBQTtFQXBDRjs7RUFzQ0E7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtFQW5DRjtBQUNGO0FBb0NFLHdCQUFBO0FBRUY7RUFDRTtJQUNFLG1CQUFBO0VBbkNGOztFQXFDQTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0VBbENGO0FBQ0Y7QUFtQ0UsbUJBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BsYXllci9wbGF5ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uZml4ZWRMb3dSaWdodCB7XG4gIHJpZ2h0OiAxcmVtO1xuICBib3R0b206IDFyZW07XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuLmNhcmQtcXIge1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDNweDtcbn1cblxuLm1haW5TZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvbG9nbzUucG5nKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xufVxuXG4jdGlwb1Mge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG59XG4jdGlwb1MgLnRpcG9TdG9yaWEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuI3RpcG9TIC50aXBvU3RvcmlhIC5jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjkzO1xuICBtYXJnaW46IDJ2dztcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4jdGlwb1MgLnRpcG9TdG9yaWEgLmNhcmQgbGFiZWwge1xuICBwYWRkaW5nOiAxLjVlbTtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG4jdGlwb1MgLnRpcG9TdG9yaWEgLmNhcmQgbGFiZWwgLnRleHQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiN0aXBvUyAudGlwb1N0b3JpYSAuY2FyZCBpbnB1dFt0eXBlPXJhZGlvXSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY2xpcDogcmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpO1xufVxuI3RpcG9TIC50aXBvU3RvcmlhIC5jYXJkIHAge1xuICBmb250LXdlaWdodDogMjAwO1xuICBjb2xvcjogIzNiM2E5OTtcbn1cbiN0aXBvUyAudGlwb1N0b3JpYSAuY2FyZCBpIHtcbiAgbWFyZ2luOiAycmVtO1xufVxuI3RpcG9TIC50aXBvU3RvcmlhIC5jYXJkOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAxMnB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjQpLCAwIDE3cHggNTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDE0NGRjNztcbn1cbiN0aXBvUyAudGlwb1N0b3JpYSAuY2FyZDpob3ZlciBsYWJlbCB7XG4gIGNvbG9yOiAjM2IzYTk5O1xufVxuI3RpcG9TIC50aXBvU3RvcmlhIC5jYXJkOmhvdmVyIHAge1xuICBjb2xvcjogd2hpdGU7XG59XG4jdGlwb1MgLnRpcG9TdG9yaWEgLmNhcmQ6aG92ZXIgaDMge1xuICBjb2xvcjogd2hpdGU7XG59XG4jdGlwb1MgLnRpcG9TdG9yaWEgLmNhcmQ6aG92ZXIgaDUge1xuICBjb2xvcjogIzNiM2E5OTtcbn1cbiN0aXBvUyAudGlwb1N0b3JpYSAuY2FyZDpob3ZlciBpIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuI3RpcG9TIC50aXBvU3RvcmlhIC5jYXJkOmhvdmVyIGgzOmFmdGVyIHtcbiAgd2lkdGg6IDJyZW07XG59XG4jdGlwb1MgLnRpcG9TdG9yaWEgLmNhcmQgaW5wdXRbdHlwZT1yYWRpb10gKyBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XG4gIG1pbi1oZWlnaHQ6IDE0ZW07XG4gIG1pbi13aWR0aDogMTFlbTtcbiAgY29sb3I6ICM1YzVmNjY7XG59XG4jdGlwb1MgLnRpcG9TdG9yaWEgLmNhcmQgaW5wdXRbdHlwZT1yYWRpb10gKyBsYWJlbDpiZWZvcmUsICN0aXBvUyAudGlwb1N0b3JpYSAuY2FyZCBpbnB1dFt0eXBlPXJhZGlvXSArIGxhYmVsOmFmdGVyIHtcbiAgcG9zaXRpb246IHN0YXRpYztcbn1cbiN0aXBvUyAudGlwb1N0b3JpYSAuY2FyZCBpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkICsgbGFiZWwge1xuICBib3gtc2hhZG93OiAwIDEycHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4yNCksIDAgMTdweCA1MHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0MTQ0ZGM3O1xuICBtaW4taGVpZ2h0OiAxNWVtO1xuICBtaW4td2lkdGg6IDEyZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbiN0aXBvUyAudGlwb1N0b3JpYSAuY2FyZCBpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkICsgbGFiZWwgaSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiN0aXBvUyAudGlwb1N0b3JpYSAuY2FyZCBpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkICsgbGFiZWwgcCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbn1cbiN0aXBvUyAudGlwb1N0b3JpYSAuY2FyZCBoMyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcbn1cbiN0aXBvUyAudGlwb1N0b3JpYSAuY2FyZCBoMzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICMzYjNhOTk7XG4gIGxlZnQ6IDUwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuM3M7XG59XG4jdGlwb1MgLnRpcG9TdG9yaWEgLmNhcmQgcCB7XG4gIGNvbG9yOiAjNWM1ZjY2O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcbn1cbiN0aXBvUyAudGlwb1N0b3JpYSAuY2FyZCBwOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogIzNiM2E5OTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDQwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiAxLjRweDtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4zcztcbn1cblxuLmNvbnRhaW5lcjIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBwYWRkaW5nOiAzMHB4O1xufVxuLmNvbnRhaW5lcjIgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiM2E5OTtcbn1cbi5jb250YWluZXIyIGJ1dHRvbiBoMyB7XG4gIGNvbG9yOiAjM2IzYTk5O1xufVxuLmNvbnRhaW5lcjIgbWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5jb250YWluZXIyIG1hdC1sYWJlbCB7XG4gIHBhZGRpbmc6IDVweDtcbiAgY29sb3I6ICM1YzVmNjY7XG59XG4uY29udGFpbmVyMiBtYXQtb3B0aW9uIHtcbiAgY29sb3I6ICMzYjNhOTk7XG59XG5cbi8qIGZpbmUgc2VjICovXG4jc2VjMiAucGFydGVjaXBhbnRpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAzMCU7XG4gIHdpZHRoOiA0MCU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWluLWhlaWdodDogNGVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTIsIDIwMCwgMjAwLCAwLjY4NSk7XG59XG4jc2VjMiAucGFydGVjaXBhbnRpIHAge1xuICBwYWRkaW5nLXRvcDogMWVtO1xufVxuI3NlYzIgLmNvbnRhaW5lcjMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbiNzZWMyIC5jb250YWluZXIzIC5idXR0b24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW46IDVweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG4jc2VjMiAuY29udGFpbmVyMyAuZGVsZXRlU3Ege1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMC4zZW07XG59XG4jc2VjMiAuY29udGFpbmVyMyAuYnV0dG9uLWFkZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDVweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsb2F0OiBsZWZ0O1xufVxuI3NlYzIgLmNvbnRhaW5lcjMgLmJ1dHRvbi1yZW0tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiA1cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbG9hdDogcmlnaHQ7XG59XG4jc2VjMiAuY29udGFpbmVyMyBwIHtcbiAgY29sb3I6ICM1YzVmNjY7XG4gIHRleHQtaW5kZW50OiAxZW07XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XG59XG4jc2VjMiAuY29udGFpbmVyMyAubm9tZVMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4jc2VjMiAuY29udGFpbmVyMyAjbm9tZVNxdWFkcmEge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAwLjVlbTtcbn1cbiNzZWMyIC5jb250YWluZXIzIC5jYXJkIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMjMlO1xuICBtYXJnaW46IDAuNWVtO1xuICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xuICBtaW4taGVpZ2h0OiBtYXgtY29udGVudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCAxMnB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xufVxuI3NlYzIgLmNvbnRhaW5lcjMgLmNhcmQgLmhlYWRpbmcge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGhlaWdodDogM3JlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhMzRiYmU1O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbn1cbiNzZWMyIC5jb250YWluZXIzIC5jYXJkIC5jb250ZW50IHtcbiAgcGFkZGluZzogMS4zdnc7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuI3NlYzIgLmNvbnRhaW5lcjMgdWwge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG4jc2VjMiAuY29udGFpbmVyMyBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi8qIGZpbmUgc2VjIDIgKi9cbi8qIENPTlRBSU5FUiA0IGJsb2NjbyBzZWxlemlvbmUgZXTDoCovXG4jc2VjMyAuY29udGFpbmVyNCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4jc2VjMyAuY29udGFpbmVyNCBpbnB1dFt0eXBlPXJhZGlvXSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY2xpcDogcmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpO1xufVxuI3NlYzMgLmNvbnRhaW5lcjQgLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOTM7XG4gIG1hcmdpbjogMnZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbG9hdDogbGVmdDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuI3NlYzMgLmNvbnRhaW5lcjQgLmNhcmQgbGFiZWwge1xuICBwYWRkaW5nOiAxZW07XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI3NlYzMgLmNvbnRhaW5lcjQgLmNhcmQgaW5wdXRbdHlwZT1yYWRpb10ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNsaXA6IHJlY3QoMXB4LCAxcHgsIDFweCwgMXB4KTtcbn1cbiNzZWMzIC5jb250YWluZXI0IC5jYXJkOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAxMnB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjQpLCAwIDE3cHggNTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDE0NGRjNztcbn1cbiNzZWMzIC5jb250YWluZXI0IC5jYXJkOmhvdmVyIGxhYmVsIHtcbiAgY29sb3I6ICMzYjNhOTk7XG59XG4jc2VjMyAuY29udGFpbmVyNCAuY2FyZDpob3ZlciBwIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuI3NlYzMgLmNvbnRhaW5lcjQgLmNhcmQgaW5wdXRbdHlwZT1yYWRpb10gKyBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XG4gIGNvbG9yOiAjNWM1ZjY2O1xuICBwYWRkaW5nLXRvcDogMy42ZW07XG4gIG1pbi1oZWlnaHQ6IDhlbTtcbiAgbWluLXdpZHRoOiA4ZW07XG59XG4jc2VjMyAuY29udGFpbmVyNCAuY2FyZCBpbnB1dFt0eXBlPXJhZGlvXSArIGxhYmVsOmJlZm9yZSwgI3NlYzMgLmNvbnRhaW5lcjQgLmNhcmQgaW5wdXRbdHlwZT1yYWRpb10gKyBsYWJlbDphZnRlciB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG59XG4jc2VjMyAuY29udGFpbmVyNCAuY2FyZCBpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkICsgbGFiZWwge1xuICBib3gtc2hhZG93OiAwIDEycHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4yNCksIDAgMTdweCA1MHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0MTQ0ZGM3O1xuICBwYWRkaW5nLXRvcDogNGVtO1xuICBtaW4taGVpZ2h0OiA5ZW07XG4gIG1pbi13aWR0aDogOWVtO1xufVxuI3NlYzMgLmNvbnRhaW5lcjQgLmNhcmQgaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCArIGxhYmVsIHAge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG59XG4jc2VjMyAuY29udGFpbmVyNSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4jc2VjMyAuY29udGFpbmVyNSBpbnB1dFt0eXBlPXJhZGlvXSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY2xpcDogcmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpO1xufVxuI3NlYzMgLmNvbnRhaW5lcjUgLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOTM7XG4gIG1hcmdpbjogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbiNzZWMzIC5jb250YWluZXI1IC5jYXJkIGkge1xuICBtYXJnaW46IDJyZW07XG59XG4jc2VjMyAuY29udGFpbmVyNSAuY2FyZDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgcmdiYSgwLCAwLCAwLCAwLjI0KSwgMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuI3NlYzMgLmNvbnRhaW5lcjUgLmNhcmQ6aG92ZXIgbGFiZWwge1xuICBjb2xvcjogIzNiM2E5OTtcbn1cbiNzZWMzIC5jb250YWluZXI1IC5jYXJkOmhvdmVyIHAge1xuICBjb2xvcjogIzNiM2E5OTtcbn1cbiNzZWMzIC5jb250YWluZXI1IC5jYXJkOmhvdmVyIGkge1xuICBjb2xvcjogIzNiM2E5OTtcbn1cbiNzZWMzIC5jb250YWluZXI1IC5jYXJkIGlucHV0W3R5cGU9cmFkaW9dICsgbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xuICBjb2xvcjogIzVjNWY2NjtcbiAgcGFkZGluZzogMS41ZW0gMmVtO1xuICBtaW4td2lkdGg6IDEwcmVtO1xuICBtaW4taGVpZ2h0OiA4cmVtO1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cbiNzZWMzIC5jb250YWluZXI1IC5jYXJkIGlucHV0W3R5cGU9cmFkaW9dICsgbGFiZWw6YmVmb3JlLCAjc2VjMyAuY29udGFpbmVyNSAuY2FyZCBpbnB1dFt0eXBlPXJhZGlvXSArIGxhYmVsOmFmdGVyIHtcbiAgcG9zaXRpb246IHN0YXRpYztcbn1cbiNzZWMzIC5jb250YWluZXI1IC5jYXJkIGlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQgKyBsYWJlbCB7XG4gIGJvcmRlci1zdHlsZTogIzNiM2E5OTtcbiAgY29sb3I6ICMzYjNhOTk7XG4gIGJvcmRlcjogc29saWQgM3B4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDEuNWVtIDJlbTtcbiAgbWluLXdpZHRoOiAxMnJlbTtcbiAgbWluLWhlaWdodDogMTByZW07XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuI3NlYzMgLmNvbnRhaW5lcjUgLmNhcmQgaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCArIGxhYmVsIHAge1xuICBjb2xvcjogIzNiM2E5OTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbn1cbiNzZWMzIC5jb250YWluZXI1IC5jYXJkIGlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQgKyBsYWJlbCBpIHtcbiAgY29sb3I6ICMzYjNhOTk7XG59XG4jc2VjMyAuY29udGFpbmVyNSAuY2FyZCBwIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjNWM1ZjY2O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB0ZXh0LWluZGVudDogMWVtO1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcbn1cblxuLmNvbnRhaW5lcjYge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tbGVmdDogMjAlO1xuICBtYXJnaW4tdG9wOiA1ZW07XG4gIG1hcmdpbi1ib3R0b206IDVlbTtcbiAgcGFkZGluZy10b3A6IDFlbTtcbiAgcGFkZGluZy1ib3R0b206IDFlbTtcbiAgd2lkdGg6IDYwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDFweCAwcHggMnB4IDFweCByZ2JhKDE2LCAxOCwgNDQsIDAuMzM2KSwgMHB4IDBweCAxMXB4IDdweCByZ2JhKDEzLCAxMCwgMzQsIDAuMzE1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTIsIDIwMCwgMjAwLCAwLjY4NSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5jb250YWluZXI2IC5jb250YWluZXItcmllcGlsb2dvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmNvbnRhaW5lcjYgLnRpdGxlIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGNvbG9yOiAjNWM1ZjY2O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwLjVlbTtcbn1cbi5jb250YWluZXI2IC50aXRsZS1jb250YWluZXIge1xuICB3aWR0aDogNDAlO1xuICBmbG9hdDogbGVmdDtcbn1cbi5jb250YWluZXI2IC5xcmNvZGUtY29udGFpbmVyIHtcbiAgd2lkdGg6IDYwJTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkxcHgpIHtcbiAgI2ljb24tdGlwb3Mge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoNSk7XG4gIH1cblxuICAubXktZmFiLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDogM2VtO1xuICB9XG59XG4vKiBmb3IgZGVza3RvcHMgKi9cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICNpY29uLXRpcG9zIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDQpO1xuICB9XG5cbiAgLm15LWZhYi1idXR0b24ge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAzZW07XG4gIH1cbn1cbi8qIGZvciBsYXB0b3BzICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgI2ljb24tdGlwb3Mge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMi41KTtcbiAgfVxuXG4gIC5teS1mYWItYnV0dG9uIHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDogM2VtO1xuICB9XG59XG4vKiBmb3Igc21hbGxlciB0YWJsZXRzICovXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgI2ljb24tdGlwb3Mge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMik7XG4gIH1cblxuICAubXktZmFiLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tcmlnaHQ6IDNlbTtcbiAgfVxufVxuLyogZm9yIGNlbGxwaG9uZXMgKi8iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-player',
                templateUrl: './player.component.html',
                styleUrls: ['./player.component.scss']
            }]
    }], function () { return [{ type: src_app_services_dummy_api_service__WEBPACK_IMPORTED_MODULE_1__["DummyApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "Q9fQ":
/*!*************************************************************!*\
  !*** ./src/app/components/dragndrop/dragndrop.component.ts ***!
  \*************************************************************/
/*! exports provided: DragndropComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragndropComponent", function() { return DragndropComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _visualizza_visualizza_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../visualizza/visualizza.component */ "C7BR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");








const _c0 = function (a0) { return { green: a0 }; };
function DragndropComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const k_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, k_r3 == item_r2.posizione));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.desc);
} }
function DragndropComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Bravissimo, hai ordinato correttamente gli elementi!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DragndropComponent_div_2_Template_i_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.avanzamentoStep(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "play_arrow");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hai completato il gioco in ", ctx_r1.steps, " mosse.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.hoProceduto);
} }
class DragndropComponent {
    constructor(visComp, ngZone) {
        this.visComp = visComp;
        this.ngZone = ngZone;
        this.order = [];
        this.steps = 0;
        this.isCompleted = false;
        this.hoProceduto = false;
        this.arrayNgFor = this.order;
    }
    //Metodo chiamato ogni volta che sposto una tessera (drop appunto significa rilascio)
    drop(event) {
        this.steps++;
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(this.arrayNgFor, event.previousIndex, event.currentIndex);
        this.isCompleted = this.verifyAccomplishment();
    }
    //Permette di accedere allo step successivo
    avanzamentoStep(idQ) {
        if (this.isCompleted) {
            this.hoProceduto = true;
            this.visComp.gestisciAvanzamento(undefined);
        }
    }
    //A ogni spostamenta di una tessera verifica che tutte siano nella posizione corretta
    //Una volta che l'array è stato ordinato restituisce complete=true, così permettendo l'avanzamento
    verifyAccomplishment() {
        let complete = true;
        for (let i = 0; i < this.arrayNgFor.length; i++) {
            if (this.arrayNgFor[i].posizione != i) {
                complete = false;
                break;
            }
        }
        return complete;
    }
    shuffle() {
        let myOrder = lodash__WEBPACK_IMPORTED_MODULE_2__["shuffle"](this.order);
        this.ngZone.run(() => {
            this.arrayNgFor = myOrder;
        });
        console.log(this.order);
    }
    ngOnInit() {
        this.shuffle();
    }
}
DragndropComponent.ɵfac = function DragndropComponent_Factory(t) { return new (t || DragndropComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_visualizza_visualizza_component__WEBPACK_IMPORTED_MODULE_3__["VisualizzaComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
DragndropComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DragndropComponent, selectors: [["app-dragndrop"]], inputs: { order: "order" }, decls: 3, vars: 2, consts: [["cdkDropList", "", 1, "example-list", 3, "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "successMessage", 4, "ngIf"], ["cdkDrag", "", 1, "example-box", 3, "ngClass"], [1, "successMessage"], ["mat-fab", "", "color", "primary", 1, "my-fab-button", 3, "disabled"], [1, "material-icons", 3, "click"]], template: function DragndropComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function DragndropComponent_Template_div_cdkDropListDropped_0_listener($event) { return ctx.drop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DragndropComponent_div_1_Template, 3, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DragndropComponent_div_2_Template, 8, 2, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.arrayNgFor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCompleted);
    } }, directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDrag"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Acme&family=Architects+Daughter&family=Caveat:wght@700&family=Courgette&family=Montserrat:wght@500&family=Patrick+Hand&family=Permanent+Marker&display=swap\");\n.example-list[_ngcontent-%COMP%] {\n  width: 100%;\n  width: -webkit-max-content;\n  width: max-content;\n  min-width: 30vw;\n  display: table-cell;\n  flex-direction: row;\n  border-radius: 4px;\n  overflow: hidden;\n  vertical-align: middle;\n}\n.example-box[_ngcontent-%COMP%] {\n  font-family: \"Acme, sans-serif\" !important;\n  padding: 1vh;\n  margin: 2vh;\n  border-right: solid 1px #ccc;\n  color: white;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  border-radius: 4px;\n  justify-content: center;\n  box-sizing: border-box;\n  cursor: move;\n  background: #14144daf;\n  flex-grow: 1;\n  flex-basis: 0;\n}\n.example-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Acme, sans-serif\";\n  margin: 0 !important;\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.successMessage[_ngcontent-%COMP%] {\n  margin: 3%;\n  border: 1px solid green;\n  border-radius: 10px;\n  color: #5c5f66;\n  background-color: lightgreen;\n  padding: 2%;\n}\n.successMessage[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.2), 0px 0px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 8px rgba(0, 0, 0, 0.12);\n}\n.green[_ngcontent-%COMP%] {\n  background-color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kcmFnbmRyb3AvZHJhZ25kcm9wLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLG1OQUFBO0FBT1I7RUFDRSxXQUFBO0VBQ0EsMEJBQUE7RUFBQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBTEY7QUFRQTtFQUNFLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkExQmM7RUEyQmQsWUFBQTtFQUNBLGFBQUE7QUFMRjtBQU1FO0VBQ0UsK0JBN0JPO0VBOEJQLG9CQUFBO0FBSko7QUFRQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxSEFBQTtBQUxGO0FBU0E7RUFDRSxVQUFBO0FBTkY7QUFTQTtFQUNFLHNEQUFBO0FBTkY7QUFTQTtFQUNFLFlBQUE7QUFORjtBQVNBO0VBQ0Usc0RBQUE7QUFORjtBQVFBO0VBQ0UsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQWhFVztFQWlFWCw0QkFBQTtFQUNBLFdBQUE7QUFMRjtBQU1FO0VBQ0Usd0hBQUE7QUFKSjtBQVNBO0VBQ0UsdUJBQUE7QUFORiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZHJhZ25kcm9wL2RyYWduZHJvcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BY21lJmZhbWlseT1BcmNoaXRlY3RzK0RhdWdodGVyJmZhbWlseT1DYXZlYXQ6d2dodEA3MDAmZmFtaWx5PUNvdXJnZXR0ZSZmYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDUwMCZmYW1pbHk9UGF0cmljaytIYW5kJmZhbWlseT1QZXJtYW5lbnQrTWFya2VyJmRpc3BsYXk9c3dhcFwiKTtcclxuXHJcbiRmb250LWNvbG9yOiAjNWM1ZjY2O1xyXG4kcHJpbWFyeS1jb2xvcjogIzNiM2E5OTtcclxuJGJhY2tncm91bmQ6IHJnYmEoMjEyLCAyMDAsIDIwMCwgMC42ODUpO1xyXG4kYmx1QmFja2dyb3VuZDogIzE0MTQ0ZGFmO1xyXG4kZm9udEFjbWU6IFwiQWNtZSwgc2Fucy1zZXJpZlwiO1xyXG4uZXhhbXBsZS1saXN0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgbWluLXdpZHRoOiAzMHZ3O1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1ib3gge1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udEFjbWUgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAxdmg7XHJcbiAgbWFyZ2luOiAydmg7XHJcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggI2NjYztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4IDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGN1cnNvcjogbW92ZTtcclxuICBiYWNrZ3JvdW5kOiAkYmx1QmFja2dyb3VuZDtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgZmxleC1iYXNpczogMDtcclxuICBoMyB7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnRBY21lO1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uY2RrLWRyYWctcHJldmlldyB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG5cclxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbn1cclxuXHJcbi5leGFtcGxlLWJveDpsYXN0LWNoaWxkIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWxpc3QuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuZXhhbXBsZS1ib3g6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxufVxyXG4uc3VjY2Vzc01lc3NhZ2Uge1xyXG4gIG1hcmdpbjogMyU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBjb2xvcjogJGZvbnQtY29sb3I7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcclxuICBwYWRkaW5nOiAyJTtcclxuICBidXR0b24ge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA5cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAgICAgMHB4IDBweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggOHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gIH1cclxufVxyXG5cclxuLmdyZWVuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DragndropComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dragndrop',
                templateUrl: './dragndrop.component.html',
                styleUrls: ['./dragndrop.component.scss']
            }]
    }], function () { return [{ type: _visualizza_visualizza_component__WEBPACK_IMPORTED_MODULE_3__["VisualizzaComponent"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { order: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['order']
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/auth/auth.service */ "jC6o");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor(authService) {
        this.authService = authService;
        this.title = 'Project';
    }
    ngOnInit() {
        this.authService.autoAuthUser();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_components_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["main[_ngcontent-%COMP%]{\r\n\r\n  text-align-last: center;\r\n  font-size: 1rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW57XHJcblxyXG4gIHRleHQtYWxpZ24tbGFzdDogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _components_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var angular_file_uploader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-file-uploader */ "wn2B");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "QJFE");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! angularx-qrcode */ "0hV+");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _components_autore_autore_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/autore/autore.component */ "KtP/");
/* harmony import */ var _components_visualizza_visualizza_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/visualizza/visualizza.component */ "C7BR");
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/home-page/home-page.component */ "atC9");
/* harmony import */ var _components_autore_modifica_modifica_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/autore/modifica/modifica.component */ "AS+B");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_player_player_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/player/player.component */ "L7MN");
/* harmony import */ var _components_autore_configura_configura_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/autore/configura/configura.component */ "ECse");
/* harmony import */ var _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/auth/login/login.component */ "HzFZ");
/* harmony import */ var _components_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/auth/signup/signup.component */ "G19n");
/* harmony import */ var _components_dragndrop_dragndrop_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/dragndrop/dragndrop.component */ "Q9fQ");
/* harmony import */ var _components_classifica_classifica_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/classifica/classifica.component */ "sWME");
/* harmony import */ var _components_puzzle_puzzle_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/puzzle/puzzle.component */ "1x60");
/* harmony import */ var _components_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/auth/auth-interceptor */ "i7ct");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/cdk/text-field */ "ihCf");





















































































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_30__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: _components_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_46__["AuthInterceptor"], multi: true },
        { provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MAT_FORM_FIELD_DEFAULT_OPTIONS"], useValue: { appearance: 'fill' } },
        { provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MAT_FORM_FIELD_DEFAULT_OPTIONS"], useValue: { floatLabel: 'always' } }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_29__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_33__["BrowserAnimationsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_0__["FontAwesomeModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__["NgbModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__["NgbAlertModule"],
            angularx_qrcode__WEBPACK_IMPORTED_MODULE_32__["QRCodeModule"],
            _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_28__["SweetAlert2Module"].forRoot(),
            _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__["MatProgressSpinnerModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__["MatSnackBarModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__["MatProgressBarModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__["MatSortModule"],
            angular_file_uploader__WEBPACK_IMPORTED_MODULE_6__["AngularFileUploaderModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_30__["AppComponent"],
        _components_autore_autore_component__WEBPACK_IMPORTED_MODULE_34__["AutoreComponent"],
        _components_autore_autore_component__WEBPACK_IMPORTED_MODULE_34__["UploadDialog"],
        _components_visualizza_visualizza_component__WEBPACK_IMPORTED_MODULE_35__["VisualizzaComponent"],
        _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_36__["HomePageComponent"],
        _components_autore_modifica_modifica_component__WEBPACK_IMPORTED_MODULE_37__["ModificaComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_38__["HeaderComponent"],
        _components_player_player_component__WEBPACK_IMPORTED_MODULE_39__["PlayerComponent"],
        _components_autore_configura_configura_component__WEBPACK_IMPORTED_MODULE_40__["ConfiguraComponent"],
        _components_autore_configura_configura_component__WEBPACK_IMPORTED_MODULE_40__["CancellazioneDialog"],
        _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_41__["LoginComponent"],
        _components_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_42__["SignupComponent"],
        _components_dragndrop_dragndrop_component__WEBPACK_IMPORTED_MODULE_43__["DragndropComponent"],
        _components_classifica_classifica_component__WEBPACK_IMPORTED_MODULE_44__["ClassificaComponent"],
        _components_puzzle_puzzle_component__WEBPACK_IMPORTED_MODULE_45__["PuzzleComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_29__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_33__["BrowserAnimationsModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_0__["FontAwesomeModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__["NgbModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__["NgbAlertModule"],
        angularx_qrcode__WEBPACK_IMPORTED_MODULE_32__["QRCodeModule"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_28__["SweetAlert2Module"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__["MatProgressSpinnerModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__["MatSnackBarModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__["MatProgressBarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__["MatSortModule"],
        angular_file_uploader__WEBPACK_IMPORTED_MODULE_6__["AngularFileUploaderModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_30__["AppComponent"],
                    _components_autore_autore_component__WEBPACK_IMPORTED_MODULE_34__["AutoreComponent"],
                    _components_autore_autore_component__WEBPACK_IMPORTED_MODULE_34__["UploadDialog"],
                    _components_visualizza_visualizza_component__WEBPACK_IMPORTED_MODULE_35__["VisualizzaComponent"],
                    _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_36__["HomePageComponent"],
                    _components_autore_modifica_modifica_component__WEBPACK_IMPORTED_MODULE_37__["ModificaComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_38__["HeaderComponent"],
                    _components_player_player_component__WEBPACK_IMPORTED_MODULE_39__["PlayerComponent"],
                    _components_autore_configura_configura_component__WEBPACK_IMPORTED_MODULE_40__["ConfiguraComponent"],
                    _components_autore_configura_configura_component__WEBPACK_IMPORTED_MODULE_40__["CancellazioneDialog"],
                    _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_41__["LoginComponent"],
                    _components_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_42__["SignupComponent"],
                    _components_dragndrop_dragndrop_component__WEBPACK_IMPORTED_MODULE_43__["DragndropComponent"],
                    _components_classifica_classifica_component__WEBPACK_IMPORTED_MODULE_44__["ClassificaComponent"],
                    _components_puzzle_puzzle_component__WEBPACK_IMPORTED_MODULE_45__["PuzzleComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_29__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_33__["BrowserAnimationsModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_0__["FontAwesomeModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__["NgbModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__["NgbAlertModule"],
                    angularx_qrcode__WEBPACK_IMPORTED_MODULE_32__["QRCodeModule"],
                    _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_28__["SweetAlert2Module"].forRoot(),
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__["MatProgressSpinnerModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__["MatSnackBarModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__["MatProgressBarModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatTableModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__["MatSortModule"],
                    angular_file_uploader__WEBPACK_IMPORTED_MODULE_6__["AngularFileUploaderModule"]
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["CUSTOM_ELEMENTS_SCHEMA"]],
                providers: [
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: _components_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_46__["AuthInterceptor"], multi: true },
                    { provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MAT_FORM_FIELD_DEFAULT_OPTIONS"], useValue: { appearance: 'fill' } },
                    { provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MAT_FORM_FIELD_DEFAULT_OPTIONS"], useValue: { floatLabel: 'always' } }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_30__["AppComponent"]]
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetComponentScope"](_components_visualizza_visualizza_component__WEBPACK_IMPORTED_MODULE_35__["VisualizzaComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_47__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_47__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_47__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_47__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_47__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_47__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_47__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_47__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_47__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_47__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_47__["NgPluralCase"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_48__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_48__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_48__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_48__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_48__["ɵangular_packages_router_router_l"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_0__["FaIconComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_0__["FaDuotoneIconComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_0__["FaLayersComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_0__["FaLayersTextComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_0__["FaLayersCounterComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_0__["FaStackComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_0__["FaStackItemSizeDirective"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__["NgbAccordion"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__["NgbPanel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__["NgbPanelTitle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__["NgbPanelContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__["NgbPanelHeader"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__["NgbPanelToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__["NgbAlert"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__["NgbButtonLabel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__["NgbCheckBox"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__["NgbRadioGroup"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__["NgbRadio"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__["NgbSlide"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__["NgbCollapse"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__["NgbDatepicker"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__["NgbDatepickerContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__["NgbInputDatepicker"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__["NgbDatepickerMonth"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__["NgbDropdownAnchor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__["NgbDropdownItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__["NgbNavbar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__["NgbNavContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__["NgbNav"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__["NgbNavItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__["NgbNavLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__["NgbNavOutlet"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__["NgbPagination"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__["NgbPaginationEllipsis"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__["NgbPaginationFirst"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__["NgbPaginationLast"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__["NgbPaginationNext"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__["NgbPaginationNumber"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__["NgbPaginationPrevious"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__["NgbPopover"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__["NgbProgressbar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__["NgbRating"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__["NgbTimepicker"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__["NgbToast"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__["NgbToastHeader"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__["NgbTooltip"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__["NgbTypeahead"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__["NgbHighlight"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__["NgbTabset"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__["NgbTab"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__["NgbTabContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__["NgbTabTitle"], angularx_qrcode__WEBPACK_IMPORTED_MODULE_32__["QRCodeComponent"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_28__["SwalComponent"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_28__["SwalPortalDirective"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_28__["SwalDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitleGroup"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardActions"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardFooter"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardSmImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardMdImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardLgImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardXlImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardAvatar"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_49__["Dir"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarRow"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanelActionRow"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanelDescription"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanelContent"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListItem"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListAvatarCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_50__["MatLine"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListIconCssMatStyler"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListSubheaderCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_50__["MatPseudoCheckbox"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatSelectionList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListOption"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_51__["MatDivider"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChip"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipInput"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipRemove"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipAvatar"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipTrailingIcon"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogContainer"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogActions"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridTile"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridTileText"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridTileHeaderCssMatStyler"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridTileFooterCssMatStyler"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridAvatarCssMatStyler"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_52__["CdkScrollable"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatError"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatPlaceholder"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatPrefix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatSuffix"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelect"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectTrigger"], _angular_material_core__WEBPACK_IMPORTED_MODULE_50__["MatOption"], _angular_material_core__WEBPACK_IMPORTED_MODULE_50__["MatOptgroup"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__["MatProgressSpinner"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__["MatSpinner"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_53__["CdkAutofill"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_53__["CdkTextareaAutosize"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInput"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatTextareaAutosize"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatVerticalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStep"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepLabel"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperNext"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperPrevious"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepHeader"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperIcon"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__["MatSnackBarContainer"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["CdkDropList"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["CdkDropListGroup"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["CdkDrag"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["CdkDragHandle"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["CdkDragPreview"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["CdkDragPlaceholder"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__["MatProgressBar"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatDrawer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatDrawerContent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenav"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavContent"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuItem"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuContent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatFooterCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatFooterRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatFooterCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatFooterRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatNoDataRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatTextColumn"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__["MatSort"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__["MatSortHeader"], angular_file_uploader__WEBPACK_IMPORTED_MODULE_6__["AngularFileUploaderComponent"], _app_component__WEBPACK_IMPORTED_MODULE_30__["AppComponent"],
    _components_autore_autore_component__WEBPACK_IMPORTED_MODULE_34__["AutoreComponent"],
    _components_autore_autore_component__WEBPACK_IMPORTED_MODULE_34__["UploadDialog"],
    _components_visualizza_visualizza_component__WEBPACK_IMPORTED_MODULE_35__["VisualizzaComponent"],
    _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_36__["HomePageComponent"],
    _components_autore_modifica_modifica_component__WEBPACK_IMPORTED_MODULE_37__["ModificaComponent"],
    _components_header_header_component__WEBPACK_IMPORTED_MODULE_38__["HeaderComponent"],
    _components_player_player_component__WEBPACK_IMPORTED_MODULE_39__["PlayerComponent"],
    _components_autore_configura_configura_component__WEBPACK_IMPORTED_MODULE_40__["ConfiguraComponent"],
    _components_autore_configura_configura_component__WEBPACK_IMPORTED_MODULE_40__["CancellazioneDialog"],
    _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_41__["LoginComponent"],
    _components_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_42__["SignupComponent"],
    _components_dragndrop_dragndrop_component__WEBPACK_IMPORTED_MODULE_43__["DragndropComponent"],
    _components_classifica_classifica_component__WEBPACK_IMPORTED_MODULE_44__["ClassificaComponent"],
    _components_puzzle_puzzle_component__WEBPACK_IMPORTED_MODULE_45__["PuzzleComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_47__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_47__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_47__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_47__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_47__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_47__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_47__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_47__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_47__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_47__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_47__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_47__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_47__["KeyValuePipe"]]);


/***/ }),

/***/ "atC9":
/*!*************************************************************!*\
  !*** ./src/app/components/home-page/home-page.component.ts ***!
  \*************************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.component */ "2MiI");
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../player/player.component */ "L7MN");





class HomePageComponent {
    constructor(router) {
        this.router = router;
        this.titolo = "Home Page";
    }
    ngOnInit() { }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 2, vars: 1, consts: [[3, "my-title"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-player");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("my-title", ctx.titolo);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _player_player_component__WEBPACK_IMPORTED_MODULE_3__["PlayerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-page',
                templateUrl: './home-page.component.html',
                styleUrls: ['./home-page.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "bDvC":
/*!***********************************************!*\
  !*** ./src/app/components/auth/auth.guard.ts ***!
  \***********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "jC6o");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        const isAuth = this.authService.getIsAuth();
        if (!isAuth) {
            this.router.navigate(['/login']);
        }
        return isAuth;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "dYRJ":
/*!**********************************************************!*\
  !*** ./src/app/components/autore/mime-type.validator.ts ***!
  \**********************************************************/
/*! exports provided: mimeType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mimeType", function() { return mimeType; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");

const mimeType = (control) => {
    if (typeof (control.value) === 'string') {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
    }
    const file = control.value; //prendo il file
    const fileReader = new FileReader(); //Riesco a leggerlo
    //Creo un Observable
    const frObs = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((observer) => {
        //Attende l'evento load end e inizia la sua funzione dopo il "fileReader.readAsArrayBuffer(file);"
        fileReader.addEventListener("loadend", () => {
            //Logica di validazione
            //Uint8Array => Unsigned Integers of 8 bits.
            // U => Unsigned, cioè solo valori positivi (i 'sign' negativi non sono ammessi)
            // Int => Integers, quindi solo numeri interi
            // 8 => utilizzati solo 8 nit (quindi numeri da 0 a 255 compresi)
            const arr = new Uint8Array(fileReader.result).subarray(0, 4); //subarray ci serve per prenderci il mime-type del file
            let header = "";
            let isValid = false;
            for (let i = 0; i < arr.length; i++) {
                header += arr[i].toString(16); //per convertirlo a esadecimale
            }
            switch (header) {
                case "89504e47": //png
                    isValid = true;
                    break;
                case "ffd8ffe0": //jfif jpe jpeg jpg
                case "ffd8ffe1": //jpg
                case "ffd8ffe2": //jpeg
                case "ffd8ffe3": //jpeg
                case "ffd8ffe8": //jpg
                    // case "47494638":    //gif
                    isValid = true;
                    break;
                default:
                    isValid = false; // Or you can use the blob.type as fallback
                    break;
            }
            if (isValid) {
                observer.next(null);
            }
            else {
                observer.next({ invalidMimeType: true });
            }
            observer.complete();
        });
        fileReader.readAsArrayBuffer(file);
    });
    return frObs;
};


/***/ }),

/***/ "i7ct":
/*!*****************************************************!*\
  !*** ./src/app/components/auth/auth-interceptor.ts ***!
  \*****************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "jC6o");



class AuthInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        // const authToken = this.authService.getToken();
        let authToken;
        if (req.url.includes('imgur')) {
            authToken = "d4e418b1180149c2f908769861db2fa0d6a60ec2";
        }
        else {
            authToken = this.authService.getToken();
        }
        const authRequest = req.clone({
            headers: req.headers.set('Authorization', "Bearer " + authToken)
        });
        return next.handle(authRequest);
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "jC6o":
/*!*************************************************!*\
  !*** ./src/app/components/auth/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");






class AuthService {
    constructor(http, router, _snackBar) {
        this.http = http;
        this.router = router;
        this._snackBar = _snackBar;
        this.isAuthenticated = false;
        this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    getToken() {
        return this.token;
    }
    getIsAuth() {
        return this.isAuthenticated;
    }
    getUserId() {
        return this.userId;
    }
    getAuthStatusListener() {
        return this.authStatusListener.asObservable();
    }
    createUser(email, password) {
        const authData = { email: email, password: password };
        this.http
            .post("https://site192029.tw.cs.unibo.it/api/user/signup", authData)
            .subscribe(response => {
            this._snackBar.open("Utente Creato Correttamente , ora esegui il Login", "OK", {
                duration: 10000,
            });
            this.router.navigate(["/user/login"]);
        }, error => {
            this.authStatusListener.next(false);
            this._snackBar.open("Profilo già esistente, cambia l'email ", "OK", {
                duration: 10000,
            });
        });
    }
    login(email, password) {
        const authData = { email: email, password: password };
        this.http
            .post("https://site192029.tw.cs.unibo.it/api/user/login", authData)
            .subscribe(response => {
            const token = response.token;
            this.token = token;
            if (token) {
                const expiresInDuration = response.expiresIn;
                this.setAuthTimer(expiresInDuration);
                this.isAuthenticated = true;
                this.authStatusListener.next(true);
                const now = new Date();
                const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
                console.log(expirationDate);
                this.saveAuthData(token, expirationDate, this.userId);
                this.router.navigate(["/autore"]);
                this.userId = response.userId;
            }
        }, error => {
            this.authStatusListener.next(false);
            alert("Email o password non sono corretti,riprova!");
        });
    }
    autoAuthUser() {
        const authInformation = this.getAuthData();
        if (!authInformation) {
            return;
        }
        const now = new Date();
        const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
        if (expiresIn > 0) {
            this.token = authInformation.token;
            this.isAuthenticated = true;
            this.setAuthTimer(expiresIn / 1000);
            this.authStatusListener.next(true);
            this.userId = authInformation.userId;
        }
    }
    logout() {
        this.token = null;
        this.isAuthenticated = false;
        this.authStatusListener.next(false);
        this.userId = null;
        clearTimeout(this.tokenTimer);
        this.clearAuthData();
        this.router.navigate(["/"]);
    }
    setAuthTimer(duration) {
        console.log("Setting timer: " + duration);
        this.tokenTimer = setTimeout(() => {
            this.logout();
        }, duration * 1000);
    }
    saveAuthData(token, expirationDate, userId) {
        localStorage.setItem("token", token);
        localStorage.setItem("expiration", expirationDate.toISOString());
        localStorage.setItem("userId", userId);
    }
    clearAuthData() {
        localStorage.removeItem("token");
        localStorage.removeItem("expiration");
        localStorage.removeItem("userId");
    }
    getAuthData() {
        const token = localStorage.getItem("token");
        const expirationDate = localStorage.getItem("expiration");
        const userId = localStorage.getItem("userId");
        if (!token || !expirationDate) {
            return;
        }
        return {
            token: token,
            expirationDate: new Date(expirationDate),
            userId: userId
        };
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: "root" }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "sWME":
/*!***************************************************************!*\
  !*** ./src/app/components/classifica/classifica.component.ts ***!
  \***************************************************************/
/*! exports provided: ClassificaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassificaComponent", function() { return ClassificaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var src_app_services_dummy_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/dummy-api.service */ "yYPB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");








function ClassificaComponent_mat_header_cell_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "idSquadra ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ClassificaComponent_mat_cell_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", game_r8.idSquadra, " ");
} }
function ClassificaComponent_mat_header_cell_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "idClasse ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ClassificaComponent_mat_cell_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", game_r9.idClasse, " ");
} }
function ClassificaComponent_mat_header_cell_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Score ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ClassificaComponent_mat_cell_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, game_r10.score, "1.0-2"), " ");
} }
function ClassificaComponent_mat_header_row_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
} }
function ClassificaComponent_mat_row_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
} }
class ClassificaComponent {
    constructor(apiDb) {
        this.apiDb = apiDb;
        this.displayedColumns = ['idSquadra', 'idClasse', 'score'];
        this.games = [];
    }
    //Prende tutti i games da db e li ordina per punteggio
    ngOnInit() {
        console.log(this.idClasse);
        this.apiDb.getGames().subscribe((res) => {
            res.posts.forEach(element => {
                if (element.idClasse == this.idClasse) {
                    this.games.push(element);
                }
            });
            // this.games = res.posts
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.games);
            this.dataSource.sort = this.sort;
        });
    }
}
ClassificaComponent.ɵfac = function ClassificaComponent_Factory(t) { return new (t || ClassificaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_dummy_api_service__WEBPACK_IMPORTED_MODULE_3__["DummyApiService"])); };
ClassificaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClassificaComponent, selectors: [["app-classifica"]], viewQuery: function ClassificaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, inputs: { idClasse: "idClasse" }, decls: 15, vars: 3, consts: [[1, "title"], [1, "table-container"], ["matSort", "", "matSortActive", "score", "matSortDirection", "desc", 3, "dataSource"], ["matColumnDef", "idSquadra"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "idClasse"], ["matColumnDef", "score"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"]], template: function ClassificaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "SCOPRI SE HAI VINTO!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ClassificaComponent_mat_header_cell_5_Template, 2, 0, "mat-header-cell", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ClassificaComponent_mat_cell_6_Template, 2, 1, "mat-cell", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ClassificaComponent_mat_header_cell_8_Template, 2, 0, "mat-header-cell", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ClassificaComponent_mat_cell_9_Template, 2, 1, "mat-cell", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ClassificaComponent_mat_header_cell_11_Template, 2, 0, "mat-header-cell", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ClassificaComponent_mat_cell_12_Template, 3, 4, "mat-cell", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ClassificaComponent_mat_header_row_13_Template, 1, 0, "mat-header-row", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ClassificaComponent_mat_row_14_Template, 1, 0, "mat-row", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Acme&family=Architects+Daughter&family=Caveat:wght@700&family=Courgette&family=Montserrat:wght@500&family=Patrick+Hand&family=Permanent+Marker&display=swap\");\n.table-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  box-shadow: 1px 0px 2px 1px rgba(16, 18, 44, 0.336), 0px 0px 11px 7px rgba(13, 10, 34, 0.315);\n  background-color: rgba(212, 200, 200, 0.685);\n  border-radius: 5px;\n  margin: 1em 9vw;\n}\nmat-table[_ngcontent-%COMP%] {\n  width: 80vw;\n  padding: 2vh 2vw;\n  background-color: transparent;\n  font-family: \"Acme\", sans-serif !important;\n  color: white !important;\n}\nmat-header-cell[_ngcontent-%COMP%] {\n  color: #5c5f66;\n  font-size: 5vw;\n  justify-content: center;\n  display: inline-flex;\n  line-height: normal;\n}\n.title[_ngcontent-%COMP%] {\n  width: 100vw;\n  text-align: center;\n  font-family: \"Acme\", sans-serif;\n  color: #5c5f66;\n  font-size: 8vw;\n  margin-top: 1em;\n  margin-bottom: 1em;\n  justify-content: center;\n}\nmat-cell[_ngcontent-%COMP%] {\n  color: #5c5f66;\n  font-size: 1em;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jbGFzc2lmaWNhL2NsYXNzaWZpY2EuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsbU5BQUE7QUFPUjtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDZGQUFBO0VBRUEsNENBUlc7RUFTWCxrQkFBQTtFQUNBLGVBQUE7QUFORjtBQVFBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQ0FBQTtFQUNBLHVCQUFBO0FBTEY7QUFPQTtFQUNFLGNBdEJXO0VBdUJYLGNBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUFKRjtBQU1BO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxjQWhDVztFQWlDWCxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFIRjtBQUtBO0VBQ0UsY0F2Q1c7RUF3Q1gsY0FBQTtFQUNBLHVCQUFBO0FBRkYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NsYXNzaWZpY2EvY2xhc3NpZmljYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BY21lJmZhbWlseT1BcmNoaXRlY3RzK0RhdWdodGVyJmZhbWlseT1DYXZlYXQ6d2dodEA3MDAmZmFtaWx5PUNvdXJnZXR0ZSZmYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDUwMCZmYW1pbHk9UGF0cmljaytIYW5kJmZhbWlseT1QZXJtYW5lbnQrTWFya2VyJmRpc3BsYXk9c3dhcFwiKTtcclxuXHJcbiRmb250LWNvbG9yOiAjNWM1ZjY2O1xyXG4kcHJpbWFyeS1jb2xvcjogIzI3MmZhM2U3O1xyXG4kYmFja2dyb3VuZDogcmdiYSgyMTIsIDIwMCwgMjAwLCAwLjY4NSk7XHJcbiRmb250QWNtZTogXCJBY21lXCIsIHNhbnMtc2VyaWY7XHJcblxyXG4udGFibGUtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJveC1zaGFkb3c6IDFweCAwcHggMnB4IDFweCByZ2JhKDE2LCAxOCwgNDQsIDAuMzM2KSxcclxuICAgIDBweCAwcHggMTFweCA3cHggcmdiYSgxMywgMTAsIDM0LCAwLjMxNSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbjogMWVtIDl2dztcclxufVxyXG5tYXQtdGFibGUge1xyXG4gIHdpZHRoOiA4MHZ3O1xyXG4gIHBhZGRpbmc6IDJ2aCAydnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgZm9udC1mYW1pbHk6IFwiQWNtZVwiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxubWF0LWhlYWRlci1jZWxse1xyXG4gIGNvbG9yOiAkZm9udC1jb2xvcjtcclxuICBmb250LXNpemU6IDV2dztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG59XHJcbi50aXRsZXtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkFjbWVcIiwgc2Fucy1zZXJpZiA7XHJcbiAgY29sb3I6ICRmb250LWNvbG9yO1xyXG4gIGZvbnQtc2l6ZTogOHZ3O1xyXG4gIG1hcmdpbi10b3A6IDFlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxubWF0LWNlbGx7XHJcbiAgY29sb3I6ICRmb250LWNvbG9yO1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClassificaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-classifica',
                templateUrl: './classifica.component.html',
                styleUrls: ['./classifica.component.scss']
            }]
    }], function () { return [{ type: src_app_services_dummy_api_service__WEBPACK_IMPORTED_MODULE_3__["DummyApiService"] }]; }, { idClasse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['idClasse']
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"]]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_autore_autore_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/autore/autore.component */ "KtP/");
/* harmony import */ var _components_player_player_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/player/player.component */ "L7MN");
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home-page/home-page.component */ "atC9");
/* harmony import */ var _components_visualizza_visualizza_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/visualizza/visualizza.component */ "C7BR");
/* harmony import */ var _components_autore_configura_configura_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/autore/configura/configura.component */ "ECse");
/* harmony import */ var _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/auth/login/login.component */ "HzFZ");
/* harmony import */ var _components_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/auth/auth.guard */ "bDvC");
/* harmony import */ var _components_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/auth/signup/signup.component */ "G19n");
/* harmony import */ var _components_classifica_classifica_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/classifica/classifica.component */ "sWME");
/* harmony import */ var _components_puzzle_puzzle_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/puzzle/puzzle.component */ "1x60");














const routes = [
    // { path: "home" , component:HomePageComponent},
    { path: "autore", component: _components_autore_autore_component__WEBPACK_IMPORTED_MODULE_2__["AutoreComponent"], canActivate: [_components_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: "player", component: _components_player_player_component__WEBPACK_IMPORTED_MODULE_3__["PlayerComponent"] },
    { path: "visualizza/:id/:partita", component: _components_visualizza_visualizza_component__WEBPACK_IMPORTED_MODULE_5__["VisualizzaComponent"] },
    { path: "visualizza/:id", component: _components_visualizza_visualizza_component__WEBPACK_IMPORTED_MODULE_5__["VisualizzaComponent"] },
    { path: "", component: _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"] },
    { path: "player/:tipo/:fascia/:traccia/:mode/:partita", component: _components_player_player_component__WEBPACK_IMPORTED_MODULE_3__["PlayerComponent"] },
    { path: "player/:tipo/:fascia/:traccia/:mode", component: _components_player_player_component__WEBPACK_IMPORTED_MODULE_3__["PlayerComponent"] },
    { path: "player/:tipo/:fascia/:traccia", component: _components_player_player_component__WEBPACK_IMPORTED_MODULE_3__["PlayerComponent"] },
    { path: "configura/:id", component: _components_autore_configura_configura_component__WEBPACK_IMPORTED_MODULE_6__["ConfiguraComponent"], canActivate: [_components_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: "login", component: _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: "signup", component: _components_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"] },
    { path: "classifica", component: _components_classifica_classifica_component__WEBPACK_IMPORTED_MODULE_10__["ClassificaComponent"] },
    { path: "puzzle", component: _components_puzzle_puzzle_component__WEBPACK_IMPORTED_MODULE_11__["PuzzleComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, providers: [_components_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                providers: [_components_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "yYPB":
/*!***********************************************!*\
  !*** ./src/app/services/dummy-api.service.ts ***!
  \***********************************************/
/*! exports provided: DummyApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DummyApiService", function() { return DummyApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




// import { head } from 'lodash';
class DummyApiService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    //Metodo remapping della storia impiegato per creare corrispondenza tra l' oggetto Storia generato da frontend con lo schema Storia del backend
    reMap(element) {
        let miaStoriaDaRitornare = {
            nome: element.title,
            id: element.id,
            didascalia: element.didascalia,
            fasciaEta: element.fasciaEta,
            urlBackground: element.image,
            steps: element.attivita
        };
        return miaStoriaDaRitornare;
    }
    //Metodo remapping della storia impiegato per creare corrispondenza tra oggetto backend e oggetto frontend
    reMapForDownload(element) {
        let miaStoriaDaRitornare = {
            title: element.title,
            id: element.id,
            didascalia: element.didascalia,
            fasciaEta: element.fasciaEta,
            image: element.image,
            attivita: this.reMapActivityForDownload(element.attivita)
        };
        return miaStoriaDaRitornare;
    }
    //Metodo utilizzato dal reMapForDownload per mappare un array di attività ottenute da backend
    reMapActivityForDownload(element) {
        for (let i = 0; i < element.length; i++) {
            element[i] = {
                activityId: element[i].activityId,
                activityTitle: element[i].activityTitle,
                action: element[i].action,
                backImg: element[i].backImg,
                //PUZZLE
                puzzleImg: element[i].puzzleImg,
                difficulty: element[i].difficulty,
                //QUIZ
                quizCorrectIdx: element[i].quizCorrectIdx,
                answers: element[i].answers,
                //D&D
                order: element[i].order,
                //DOMANDA
                risposteDomanda: element[i].risposteDomanda,
                tipoDomanda: element[i].tipoDomanda,
                correctId: element[i].correctId,
                wrongId: element[i].wrongId,
            };
        }
        return element;
    }
    // delete
    // per eliminare una storia verificando l'id
    deleteStory(id) {
        return this.http.delete('https://site192029.tw.cs.unibo.it/api/stories/' + id);
    }
    //per eliminare un attività verificando l'id
    deleteActivity(activityId) {
        return this.http.delete('https://site192029.tw.cs.unibo.it/api/stories/' + activityId);
    }
    // GET
    // ci restituisce tutte le storie
    getStories() {
        return this.http.get('https://site192029.tw.cs.unibo.it/api/stories/');
    }
    // ci restituisce la singola storia,verificando l'id
    getStoria(id) {
        return this.http.get("https://site192029.tw.cs.unibo.it/api/stories/" + id);
    }
    getStep(idStoria) {
        return this.http.get("https://site192029.tw.cs.unibo.it/api/stories/" + idStoria);
    }
    //ci restituisce tutte le partite
    getGames() {
        return this.http.get('https://site192029.tw.cs.unibo.it/api/games/');
    }
    //ci restituisce la singola partita,verificando l'id
    getGame(id) {
        return this.http.get("https://site192029.tw.cs.unibo.it/api/games/" + id);
    }
    //PUT
    // per salvare le modifiche di una Storia
    updateStoria(storia) {
        //  let headers = new HttpHeaders().set("Authorization", 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFAYS5pdCIsInVzZXJJZCI6IjVmYmZkM2YwZGUwNjRiMzRhNDE4ZTJkYiIsImlhdCI6MTYxMTA3MjA3NSwiZXhwIjoxNjExMDc1Njc1fQ.dLyXbhY_q6ptcBZP226Y3IP8Ds1d0eNJN096C_3MhEE')
        //  let options = { headers: headers };
        // console.log(options);
        return this.http.put("https://site192029.tw.cs.unibo.it/api/stories/" + storia.id, storia);
    }
    // per salvare le modifiche di una partita nel caso in cui la partita è di tipologia Gruppo o Classe
    updateGame(idPartita, prossimoId, punteggio) {
        console.log("da frontend mando : " + punteggio);
        return this.http
            .put("https://site192029.tw.cs.unibo.it/api/games/" + idPartita, {
            prossimoId: prossimoId,
            score: punteggio
        });
    }
    //POST
    // per creare una nuova Storia
    addNewStory(storyData) {
        return this.http.post("https://site192029.tw.cs.unibo.it/api/stories/", storyData);
    }
    //per creare una nuova partita
    addNewGame(idSquadra, idClasse, idPartita, numeroPlayer) {
        const gameData = {
            idSquadra: idSquadra,
            idClasse: idClasse,
            idPartita: idPartita,
            numeroPlayer: numeroPlayer
        };
        return this.http.post("https://site192029.tw.cs.unibo.it/api/games/", gameData);
    }
    //per caricare un immagine tramite il metodo post
    uploadImage(base64imgStr) {
        return this.http.post("https://api.imgur.com/3/image", { image: base64imgStr });
    }
}
DummyApiService.ɵfac = function DummyApiService_Factory(t) { return new (t || DummyApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
DummyApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DummyApiService, factory: DummyApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DummyApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map