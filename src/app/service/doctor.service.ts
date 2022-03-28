import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Doctor } from './../models/doctor';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';

const doctorURL = "http://localhost:6060/doctor"

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(public httpClient:HttpClient) { }

  getDoctors():Observable<Doctor[]>{
    return this.httpClient.get<Doctor[]>(doctorURL)
        .pipe(
          retry(1), // consider changing this to 0.
          catchError(this.errorHandler)
        );
  }

  //Getting a single patient
  //"http://localhost:6060/patient/99
  getDoctor(doctorId: number): Observable<Doctor> {
    return this.httpClient.get<Doctor>(`${doctorURL}/${doctorId}`)
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
