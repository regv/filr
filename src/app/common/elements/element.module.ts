import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {InputComponent} from './input/input.component';
import {ButtonComponent} from './button/button.component';
import { GroupBComponent } from './group-b/group-b.component';
import { TextereaComponent } from './texterea/texterea.component';
import { TableComponent } from './table/table.component';
import {SearchComponent} from './search/search.component';
import { TagComponent } from './tag/tag.component';
import { PopupComponent } from './popup/popup.component';
import {AutofocusDirective} from '../../auto-focus.directive';
import {FilterPipe} from '../filter.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToggleComponent} from './toggle/toggle.component';
import { TextereabComponent } from './textereab/textereab.component';
import { PickerComponent } from './picker/picker.component';
import { InputbComponent } from './inputb/inputb.component';
import { ToggleBComponent } from './toggle-b/toggle-b.component';
import {InversePipe} from './inverse.pipe';
// import { SpecialCharacterDirective} from './inverse.pipe';


import {TextMaskModule} from 'angular2-text-mask';
import {SpecialCharacterDirective} from './SP.dirctive';
import { ColorPickerModule } from 'ngx-color-picker';
import { InputuComponent } from './inputu/inputu.component';
import {Url} from './url.validator';
import {MustMatchDirective} from './url.dirctive';

@NgModule({
  declarations: [
   ButtonComponent,
    InputComponent,
    GroupBComponent,
    TextereaComponent,
    TableComponent,
    SearchComponent,
    TagComponent,
    PopupComponent,
    FilterPipe,
    ToggleComponent,
    TextereabComponent,
    PickerComponent,
    InputbComponent,
    ToggleBComponent,
    // EmailValidator
    // CharDirective
    // InversePipe
    SpecialCharacterDirective,
    InputuComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    TextMaskModule,
    ColorPickerModule
  ],
  exports: [
    ButtonComponent,
      InputComponent,
    GroupBComponent,
    TextereaComponent,
    TableComponent,
    SearchComponent,
    TagComponent,
    FilterPipe,
    ReactiveFormsModule,
    PopupComponent,
    PickerComponent,
    ToggleComponent,
    TextereabComponent,
    InputbComponent,
    ToggleBComponent,
    SpecialCharacterDirective,
    InputuComponent,
    // EmailValidator
    // CharDirective
    // InversePipe
  ]

})
export class ElementModule {}
