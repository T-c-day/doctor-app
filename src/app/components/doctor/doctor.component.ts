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

  //appt !: Appointment
  apptForm !: FormGroup
  successMessage! : string
  selectedIndex !: number
  selectedDoctor !: Doctor
  appointment:Appointment = new Appointment();
  //@Input() searchParam:string[] = [];

  displayFlag!:boolean;

  constructor(public DoctorService: DoctorService, public searchService:SearchParametersService, public router: Router, public patientData: PatientHandlerService, public apptData:AppointmentsService) {
  
   }

  ngOnInit(): void {

    this.displayBySearch(this.searchSpec, this.searchPro); // this.searchSpec
  }

  displayDoctorInfo(){
    console.log();
    this.DoctorService.getDoctors().subscribe((data:any)=>{
      this.doctors= data;
    }, err => this.errorMessage = err)
  }

  displayBySearch(spec:string, pro:string)
  {
    console.log("Specialty: " + spec);
    console.log("Provider: " + pro);
    this.DoctorService.getDoctorsBySpecialty(spec, pro).subscribe((data) =>
    {
      this.doctors = data;
    }, err => this.errorMessage = err)
  }

  ngOnChanges()
  {
    this.displayBySearch(this.searchSpec, this.searchPro);
  }

   display(){

    this.patientData.getPatient(1).subscribe(data => {this.appointment.patient = data;console.log(data)}, err => this.errorMessage = err  );
    this.appointment.doctor=this.selectedDoctor;
    console.log(this.selectedDoctor)
    this.apptData.saveAppt(this.appointment);
    console.log(this.appointment.patient)
   }

   setIndex(i:number){
    this.selectedDoctor = this.doctors[this.selectedIndex];
   }

}
