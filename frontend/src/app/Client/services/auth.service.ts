// IMPORTANT To create this auth.service.ts === ng g s services/auth --skipTests=true
import { Injectable } from '@angular/core';
// Http modules to use httpclient
import { HttpClient, HttpHeaders } from '@angular/common/http';
// Import Observable and Oberservable validators
import { Observable } from 'rxjs';
import { first, catchError } from 'rxjs/operators';
// Import the Username model
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

  // AuthService.signup()
  // Observable<Username> == Observable of type Usernam
  // username: Omit<Username, "id">
  signup(username: Omit<Username, "id">): Observable<Username> {
    // HTTP method post the Username Model to the signupUrl that contains the username (model)
    // (hover on username at line 32 or 35 to remember) with the help of the httpOptions
    // .pipe() deals with checking errors within Observable object
    return this.http.post<Username>(this.signupUrl, username, this.httpOptions).pipe(
      // first() operator returns the reply from the server, check backend(auth.controller.user)
      first(), 
      // catchError() calls the errorHandlerService.handleError to the passed Username model from the form
      // "signup" replaces the operation string to signup check error-handler.service.ts line 12
      catchError(this.errorHandlerService.handleError<Username>("signup"))
    )
  }
}