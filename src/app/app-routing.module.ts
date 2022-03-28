import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientCreateComponent } from './components/patient-create/patient-create.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { PatientLoginComponent } from './components/patient-login/patient-login.component';

const routes: Routes = [
           { path: '', redirectTo : 'patientList', pathMatch: 'full'},
           { path: 'createPatient', component: PatientCreateComponent },
           { path: 'patientList',   component: PatientListComponent },
           { path: 'patientlogin', component: PatientLoginComponent}
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
