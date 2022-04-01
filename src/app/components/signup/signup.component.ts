import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Patient } from 'src/app/models/patient';
import { PatientHandlerService } from 'src/app/services/patient-handler.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  patient !: Patient;
  patientForm !: FormGroup;
  errorMessage!:String;
  successMessage! : string
  toggleSignUp:boolean = false;

  constructor(public formBuilder: FormBuilder, public patientService: PatientHandlerService, public router: Router) { }

  ngOnInit(): void {
    this.patientForm = this.formBuilder.group({
      name: ['', Validators.required, Validators.minLength(0)],
      username: ['', Validators.required, Validators.minLength(0)],
      password: ['', Validators.required, , Validators.minLength(0)],
      email: ['', Validators.required, Validators.minLength(0)],
      phoneNumber: ['', Validators.required, Validators.minLength(0)],
      address: ['', Validators.required,, Validators.minLength(0)]
    })
  }

  signup(){
    console.log("sign up")
    console.log(this.patientForm.value)
    this.patientService.savePatient(this.patientForm.value).subscribe((data:any) =>{
      this.successMessage = "Account successfully created "
    }, err => this.router.navigate(['']))
  }

}
