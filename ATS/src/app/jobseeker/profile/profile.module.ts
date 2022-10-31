import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EducationsComponent } from './educations/educations.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { EducationAddComponent } from './educations/education-add/education-add.component';
import { ExperiencAddComponent } from './experiences/experience-add/experienc-add.component';
import { CandidateInfoComponent } from './candidate-info/candidate-info.component';


@NgModule({
  declarations: [
    ProfileComponent,
    CandidateInfoComponent,
    EducationsComponent,
    ExperiencesComponent,
    EducationAddComponent,
    ExperiencAddComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule
  ]
})
export class ProfileModule { }