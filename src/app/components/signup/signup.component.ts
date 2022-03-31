import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Patient } from 'src/app/models/patient';
import { PatientHandlerService } from 'src/app/services/patient-handler.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  patient !: Patient;
  productForm !: FormGroup
  errorMessage!:String;
  successMessage! : string

  constructor(public formBuilder: FormBuilder,public patientService: PatientHandlerService) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      passwrord: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required]
    })
  }

  signup(){
    console.log("sign up")
    this.patientService.savePatient(this.productForm.value).subscribe((data:any) =>{
      this.successMessage = "Account successfully created "
    }, err => this.errorMessage = err)
  }

}
