import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() colName1: string;
  @Input() colName2: string;
  @Input() medias1: any = [];
  @Input() confMedia1: Array<any> = [];

  // Origin
  medias: Array<any> = [
    {id: '1', officename: 'Sun '},
    {id: '2', officename: 'Moon'},
    {id: '3', officename: 'Stars'},
    {id: '4', officename: 'Stars1'},
    {id: '5', officename: 'Stars2'},
    {id: '6', officename: 'Stars3'},
    {id: '7', officename: 'Stars4'},
    {id: '8', officename: 'Stars5'},
    {id: '9', officename: 'Stars6'},
    {id: '10', officename: 'Stars7'},
    {id: '11', officename: 'Stars8'},
    {id: '12', officename: 'Stars9'},
    {id: '13', officename: 'Stars10'},
  ];


  confMedia: Array<any> = [
    {id: '1', officename: 'Sun '},
    {id: '2', officename: 'Moon '},
    {id: '4', officename: 'Stars1'},
    {id: '6', officename: 'Stars3'},
    {id: '7', officename: 'Stars4'},
    {id: '8', officename: 'Stars5'},
    {id: '9', officename: 'Stars6'},
    {id: '10', officename: 'Stars7'},
  ];

  // temp
  allMedia: Array<any> = [];
  // a: Array<any> = [];
  selectedMedia: Array<any> = [];
  noSelectedMedia: Array<any> = [];
  // the last out
  sendMedia: Array<any> = [];


  constructor() {
    // clone media on all media array to manipulate
    this.allMedia = this.cloneArray(this.medias);
    // this.a = this.cloneArray(this.medias1);
    this.selectedMedia = this.cloneArray(this.confMedia);
    this.aff();
    this.displaySelect();
    this.displayNoSelect();
    // console.log(this.allMedia);
    // console.log(this.selectedMedia);
    // console.log(this.noSelectedMedia);
    // this.change();
    console.log('reter', this.confMedia);
  }

  ngOnInit() {
    // console.log('table data', this.medias1, this.confMedia1);
  }

// clone function or copy a array from another array
  cloneArray(x) {
    return JSON.parse(JSON.stringify(x)); // returns Array
  }

// display intial selected item in all media from selected media
  private displaySelect() {
    const tt = this.selectedMedia.length;
    for (let j = 0; j < tt; j++) {
      // const ind = this.allMedia.indexOf(this.selectedMedia[j]);
      const ind = this.allMedia.findIndex((m) => m.id === this.selectedMedia[j].id);
      this.selectedMedia[j].checked = true;
      if (ind > -1) {
        this.allMedia[ind].checked = true;
      }
    }
  }
  // ngOnChanges(changes: SimpleChanges) {
  //   this.change();
  // }
  onChange(obj) {
    if (obj.checked) {
      // this.selectedMedia.push(obj);
      const inde = this.noSelectedMedia.findIndex((m) => obj.id === m.id);
      if (inde !== -1) {
        this.noSelectedMedia.splice(inde, 1);
        const newFirstElement = obj;

        this.selectedMedia = [newFirstElement].concat(this.selectedMedia);
        // this.selectedMedia.push(obj);
        this.change(this.selectedMedia);

      }
    } else {
      const index = this.selectedMedia.findIndex((m) => obj.id === m.id);
      if (index !== -1) {
        this.selectedMedia.splice(index, 1);
        this.noSelectedMedia.push(obj);
      }
    }
  }
// change the selected input to unselected
  changeSelectionUsedM(obj, i) {
    this.allMedia.find(m => m.id === obj.id).checked = false;
    obj.checked = false;
    this.noSelectedMedia.push(obj);
    this.selectedMedia.splice(i, 1);
    this.change(this.selectedMedia);
  }
  // init all media
  private  aff() {
    const tt = this.allMedia.length;
    for (let j = 0; j < tt; j++) {
        this.allMedia[j].checked = false;
    }
  }
  // clone no selected  media in  noselected array
  private displayNoSelect() {
    const tt = this.allMedia.length;
    for (let j = 0; j < tt; j++) {
    if (this.allMedia[j].checked === false) {
      this.noSelectedMedia.push(this.allMedia[j]);
      // console.log(this.noSelectedMedia);
    }
    }
  }
  // delete selected item from
  changeNoSelectionUsedM(obj, i) {
    // console.log(obj);
    this.allMedia.find(m => m.id === obj.id).checked = true;
    // obj.checked = true;
    const newFirstElement = obj;
// add newFirstElement at the first of array
    this.selectedMedia = [newFirstElement].concat(this.selectedMedia);
    this.change(this.selectedMedia);
    // splice from noSelectedMedia
    this.noSelectedMedia.splice(i, 1);
    this.sendMedia.splice(i, 1);
  }
  // reverse clone
  change(cl) {
    const tt = cl.length;
    this.sendMedia = this.cloneArray(cl);
    for (let j = 0; j < tt; j++) {
      // delete  this.medias[j].checked;
      // this.sendMedia = this.medias;
      delete  this.sendMedia[j].checked;
    }
    // console.log(this.sendMedia);
  }
}
