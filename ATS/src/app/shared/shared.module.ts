import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { DropdownMultipleComponent } from './components/dropdown-multiple/dropdown-multiple.component';
import { ContentComponent } from './components/content/content.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DropdownComponent,
    DropdownMultipleComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [DropdownComponent,
    DropdownMultipleComponent,
    ContentComponent]
})
export class SharedModule { }
