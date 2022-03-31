import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry,throwError } from 'rxjs';
import { Patient } from '../models/patient';


const patientURL = "http://localhost:6060/patient";

@Injectable({
  providedIn: 'root'
})
export class PatientHandlerService
{
  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

<<<<<<< HEAD

=======
>>>>>>> e004fd8d5bb7d1d4f8b510e13035c68c053c90b8
  constructor(public httpClient:HttpClient) { }

  getPatients():Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(patientURL)
        .pipe(
          retry(1), // consider changing this to 0.
          catchError(this.errorHandler)
        );
  }

<<<<<<< HEAD
  //Getting a single patient
  //"http://localhost:6060/patient/99
=======
>>>>>>> e004fd8d5bb7d1d4f8b510e13035c68c053c90b8
  getPatient(patientId: number): Observable<Patient> {
    return this.httpClient.get<Patient>(`${patientURL}/${patientId}`)
    .pipe(
      retry(0),
      catchError(this.errorHandler)
    );
  }

<<<<<<< HEAD
  //saving a single product
  //"http://localhost:3000/product
=======
>>>>>>> e004fd8d5bb7d1d4f8b510e13035c68c053c90b8
  savePatient(patient:Patient): Observable<Patient> {
    return this.httpClient.post<Patient>(patientURL,patient,this.httpOptions)
    .pipe(
      retry(0),
      catchError(this.errorHandler)
    );
  }

  loginPatient(username:String, password:String): Observable<Patient>
  {
    return this.httpClient.get<Patient>(`${patientURL}/${username}/${password}`)
    .pipe(
      retry(0),
      catchError(this.errorHandler)
    );
  }
  
  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Happened\n Error Details \nError Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
