import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { SearchresultsComponent } from './component/searchresults/searchresults.component';
import { DoctorComponent } from './component/doctor/doctor.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    SearchresultsComponent,
    DoctorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
