import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ConfigurationService} from '../../../shared/configuration.service';
import {ConnectionService} from './inputu.service';
import {element} from 'protractor';

@Component({
  selector: 'app-inputu',
  templateUrl: './inputu.component.html',
  styleUrls: ['./inputu.component.css']
})
export class InputuComponent implements OnInit, OnChanges {

  @Output() nameChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() name: string;
  @Input() entity: any;
  // pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
  //   pattern1 = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
  @Input() set field(entityField: string) {
    this.entityField = entityField;
    this.setOriginValue();
  }

  @Input() txt: string;
  @Input() txtDisplay = 'cannot be empty.';
  // @Input() w75: any;
  // @Input() w25: any;
  test: boolean;
  @Input() pattern = '';
  @Input() marginLeft: any;
  @Input() marginTop: any;
  @Input() required = false;
  @Input() h: any;
  @Input() regex = '';
  // regexTest = new RegExp(this.regex);
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
  form: FormGroup;
  ip: boolean;
  ipPort: boolean;
  http: boolean;
  local: boolean;

  constructor(private fb: FormBuilder, private  api: ConnectionService) {
  }

  setOriginValue() {
    this.originEntityValue = this.entity[this.entityField];
  }

// validation input test

  valid(value: string) {
    this._ip(value);
    this._ipPort(value);
    this._http(value);
    this._local(value);

    const v =  (!(this.ip || this.local || this.http || this.ipPort) || (value.length === 0 && this.required === true));
    console.log('cvb', v);
    let bValid = true;
    if (!(this.ip || this.local || this.http || this.ipPort) || (value.length === 0 && this.required === true)) {
      bValid = false;
    }
    if ((value.length === 0 && this.required === false)) {
      bValid = true;
    }
    // if (this.required === true) {
    // if ((this.ip || this.local || this.http || this.ipPort) || (value.length === 0 && this.required === true)) {
    //   bValid = false;
    //   this.bForm = true;
    // } else {this.bForm = false; }
    // } else {
    //   if ((this.ip || this.local || this.http || this.ipPort) || (value.length !== 0 )) {
    //     bValid = false;
    //     this.bForm = true;
    //   } else {this.bForm = false; bValid = true; }
    // }
    console.log('valid test', value, bValid);
    this.bForm = !bValid;
    this.child.emit({field: this.entityField, valid: bValid});
  }

  ngOnInit(): void {

    this.bForm = false;
    this.bFormR = false;
    // sent true if is update session
    if (this.UD) {
      this.child.emit({field: this.entityField, valid: true});
    }
    console.log('inti req', this.pattern);
    this.ip = true;
    this.ipPort = true;
    this.http = true;
    this.local = true;
    if (this.required === false) {
      this.child.emit({field: this.entityField, valid: true});
    }
    // this.global = true;
  }

  // _ip(event: any) {
  //   this.b = true;
  // // |https:\/\/|localhost:()([1-9]|[1-5]?[0-9]{2,4}|6[1-4][0-9]{3}|65[1-4][0-9]{2}|655[1-2][0-9]|6553[1-5])\/|http:\/\/localhost:()([1-9]|[1-5]?[0-9]{2,4}|6[1-4][0-9]{3}|65[1-4][0-9]{2}|655[1-2][0-9]|6553[1-5])\/)
  //   // const pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
  //   const http = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/ |https:\/\/)?[a-z0-9]+([\-.]{1}[a-z0-9]+)*(\.[a-z]{2,6}|\/[a-z]*|\.{6})(:[0-9]{1,5})?(\/.*)?$/;
  //   const ip = /(?=.*[^.]$)((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.?){4}$/;
  //   const ipPort = /(?=.*[^.]$)((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.?){4}:()([1-9]|[1-5]?[0-9]{2,4}|6[1-4][0-9]{3}|65[1-4][0-9]{2}|655[1-2][0-9]|6553[1-5])$/;
  //   const localhost = /^(localhost:()([1-9]|[1-5]?[0-9]{2,4}|6[1-4][0-9]{3}|65[1-4][0-9]{2}|655[1-2][0-9]|6553[1-5])\/|http:\/\/localhost:()([1-9]|[1-5]?[0-9]{2,4}|6[1-4][0-9]{3}|65[1-4][0-9]{2}|655[1-2][0-9]|6553[1-5])\/)?[a-z0-9]+([\-.]{1}[a-z0-9]+)*(\.[a-z]{2,6}|\/[a-z0-9]*|)(:[0-9]{1,5})?(\/.*)?$/;
  //   const inputChar = String.fromCharCode(event.charCode);
  //   if (!ipPort.test(event) || !ip.test(event) || !http.test(event)) {
  //     this.b = false;
  //     console.log('youi bb', this.b);
  //   }
  // }
  _http(event: any) {
    const http = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/ |https:\/\/)?[a-z0-9]+([\-.]{1}[a-z0-9]+)*(\.[a-z]{2,6}|\/[a-z]*|\.{6})(:[0-9]{1,5})?(\/.*)?$/;
    if (http.test(event)) {
      this.http = true;
    } else {
      this.http = false;
    }
  }

  _local(event: any) {
    // const http = /^(?:^|[ \t])((https?:\/\/)?(?:localhost:|[\w-]+(?:\.[\w-]+)+)(:\d+)?(\/\S*)?)$/;
    const local = /^(localhost:()([1-9]|[1-5]?[0-9]{2,4}|6[1-4][0-9]{3}|65[1-4][0-9]{2}|655[1-2][0-9]|6553[1-5])\/|http(s)?:\/\/localhost:()([1-9]|[1-5]?[0-9]{2,4}|6[1-4][0-9]{3}|65[1-4][0-9]{2}|655[1-2][0-9]|6553[1-5])\/)?[a-z0-9\/]+([\-\.\/]{1}[a-z0-9]+)*(\.[a-z]{2,6}|\/[a-z]*|\.{6})(:[0-9]{1,5}|[\/]?)?(\/.*)?$/;
    if (local.test(event)) {
      this.local = true;
    } else {
      this.local = false;
    }
  }

  _ip(event: any) {
    // const ip = /(?=.*[^.]$)((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.?){4}$/;
    const inputChar = String.fromCharCode(event.charCode);
    // const ip = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    // const ip = /^(http(s)?:\/\/)?((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.?){4}$/;
    const ip = /(http(s)?:\/\/)?(?:(?:25[0-5]|2[0-4]\d|[01]?\d{1,2})\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d{1,2})$/;
    this.ip = (ip.test(event) && inputChar.length < 26) ;
  }

  _ipPort(event: any) {
    const ipPort = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?):()([1-9]|[1-5]?[0-9]{2,4}|6[1-4][0-9]{3}|65[1-4][0-9]{2}|655[1-2][0-9]|6553[1-5])$/;
    if (ipPort.test(event)) {
      this.ipPort = true;
    } else {
      this.ipPort = false;
    }
  }

  ngOnChanges(sc: SimpleChanges) {
    // console.log(this.field, this.entity);
    // if ((this.entityField.length !== 0 && this.entity) ) {
    //   this.valid(this.entity[this.entityField]);
    // }
    // if ( this.entityField.length === 0) {
    //   this.valid(this.entity[this.entityField]);
    // }
    this.valid(this.entity[this.entityField]);
  }

  onBlurMethod(v) {
    // this.api.pingu(v).subscribe(value => {
    //   this.test = value.t;
    //   console.log(this.test);   });
    // this.api.connected$.subscribe()) ;
  }
}
