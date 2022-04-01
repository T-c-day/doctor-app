import { DoctorService } from '../../services/doctor.service';
import { Component, Input, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/doctor';
import { Router } from '@angular/router';
import { SearchParametersService } from 'src/app/services/search-parameters.service';

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


  //@Input() searchParam:string[] = [];

  displayFlag!:boolean;

  constructor(public DoctorService: DoctorService, public searchService:SearchParametersService, public router: Router ) {
  
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


}
