import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { PatientCreateComponent } from './components/patient-create/patient-create.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { PatientLoginComponent } from './components/patient-login/patient-login.component';

const routes: Routes = [
           { path: '', redirectTo : 'patientList', pathMatch: 'full'},
           { path: 'createPatient', component: PatientCreateComponent },
           { path: 'patientList',   component: PatientListComponent },
           { path: 'patientlogin', component: PatientLoginComponent}
    ];
=======

const routes: Routes = [];
>>>>>>> e004fd8d5bb7d1d4f8b510e13035c68c053c90b8

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
