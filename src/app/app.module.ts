import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PatientLoginComponent } from './components/patient-login/patient-login.component';
import { SearchformComponent } from './components/searchform/searchform.component';
import { SearchresultsComponent } from './components/searchresults/searchresults.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { SignupComponent } from './components/signup/signup.component';
import { SpotlightComponent } from './components/spotlight/spotlight.component';
import { HttpClientModule } from '@angular/common/http';
import { DoctorService } from './services/doctor.service';
import { PatientHandlerService } from './services/patient-handler.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    DoctorComponent,
    FooterComponent,
    NavbarComponent,
    PatientLoginComponent,
    SearchformComponent,
    SearchresultsComponent,
    ShowcaseComponent,
    SignupComponent,
    SpotlightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [DoctorService, PatientHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
