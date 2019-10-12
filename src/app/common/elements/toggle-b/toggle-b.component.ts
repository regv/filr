import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-toggle-b',
  templateUrl: './toggle-b.component.html',
  styleUrls: ['./toggle-b.component.css']
})
// export class ToggleBComponent implements OnInit, OnChanges {
//
//   @Output() nameChange: EventEmitter<string> = new EventEmitter<string>();
//   @Input() name: string;
//   @Input() entity: any;
//
//   @Input() set field(entityField: any) {
//     this.entityField = entityField;
//     this.setOriginValue();
//   }
//   @Input() txt: string;
//   @Input() marginLeft: any;
//   @Input() marginTop: any;
//   @Input() h: any;
//   @Input() w25 = false;
//   @Input() w75 = false;
//   @Input() className: string;
//
//   @Input() style: any;
//
//   @Output() entityUpdated = new EventEmitter();
//
//   isActiveInput = false;
//
//   public entityField: boolean;
//
//   public originEntityValue: any;
//   test: boolean ;
//   constructor() { }
//   ngOnChanges() {
//     this.setOriginValue();
//     this.isActiveInput = false;
//   }
//   checkClicked(val) {
//     this.test = !val;
//     console.log(val);
//     console.log('gggg' + this.entity[this.entityField]);
//   }
//
//   setOriginValue() {
//     if (this.entityField === false) {
//       this.originEntityValue = false;
//
//     } else {
//       this.originEntityValue = true;
//     }
//   }
//
//   ngOnInit() {
//     if (  typeof this.originEntityValue === 'boolean' ) {
//       this.test =  this.originEntityValue;
//     }
//     console.log(this.test);
//   }
//
// }
export class ToggleBComponent implements OnInit, OnChanges {

  @Output() nameChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() name: string;
  @Input() entity: any;

  @Input() set field(entityField: any) {
    this.entityField = entityField;
    this.setOriginValue();
  }
  @Input() txt: string;
  @Input() emoji: boolean;
  @Input() marginLeft: any;
  @Input() marginTop: any;
  @Input() h: any;
  @Input() w25 = false;
  @Input() w75 = false;
  @Input() className: string;

  @Input() style: any;

  @Output() entityUpdated = new EventEmitter();

  isActiveInput = false;

  public entityField: any;

  public originEntityValue: any;
  test: boolean ;
  constructor() { }
  ngOnChanges() {
    this.setOriginValue();
    this.isActiveInput = false;
  }
  checkClicked(val) {
    this.test = !val;
    console.log(val);
  }

  setOriginValue() {
    this.originEntityValue = this.entity[this.entityField];

  }

  ngOnInit() {
    if (  typeof this.originEntityValue === 'boolean' ) {
      this.test =  this.originEntityValue;
    }
    console.log(this.test);

  }
}
