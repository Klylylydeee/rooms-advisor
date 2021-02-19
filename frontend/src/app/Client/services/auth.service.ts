// IMPORTANT To create this auth.service.ts === ng g s services/auth --skipTests=true
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// Http modules to use httpclient
import { HttpClient, HttpHeaders } from '@angular/common/http';
// Import Observable and Oberservable validators
import { BehaviorSubject, Observable } from 'rxjs';
import { first, tap, catchError } from 'rxjs/operators';
// Import the Username model
import { Username } from '../Models/Username';
import { ErrorHandlerService } from './error-handler.service';

import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  
  // private authUrl = "http://localhost:5000/api/auth";
  private authUrl = "https://rooms-advisor.herokuapp.com/api/auth";
  
  // variable basis for whether the user has logged in or not
  isUserLoggedIn$ = new BehaviorSubject<boolean>(localStorage.getItem("token") !== null);
  // global variable to user the logged in userId
  userId: Pick<Username, "userId">;
  username: Pick<Username, "username">;

  helper = new JwtHelperService();

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  constructor(
    private http: HttpClient, 
    private errorHandlerService: ErrorHandlerService,
    private router: Router) { }

  getToken(storedToken: string): any {
    const decodedToken = this.helper.decodeToken(storedToken);
    this.userId = decodedToken.userId;
    this.username = decodedToken.username;
  }
  
  // AuthService.signup()
  // Observable<Username> == Observable of type Usernam
  signup(username: Omit<Username, "id">): Observable<Username> {
    // HTTP method post the Username Model to the signupUrl that contains the username (model)
    // (hover on username at line 32 or 35 to remember) with the help of the httpOptions
    // .pipe() deals with checking errors within Observable object
    return this.http.post<Username>(`${this.authUrl}/signup`, username, this.httpOptions).pipe(
      // first() operator returns the reply from the server, check backend(auth.controller.user)
      first(), 
      // catchError() calls the errorHandlerService.handleError to the passed Username model from the form
      // "signup" replaces the operation string to signup check error-handler.service.ts line 12
      catchError(this.errorHandlerService.handleError<Username>("signup"))
    )
  }

  // AuthService.signup()
  // username: Pick<Username, "username"> == set the username as through Picking(specifically 
  // selecting one object from the Username model which is the type username, line5 of Username.ts)
  login(username: Pick<Username, "username">, password: Pick<Username, "password">): Observable<{
    // Observes the objects to be passed by the server, ln71 of auth.controller.user.js 
    token: string; 
  }> {
    return this.http.post(`${this.authUrl}/login`, { username, password }, this.httpOptions).pipe(
      tap(( tokenObject: { 
          token: string; 
          username: Pick<Username, "username">;
          userId: Pick<Username, "userId">;
          email: Pick<Username, "email">;
        }) => {
          this.getToken(tokenObject.token);
          // stores the token from the backend into the local storage
          localStorage.setItem("token", tokenObject.token);
          // initiate the global variable to true since the user has logged in
          this.isUserLoggedIn$.next(true);
          // reroutes the user to the posts section of the router, check ln35
          this.router.navigate(["Home"]);
        }),
        // catchError() calls the errorHandlerService.handleError to the passed Username model from the form
        // "signup" replaces the operation string to signup check error-handler.service.ts line 12
        // I remvoed this function as it blocks the error to passed into the component
      // catchError(this.errorHandlerService.handleError<{
      //   token: string; 
      // }>("Login"))
    );
  }

}