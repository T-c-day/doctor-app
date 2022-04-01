import { NavbarComponent } from './components/navbar/navbar.component';
import { AppComponent } from './app.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'forgot', component: ForgotPasswordComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'home', component: NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
