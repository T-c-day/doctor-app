import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchParametersService 
{
  public displaySearchFlag:boolean = false;
  public searchProvider!:any;
  public searchSpecialty!:any;

  public specSource = new BehaviorSubject<string>(this.searchSpecialty);
  public proSource = new BehaviorSubject<string>(this.searchProvider);

  constructor() { }

  toggleDisplayFlag()
  {
    this.displaySearchFlag = !this.displaySearchFlag;
  }

  setSearchParameters(arg1:string, arg2:string)
  {
    this.searchSpecialty = arg1;
    this.searchProvider = arg2;
    console.log(arg1 + " " + arg2);
  }

  getSearchSpecialty()
  {
    console.log(this.searchSpecialty);
    return this.searchSpecialty;
  }
  getSearchProvider()
  {
    console.log(this.searchProvider);
    return this.searchProvider;
  }
  getDisplayFlag()
  {
    return this.displaySearchFlag;
  }

  doSearchByParameters(arg1:string, arg2:string)
  {
    this.specSource.asObservable().subscribe(data => this.searchSpecialty = data);
    this.proSource.asObservable().subscribe(data => this.searchProvider = data);

    console.log("Sending: " + this.searchSpecialty + " " + this.searchProvider);


    this.setSearchParameters(arg1, arg2);
    this.toggleDisplayFlag();
  }
}
