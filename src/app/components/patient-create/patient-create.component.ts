import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientHandlerService } from 'src/app/services/patient-handler.service';

@Component({
  selector: 'app-patient-create',
  templateUrl: './patient-create.component.html',
  styleUrls: ['./patient-create.component.css']
})
export class PatientCreateComponent implements OnInit 
{
  patientForm !: FormGroup;
  responseMessage !: string;
  allowId:boolean = false;

  constructor(public formBuilder:FormBuilder, public patientService:PatientHandlerService, public router:Router) 
  {

  }

  ngOnInit(): void 
  {
      this.patientForm = this.formBuilder.group({
        patientId:     ['', Validators.required],
        patientName:   ['', Validators.required],
        username:      ['', Validators.required],
        password:      ['', Validators.required],
        email:         ['', Validators.required],
        phoneNumber:   ['', Validators.required],
        address:       ['', Validators.required]
      })
  }
  displayPatientInfo()
  {
    console.log(this.patientForm.value)
    this.patientService.savePatient(this.patientForm.value).subscribe((data:any) => {
      this.responseMessage = 'Patient with id: ' + this.patientForm.value.patientId + ' was succesfully saved';
      this.router.navigate(['patientList']); 
    }, err => this.router.navigate(['patientList']))
  }

}
