import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Patient } from 'src/app/models/patient';
import { PatientLoginComponent } from '../patient-login/patient-login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  //@ViewChild(PatientLoginComponent) child: any;
  curPatient!:Patient;
  constructor() { }

  toggleRes:boolean = false;
  toggleLogin:boolean = false;

  ngOnInit(): void {
  }

  ngAfterViewInit()
  {
    
    //this.curPatient = this.child.patient;
  }
  ngOnChanges()
  {
    //this.curPatient = this.child.patient;
    console.log("CurPatient" + this.curPatient+ " 1");
  }

  recieveMessage($event: Patient)
  {
    this.curPatient = $event;
    this.toggleRes = !this.toggleRes;
    console.log("CurPatient: " + this.curPatient.username + " 2");
  }

  toggleLoginField()
  {
    this.toggleLogin = !this.toggleLogin;
  }

  signOut()
  {
    this.toggleLogin = false;
    this.toggleRes = false;
    
  }

}