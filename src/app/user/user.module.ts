import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {UserComponent} from './user.component';
import {UserItemComponent} from './user-item/user-item.component';
import { UserFormComponent } from './user-form/user-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';
import {InputTextModule} from 'primeng/inputtext';
import {FileUploadModule} from 'primeng/fileupload';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {TableModule} from 'primeng/table';
import {UserListComponent} from './user-list/user-list.component';
import {ElementModule} from '../common/elements/element.module';



@NgModule({
  declarations: [
    UserComponent,
    UserItemComponent,
    UserListComponent,
    UserFormComponent
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
    ElementModule
  ],
  exports: [
    UserComponent,
   UserItemComponent,
    UserListComponent,
    UserFormComponent
  ]

})
export class UserModule {}
