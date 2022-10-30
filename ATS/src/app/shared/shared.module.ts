import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { DropdownMultipleComponent } from './components/dropdown-multiple/dropdown-multiple.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentComponent } from './components/content/content.component';


@NgModule({
  declarations: [
    DropdownComponent,
    DropdownMultipleComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [DropdownComponent,
    DropdownMultipleComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ContentComponent]
})
export class SharedModule { }
