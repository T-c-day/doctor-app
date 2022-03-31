import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientLoginComponent } from './component/patient-login/patient-login.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { SearchresultsComponent } from './component/searchresults/searchresults.component';
import { DoctorComponent } from './component/doctor/doctor.component';
import { SpotlightComponent } from './component/spotlight/spotlight.component';
import { ShowcaseComponent } from './component/showcase/showcase.component';
import { SearchformComponent } from './component/searchform/searchform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DoctorService } from './services/doctor.service';
import { PatientHandlerService } from './services/patient-handler.service';

@NgModule({
  declarations: [
    AppComponent,
    PatientLoginComponent,
    NavbarComponent,
    FooterComponent,
    SearchresultsComponent,
    DoctorComponent,
    SpotlightComponent,
    ShowcaseComponent,
    SearchformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [DoctorService, PatientHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
