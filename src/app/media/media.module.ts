import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MediaComponent} from './media.component';
import {MediaItemComponent} from './media-item/media-item.component';
import { MediaFormComponent } from './media-form/media-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';
import {InputTextModule} from 'primeng/inputtext';
import {FileUploadModule} from 'primeng/fileupload';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {MediaListComponent} from './media-list/media-list.component';
import {ButtonComponent} from '../common/elements/button/button.component';
import {ElementModule} from '../common/elements/element.module';
import {AppRoutingModule} from '../app-routing.module';



@NgModule({
  declarations: [
    MediaComponent,
    MediaItemComponent,
    MediaListComponent,
    MediaFormComponent,
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
    ElementModule,
    AppRoutingModule


  ],
  exports: [
    MediaComponent,
   MediaItemComponent,
    MediaFormComponent
  ]

})
export class MediaModule {}
