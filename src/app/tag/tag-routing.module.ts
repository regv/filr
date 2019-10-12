import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {TagListComponent} from './tag-list/tag-list.component';
import {TagFormComponent} from './tag-form/tag-form.component';
import {ConfigurationFormComponent} from '../configuration/configuration-form/configuration-form.component';


const routes: Routes = [
  {
    path: '', component: TagListComponent,
  },
  {
    path: 'add', component: TagFormComponent,
  },
  {
    path: 'edit/:id', component: TagFormComponent,
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule],
  // declarations: [ TagListComponent, TagFormComponent]
})
export class TagRoutingModule { }
