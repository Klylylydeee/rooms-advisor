import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Username } from '../Models/Username';
import { Properties } from '../Models/Properties';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private authUrl = "http://localhost:5000/api/properties/";

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };
  
  constructor(private http: HttpClient, private errorHandlerService:ErrorHandlerService) { 

  }

  fetchAll(): Observable<Properties[]> {
    return this.http
      .get<Properties[]>(this.authUrl, { responseType: "json" })
      .pipe(
        catchError(this.errorHandlerService.handleError<Properties[]>("fetchAll", []))
      );
  }

  createPost(formValue: Partial<Properties>, userId: Pick<Username, "userId">): Observable<Properties> {
    return this.http.post<Properties>(this.authUrl, { propertyTitle: formValue.propertyTitle, propertyDescription: formValue.propertyDescription, userId: userId} ,this.httpOptions)
    .pipe( 
      catchError(this.errorHandlerService.handleError<Properties>("createPosts"))
    );
  }

  deletePosts(propertyId: Pick<Properties, "propertyId">): Observable<{}> {
    return this.http.delete<Properties>(`${this.authUrl}/${propertyId}`, this.httpOptions)
    .pipe( 
      catchError(this.errorHandlerService.handleError<Properties>("deletePosts"))
    );
  }

}
