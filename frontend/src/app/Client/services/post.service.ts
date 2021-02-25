import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

import { Username } from '../Models/Username';
import { Properties } from '../Models/Properties';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private authUrl = "http://localhost:5000/api/properties/";
  // private authUrl = "https://rooms-advisor.herokuapp.com/api/properties/";

  loader: boolean = true;

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };
  
  constructor(private http: HttpClient, private errorHandlerService:ErrorHandlerService) { 

  }

  fetchAll(): Observable<Properties[]> {
    this.loader = true;
    return this.http
      .get<Properties[]>(this.authUrl, { responseType: "json" }).pipe(
        finalize(()=>{
          setTimeout(()=>{
            this.loader = false;
          },2000)
        }),
        catchError(this.errorHandlerService.handleError<Properties[]>("fetch error"))
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
