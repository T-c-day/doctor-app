import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Patient } from 'src/app/models/patient';
import { PatientHandlerService } from 'src/app/services/patient-handler.service';


@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})
export class PatientLoginComponent implements OnInit 
{
  patient!:Patient;
  username:String = "";
  password:String = "";
  errorMessage!:String;

  toggleLogin:boolean = false;

  @Output() messageEvent = new EventEmitter<Patient>();


  loginForm!:FormGroup;
  constructor(public formBuilder:FormBuilder, public patientService: PatientHandlerService) { }

  ngOnInit(): void 
  {
    this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    })
  }

  login()
  {
    console.log("Attempting to login to: " + this.loginForm.controls['username'].value);

    this.patientService.loginPatient(
            this.loginForm.controls['username'].value, 
            this.loginForm.controls['password'].value)
                  .subscribe((data:Patient) => {
                      this.patient = data; console.log("Data: " + data); 
                      this.messageEvent.emit(this.patient);
                    }, err => this.errorMessage = err)
                    //console.log("Patient Result: " + this.patient.username);
  }
  sendMessage()
  {
    console.log(this.patient);
    this.messageEvent.emit(this.patient);
  }
  ngOnChanges()	
  {
    this.sendMessage();
    console.log();
  }

  toggleLoginField()
  {
    this.toggleLogin = !this.toggleLogin;
  }
}