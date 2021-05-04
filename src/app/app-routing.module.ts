import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailComponent } from './email/email.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [

  { path: '', component: LoginComponent},
  {path:'forgot',component:EmailComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path:'dashboard',component:DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

