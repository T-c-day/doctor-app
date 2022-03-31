import { DoctorService } from '../../services/doctor.service';
import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/doctor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  
  doctors: Doctor[] = [];
  errorMessage !: string


  constructor(public DoctorService: DoctorService, public router: Router ) { }

  ngOnInit(): void {
  }

  displayDoctorInfo(){
    console.log();
    this.DoctorService.getDoctors().subscribe((data:any)=>{
      this.doctors= data;
    }, err => this.errorMessage = err)
  }



}
