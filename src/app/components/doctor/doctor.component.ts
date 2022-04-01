import { DoctorService } from '../../services/doctor.service';
import { Component, Input, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/doctor';
import { Router } from '@angular/router';
import { SearchParametersService } from 'src/app/services/search-parameters.service';
import { Patient } from 'src/app/models/patient';
import { PatientHandlerService } from 'src/app/services/patient-handler.service';
import { Appointment } from 'src/app/models/appointment';
import { AppointmentsService } from 'src/app/services/appointments.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  
  doctors: Doctor[] = [];
  errorMessage !: string

  @Input() searchSpec!:string;
  @Input() searchPro!:string;
  @Input() patientId!:number;

  appt !: Appointment
  apptForm !: FormGroup
  successMessage! : string
  selectedIndex !: number
  selectedDoctor !: Doctor
  appointment !: Appointment
  
  displayFlag!:boolean;

  patients: Patient[] = []

  constructor(public DoctorService: DoctorService, public searchService:SearchParametersService, public router: Router, public patientData: PatientHandlerService, public apptData:AppointmentsService) {
    
   }

  ngOnInit(): void {
    console.log("ngOnInit called")
    this.displayBySearch(this.searchSpec, this.searchPro); // this.searchSpec
    
  }

  displayDoctorInfo(){
    console.log("displayDoctorInfo called");
    this.DoctorService.getDoctors().subscribe((data:any)=>{
      this.doctors= data;
    }, err => this.errorMessage = err)
  }

  displayBySearch(spec:string, pro:string)
  {
    console.log("displayBySearch called");
    console.log("Specialty: " + spec);
    console.log("Provider: " + pro);
    //console.log("Here we got "+this.patients)
    this.DoctorService.getDoctorsBySpecialty(spec, pro).subscribe((data) =>
    {
      this.doctors = data;
    }, err => this.errorMessage = err)
  }

  ngOnChanges()
  {
    console.log("ngOnChanges called");
    this.displayBySearch(this.searchSpec, this.searchPro);
  }

   display(patientId: number, symptom: string, desc: string){
    console.log("display called");
    console.log(this.patientId)
    this.patientData.getPatient(patientId).subscribe(data => {this.patients[0] = data;console.log("Data is "+data+" which is "+this.patients)}, err => this.errorMessage = err  );
    //this.appointment.doctor=this.selectedDoctor;
    //console.log(this.patientData)
    //this.apptData.saveAppt(this.appointment);
    
    this.appointment = new Appointment(symptom,desc,5,patientId);
    this.apptData.saveAppt(this.appointment).subscribe((data: any) =>{
      this.successMessage ="Pushed"
    }, err=> this.errorMessage = err)
   }

   setIndex(i:number){
    this.selectedDoctor = this.doctors[this.selectedIndex];
   }

}
