import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/patient';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  curPatient!:Patient;

  constructor() { }

  toggleRes:boolean = false;
  toggleLogin:boolean = false;
  toggleSignUp:boolean = false;

  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
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

  toggleSignUpField(){
    this.toggleSignUp = !this.toggleSignUp;
  }

  signOut()
  {
    this.toggleLogin = false;
    this.toggleRes = false;
    
  }


}
