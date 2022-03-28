import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PatientCreateComponent } from './components/patient-create/patient-create.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { PatientHandlerService } from './services/patient-handler.service';
import { PatientLoginComponent } from './components/patient-login/patient-login.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientCreateComponent,
    PatientListComponent,
    PatientLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [PatientHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
