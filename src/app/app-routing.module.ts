import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientLoginComponent } from './components/patient-login/patient-login.component';

const routes: Routes = [
  {path: 'loginPatient', component: PatientLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
