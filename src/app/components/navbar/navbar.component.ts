import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Patient } from 'src/app/models/patient';
import { PatientHandlerService } from 'src/app/services/patient-handler.service';
import { PatientLoginComponent } from '../patient-login/patient-login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  //@ViewChild(PatientLoginComponent) child: any;
  curPatient!:Patient;

  constructor(public patientData: PatientHandlerService) { }

 @Output() messageEvent = new EventEmitter<Patient>();
  //@Input() currentPatient !: Patient

  toggleRes:boolean = false;
  toggleLogin:boolean = false;
  patientNum !: number;

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