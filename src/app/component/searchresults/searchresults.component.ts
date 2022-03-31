import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.css']
})
export class SearchresultsComponent implements OnInit {
  specialty!:string;
  provider!:string;

  constructor() { }

  ngOnInit(): void {
    this.specialty = "default value";
    this.provider = "testing";
  }

  recieveMessage($event: string[])
  {
    this.specialty = $event[0];
    this.provider = $event[1];
  }

  recieveMessage2($event: string[])
  {
    this.specialty = $event[0];
    this.provider = $event[1];
  }
}
