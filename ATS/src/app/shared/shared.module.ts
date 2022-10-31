import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { DropdownMultipleComponent } from './components/dropdown-multiple/dropdown-multiple.component';
import { ContentComponent } from './components/content/content.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddressComponent } from './components/address/address.component';
import { ContactComponent } from './components/contact/contact.component';

let components =[
  DropdownComponent,
  DropdownMultipleComponent,
  ContentComponent,
  AddressComponent,
  ContactComponent

]
@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ...components

  ]
})
export class SharedModule { }
