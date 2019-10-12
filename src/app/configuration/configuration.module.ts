import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {ConfigurationComponent} from './configuration.component';
import {ConfigurationItemComponent} from './configuration-item/configuration-item.component';
import { ConfigurationListComponent } from './configuration-list/configuration-list.component';
import { ConfigurationFormComponent } from './configuration-form/configuration-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';
import {InputTextModule} from 'primeng/inputtext';
import {FileUploadModule} from 'primeng/fileupload';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {TableModule} from 'primeng/table';
import {AppRoutingModule} from '../app-routing.module';
import {ButtonComponent} from '../common/elements/button/button.component';
import {InputComponent} from '../common/elements/input/input.component';
import {ElementModule} from '../common/elements/element.module';
import {GroupBComponent} from '../common/elements/group-b/group-b.component';
import {PopupComponent} from '../common/elements/popup/popup.component';
import {CommonModule} from '@angular/common';
import {ToggleComponent} from '../common/elements/toggle/toggle.component';



@NgModule({
  declarations: [
    ConfigurationComponent,
    ConfigurationItemComponent,
    ConfigurationListComponent,
    ConfigurationFormComponent,
    // ButtonComponent,
    // InputComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
TabViewModule,
    InputTextModule,
FileUploadModule,
    ToggleButtonModule,
    InputTextareaModule,
    AppRoutingModule,
    ElementModule,
    // ImageUploadModule,
  ],
  exports: [
    ConfigurationComponent,
    ConfigurationItemComponent,
    ConfigurationFormComponent,
    ButtonComponent,
    InputComponent,
    GroupBComponent,
    ToggleComponent
  ],
})
export class ConfigurationModule {}
