
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './common/menu/menu.component';
import { SearchComponent } from './common/elements/search/search.component';
import {ConfigurationModule} from './configuration/configuration.module';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MediaModule} from './media/media.module';
import {TagModule} from './tag/tag.module';
import {UserModule} from './user/user.module';
import {ConfigurationService} from './shared/configuration.service';
import {AutofocusDirective} from './auto-focus.directive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {IConfig, NgxMaskModule} from 'ngx-mask';
// export const options: Partial<IConfig> | (() => Partial<IConfig>);
import { NgxMaskModule } from 'ngx-mask';
// import { IConfig } from 'ngx-mask';
// import {CharDirective} from './common/elements/mask';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AutofocusDirective,
    // CharDirective


  ],
  imports: [
    // BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ConfigurationModule,
    ButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    // FormsModule,
    MediaModule,
    TagModule,
    UserModule,
    // NgxMaskModule.forRoot(options)
    // ColorPickerModule
    // CoModule

  ],
  providers: [ConfigurationService],
  bootstrap: [AppComponent],
    // schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule { }
