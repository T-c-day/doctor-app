import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Patient } from 'src/app/models/patient';
import { PatientHandlerService } from 'src/app/services/patient-handler.service';

<<<<<<< HEAD
=======

>>>>>>> e004fd8d5bb7d1d4f8b510e13035c68c053c90b8
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
                  .subscribe((data) => {
                      this.patient = data
                    }, err => this.errorMessage = err)

  }
<<<<<<< HEAD
}
=======
}
>>>>>>> e004fd8d5bb7d1d4f8b510e13035c68c053c90b8
