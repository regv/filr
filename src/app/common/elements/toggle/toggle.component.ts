import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {

  model: any = {};

  public options = [
    {value: 'on', id: 'On'},
    {value: 'off', id: 'Off'},
  ];
  form: FormGroup;
  showLabel = false;



  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      credentials: this.fb.array([]),
    });
  }
  addCreds() {
    const creds = this.form.controls.credentials as FormArray;
    creds.push(this.fb.group({
      state: 'off'
    }));
  }


}
