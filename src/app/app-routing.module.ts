import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackofficeComponent } from './protected/backoffice/backoffice.component';
import { ContentComponent } from './public/content/content.component';
import { DashboardComponentComponent } from './public/dashboard-component/dashboard-component.component';
import { LayoutComponent } from './public/layout/layout.component';

import { LoginComponent } from './public/login/login.component';
import { AuthGuard } from './utils/auth.guard';


const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
  { path: '', component: DashboardComponentComponent},
  { path: 'voitures', component: ContentComponent},
  { path: 'login', component: LoginComponent},
  ]},
   {path:'admin',component:BackofficeComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
