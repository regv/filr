import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MediaListComponent} from './media/media-list/media-list.component';
import {TagListComponent} from './tag/tag-list/tag-list.component';
import {ConfigurationFormComponent} from './configuration/configuration-form/configuration-form.component';
import {ConfigurationComponent} from './configuration/configuration.component';
import {UserListComponent} from './user/user-list/user-list.component';
import {MediaFormComponent} from './media/media-form/media-form.component';
import {TagFormComponent} from './tag/tag-form/tag-form.component';
import {UserFormComponent} from './user/user-form/user-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'configurations',
    pathMatch: 'full'
  },
  {
    path: 'configurations', children: [
      {
        path: '', component: ConfigurationComponent,
      },
      {
        path: 'add', component: ConfigurationFormComponent,
      },
      {
        path: 'edit/:id', component: ConfigurationFormComponent,
      },
    ]
  },

  {
    path: 'medias', children: [
      {
        path: '', component: MediaListComponent,
      },
      {
        path: 'add', component: MediaFormComponent,
      },
      {
        path: 'edit/:id', component: MediaFormComponent,
      },
    ],
  },
  // {
  //   path: 'tags', children: [
  //     {
  //       path: '', component: TagListComponent,
  //     },
  //     {
  //       path: 'add', component: TagFormComponent,
  //     },
  //   ]
  // },
  {
    path: 'tags',
    loadChildren: () => import('./tag/tag.module').then(mod => mod.TagModule)
  }, {
    path: 'ftps',
    loadChildren: () => import('./ftp/ftp.module').then(mod => mod.FtpModule)
  },
  {
    path: 'users', children: [
      {
        path: '', component: UserListComponent,
      },
      {
        path: 'add', component: UserFormComponent,
      },
    ]
  },
  { path: '', component: ConfigurationComponent },
  { path: '**', component: ConfigurationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {
    onSameUrlNavigation: 'reload'
  }) ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
