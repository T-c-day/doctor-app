import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Appointment } from '../models/appointment';

const apptURL = "http://localhost:6060/appointment";

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {
  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  constructor(public httpClient:HttpClient) { }

  saveAppt(appt:Appointment): Observable<Appointment> {
    return this.httpClient.post<Appointment>(apptURL,appt,this.httpOptions)
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
