import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {TagComponent} from './tag.component';
import {TagItemComponent} from './tag-item/tag-item.component';
import { TagFormComponent } from './tag-form/tag-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';
import {InputTextModule} from 'primeng/inputtext';
import {FileUploadModule} from 'primeng/fileupload';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {TableModule} from 'primeng/table';
import {TagListComponent} from './tag-list/tag-list.component';
import {ElementModule} from '../common/elements/element.module';
import {RouterModule, Routes} from '@angular/router';
import {TagRoutingModule} from './tag-routing.module';
import {CommonModule} from '@angular/common';

const routes: Routes = [
  {
        path: '', component: TagListComponent,
      },
      {
        path: 'add', component: TagFormComponent,
      },
];

@NgModule({
  declarations: [
    TagComponent,
    TagItemComponent,
    TagListComponent,
    TagFormComponent
  ],
  imports: [
    // BrowserModule,
    CommonModule,
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
    TagRoutingModule
  ],
  exports: [
    TagComponent,
   TagItemComponent,
    TagFormComponent,
  ]

})
export class TagModule {}
