import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SearchParametersService } from 'src/app/services/search-parameters.service';
import { DoctorService } from '../../services/doctor.service';

@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.css']
})
export class SearchformComponent implements OnInit {
  public selectedProvider!:string;
  public selectedSpecialty!:string;
  temp: string[] = [];

  @Output() messageEvent = new EventEmitter<string[]>();


  sendMesage()
  {
    this.temp[0] = this.selectedSpecialty;
    this.temp[1] = this.selectedProvider;

    console.log("SendMessage() |" + this.temp[0] + " | " + this.temp[1]);
 
    //this.messageEvent.emit(this.temp);
  }

  insuranceoptions = [
    { id: 1, name: 'Insurance'},
    { id: 2, name: 'Aetna'},
    { id: 3, name: 'Anthem Blue Cross Blue Shield'},
    { id: 4, name: 'Cigna'},
    { id: 5, name: 'Tricare'},
    { id: 6, name: 'UnitedHealthCare'},
  ];

  specialtyoptions = [
    { id: 1, name: 'Doctor Specialty'},
    { id: 2, name: 'Primary Care Physician'},
    { id: 3, name: 'Eye Doctor'},
    { id: 4, name: 'Dentist'},
    { id: 5, name: 'Psychiatrist'},
    { id: 6, name: 'Dermatologist'},
  ];

  

  constructor(public docService: DoctorService, public searchService: SearchParametersService, public router: Router) { }

  ngOnInit(): void {
  }

  submitSearchCriteria()
  {
    console.log("Sending: " + this.selectedSpecialty + " " + this.selectedProvider);
    //this.searchService.doSearchByParameters(this.selectedSpecialty, this.selectedProvider);
    this.sendMesage();
  }
  public changeSelectedPro(event:any)
  {
    this.selectedProvider = event.target.value;
  }
  public changeSelectedSpec(event:any)
  {
    this.selectedSpecialty = event.target.value;
  }
}