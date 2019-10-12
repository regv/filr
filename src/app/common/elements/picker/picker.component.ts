import {Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-picker',
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.css']
})
export class PickerComponent implements OnInit, OnChanges {
  @Output() nameChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() name: string;
  @Input() entity: any;
  // @ViewChildren(CharDirective) dirs;
  public mask = ['#', /[a-fA-F0-9]/, /[a-fA-F0-9]/, /[a-fA-F0-9]/, /[a-fA-F0-9]/, /[a-fA-F0-9]/, /[a-fA-F0-9]/ ];
  // public mask = this.dirs.mask();
  // public mask = ['#', /[a-fA-F0-9].{7}$/ ];
  @Input() set field(entityField: string) {

    this.entityField = entityField;
    this.setOriginValue();
  }

  @Input() txt: string;
  // @Input() w75: any;
  // @Input() w25: any;
  nameValue: string;
  @Input() marginLeft: any;
  @Input() h: any;
  @Input() w25 = false;
  @Input() w75 = false;
  @Input() className: string;
  @Input() required = false;
  @Input() style: any;
  @Input() UD: any;
  @Output() validator = new EventEmitter();
  bForm = false;
  @Output() entityUpdated = new EventEmitter();

  isActiveInput = false;

  public entityField: string;

  public originEntityValue: any;

  constructor() {
  }

  // ngOnChanges() {
  //   this.setOriginValue();
  //   this.isActiveInput = false;
  // }

  updateEntity() {
    const entityValue = this.entity[this.entityField];

    if (entityValue !== this.originEntityValue) {
      this.entityUpdated.emit({[this.entityField]: this.entity[this.entityField]});
      this.setOriginValue();
    }

    this.isActiveInput = false;
  }

  setOriginValue() {
    this.originEntityValue = this.entity[this.entityField];
  }

  ngOnInit(): void {
    // console.log(this.mask);
    this.bForm = false;
    console.log(this.bForm);
    if (this.UD) {
      this.validator.emit({field: this.entityField, valid: true});
    }
    this.entity[this.entityField] = '#0080ff';
    if ( this.entity[this.entityField] === '#0080ff') {
      this.validator.emit({field: this.entityField, valid: true});
    }
  }
  // verif(contition: string, valid: boolean): boolean {
  //   if (contition) {
  //     valid = false;
  //     this.bForm = true;
  //   } else {
  //     this.bForm = false;
  //   }
  //   return valid; }

  checkClicked(val) {
    this.valid(val);
  }
  valid(value: string) {
    let bValid = true;
    console.log(this.bForm);
    console.log(value, value.indexOf('-'), value.length);
    // if (value.indexOf('_') !== -1 || value.length === 0) {
    if (value.indexOf('_') !== -1 || value.length === 0) {
      bValid = false;
      this.bForm = true;
    } else {
      this.bForm = false;
    }
    console.log('rrrrrr', this.bForm);

    this.validator.emit({field: this.entityField, valid: bValid});
  }

  ngOnChanges() {
    console.log(this.entity[this.entityField]);
    if (this.entity) {
      this.valid(this.entity[this.entityField]);
    }
    // this.entity[this.entityField] = this.entity[this.entityField];
    this.checkClicked( this.entity[this.entityField]); {
      this.valid( this.entity[this.entityField]);
    }
  }
}
