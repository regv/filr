import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-textereab',
  templateUrl: './textereab.component.html',
  styleUrls: ['./textereab.component.css']
})
export class TextereabComponent implements OnInit, OnChanges {
  @Output() nameChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() name: string;
  @Input() entity: any;


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
  @Output() Validator = new EventEmitter(); // function valide  response
  @Input() required = false; // required field
  @Input() style: any;

  @Output() entityUpdated = new EventEmitter();

  isActiveInput = false;

  public entityField: string;

  public originEntityValue: any;
  constructor() { }
  ngOnChanges() {
    this.setOriginValue();
    this.isActiveInput = false;
  }

  updateEntity() {
    const entityValue = this.entity[this.entityField];

    if (entityValue !== this.originEntityValue) {
      this.entityUpdated.emit({[this.entityField]: this.entity[this.entityField]});
      this.setOriginValue();
    }

    this.isActiveInput = false;
  }

  cancelUpdate() {
    this.isActiveInput = false;
    this.entity[this.entityField] = this.originEntityValue;
  }

  setOriginValue() {
    this.originEntityValue = this.entity[this.entityField];
  }

  ngOnInit(): void {
  }
  valid(value: string) {
    console.log(this.entityField);
    let bValid = true;
    if (value === '' && this.required === true) {
      bValid = false;
    }

    this.Validator.emit({field: this.entityField, valid: bValid});
  }
}
