import {Component, EventEmitter, Host, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {ControlContainer, FormBuilder, FormGroup, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  // viewProviders: [{ provide: ControlContainer, useExisting: FormGrou
})
export class InputComponent implements OnInit {
  @Input() txt: string;
  @Input() field: string;
  @Input() txt1 = 'iheb';
  @Input() w75: any;
  @Input() w25 = false;
  @Input() marginLeft: any;
  @Input() pattern;
  @Input() marginTop: any;
  @Input() parentForm: FormGroup;
  @Output() child = new EventEmitter<string>();
  form;

  constructor() { }
  // constructor(private fb: FormBuilder, @Host() private parentFor: FormGroupDirective) { }
name = '';
  @Output() n: string;
  ngOnInit() {
    // this.form = this.parentFor.form;
    //
    //
    // this.form.addControl('child', this.fb.group({
    //   field: ''
    // }));
  }
  valueChange(value) {
    console.log(value);
    this.child.emit();

  }
}
