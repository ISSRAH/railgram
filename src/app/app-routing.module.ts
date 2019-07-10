import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MyrailComponent } from './myrail/myrail.component';
import { FollowComponent } from './follow/follow.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent, children: [
      {path: 'myrail', component: MyrailComponent},
      {path: 'follow', component: FollowComponent}]},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
