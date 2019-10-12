import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-inputb',
  templateUrl: './inputb.component.html',
  styleUrls: ['./inputb.component.css']
})
export class InputbComponent implements OnInit, OnChanges {
  @Output() nameChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() name: string;
  @Input() entity: any;

  @Input() set field(entityField: string) {
    this.entityField = entityField;
    this.setOriginValue();
  }
  @Input() txt: string;
  @Input() txtDisplay =  'cannot be empty.';
  // @Input() w75: any;
  // @Input() w25: any;
  @Input() marginLeft: any;
  @Input() marginTop: any;
  @Input() required = false;
  @Input() h: any;
  @Input() regex = '';
  @Input() conditionOther = '';
  regexTest = new RegExp(this.regex);

  @Input() w25 = false;
  @Input() w75 = false;
  @Input() w751 = false;
  @Input() className: string;
  @Output() child = new EventEmitter<any>();
  @Input() style: any;
  bForm: boolean;
  bFormR: boolean;
  @Input() UD: any;

  @Output() entityUpdated = new EventEmitter();
  public entityField: string;
  public originEntityValue: any;

  constructor() {
    console.log(this.regexTest, this.regex);
  }

  setOriginValue() {
    this.originEntityValue = this.entity[this.entityField];
  }
// validation input test
  valid(value: string) {
    console.log('cvb', value);
    let bValid = true;
    if (value === '' && this.required === true) {
      bValid = false;
      this.bForm = true;
    } else {this.bForm = false; }
    console.log('valid test', bValid);
    this.child.emit({field: this.entityField, valid: bValid});
  }

  // validRe(con: string) {
  //   console.log('cvVVVVVV', con);
  //   let bValid = true;
  //   if ( con === true) {
  //     this.required = true;
  //     bValid = false;
  //     this.bFormR = true;
  //   } else {this.bFormR = false; this.required = true; }
  //   // if (this.conditionOther === true) {
  //   //   this.required = true;
  //   //   bValid = false;
  //   //   this.bForm = true;
  //   // } else {this.bForm = false; this.required = true;; }
  //   console.log('valid test', bValid);
  //   this.child.emit({field: this.entityField, valid: bValid});
  // }
  ngOnInit(): void {
    this.bForm = false;
    this.bFormR = false;
    // sent true if is update session
    if (this.UD) {
      this.child.emit({field: this.entityField, valid: true});
    }
    console.log('inti req', this.required);
  }

  ngOnChanges() {
    // console.log(this.field, this.entity);
    if (this.entityField !== '' && this.entity ) {
      this.valid(this.entity[this.entityField]);
    }
    console.log('change req', this.required);

    // this.validRe( this.conditionOther );
    // this.required = this.required;
  }
}
