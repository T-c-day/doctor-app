import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/models/patient';
import { PatientHandlerService } from 'src/app/services/patient-handler.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit 
{
  patients      : Patient[] = [];
  errorMessage !: string;

  testP !:Observable<Patient>;

  constructor(public patientService: PatientHandlerService) { }

  ngOnInit(): void 
  {
    this.patientService.getPatient(3).subscribe( data => {console.log("Patient returned" + data);});
    this.refreshPatients();
  }

  
  refreshPatients(){
    this.patientService.getPatients().subscribe((data) => {
      this.patients = data;
    }, err => this.errorMessage = err)
  }

}
