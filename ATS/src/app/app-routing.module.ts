import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent } from './components/charts/charts.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmptyComponent } from './components/empty/empty.component';
import { FormsComponent } from './components/forms/forms.component';
import { TablesComponent } from './components/tables/tables.component';

const routes: Routes = [
  {path: 'dashboard', component:DashboardComponent},
  {path: 'forms', component:FormsComponent},
  {path: 'tables', component:TablesComponent},
  {path: 'charts', component:ChartsComponent},
  {path: 'empty', component:EmptyComponent},


  { path: 'companies', loadChildren: () => import('./companies/companies.module').then(m => m.CompaniesModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'folders', loadChildren: () => import('./folders/folders.module').then(m => m.FoldersModule) },
  { path: 'interviews', loadChildren: () => import('./interviews/interviews.module').then(m => m.InterviewsModule) },
  { path: 'jobs', loadChildren: () => import('./jobs/jobs.module').then(m => m.JobsModule) },
  { path: 'jobseekers', loadChildren: () => import('./jobseekers/jobseekers.module').then(m => m.JobseekersModule) },
  { path: 'search', loadChildren: () => import('./search/search.module').then(m => m.SearchModule) },
  { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
