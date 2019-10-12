import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ButtonModule} from 'primeng/button';
import { TabViewModule} from 'primeng/primeng';
import {ElementModule} from '../common/elements/element.module';
import {Routes} from '@angular/router';
import {FtpRoutingModule} from './ftp-routing.module';

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    ElementModule,
    FtpRoutingModule,
  ],
  exports: [
    FormComponent
  ]
})
export class FtpModule { }
