// To create this auth.service.ts === ng g s services/auth --skipTests=true
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { first, catchError } from 'rxjs/operators';

import { Username } from '../Models/Username';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  
  private signupUrl = "http://localhost:3000/api/auth/signup";

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlerService) { 
  }

  signup(username: Omit<Username, "id">): Observable<Username> {
    return this.http.post<Username>(this.signupUrl, username, this.httpOptions).pipe(
      first(), catchError(this.errorHandlerService.handleError<Username>("signup"))
    )
  }
}