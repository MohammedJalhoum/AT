import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'profile'
  },
  {
    path:'profile',
    loadChildren:() => import('./profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path:'jobs',
    loadChildren:() => import('./job/jobs.module').then(m => m.JobsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobseekersRoutingModule { }
