import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, } from 'rxjs';
import { catchError, finalize, first, tap,} from 'rxjs/operators';

// models
import { Username } from '../Models/Username';
import { Properties } from '../Models/Properties';

// auth
import { ErrorHandlerService } from '../auth/error-handler.service';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  // private authUrl = "http://localhost:5000/api/properties/";
  private authUrl = "https://rooms-advisor.herokuapp.com/api/properties/";
  loader: boolean = true;

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };
  
  constructor(private http: HttpClient, private errorHandlerService:ErrorHandlerService,private router: Router) { 
  }

  fetchAll(): Observable<Properties[]> {
    this.loader = true;
    return this.http.get<Properties[]>(this.authUrl, { responseType: "json" }).pipe(
      finalize(()=>{
        setTimeout(()=>{
          this.loader = false;
        },2000)
      }),
      catchError(this.errorHandlerService.handleError<Properties[]>("fetch error"))
    );
  }

  viewPost(paramPropertyId): Observable<Properties[]>{
    return this.http.get<Properties[]>(`${this.authUrl}${paramPropertyId}`, 
    { responseType: "json" }).pipe(
      catchError(this.errorHandlerService.handleError<Properties[]>("View Property"))
    );
  }

  createPost(formValue: Pick<Properties, "propertyType" |"propertyTitle" | "propertyDescription" | "propertyAddress" | "propertyImages">, userId: Pick<Username, "userId">): Observable<Properties> {    
    return this.http.post<Properties>(this.authUrl, { propertyTitle: formValue.propertyTitle, propertyType: formValue.propertyType,propertyAddress: formValue.propertyAddress,propertyDescription: formValue.propertyDescription, userId: userId, propertyImages: formValue.propertyImages} ,this.httpOptions).pipe(
      first(), 
      tap(() => {
        this.router.navigate(["posts/view"]);
      }),
      catchError(this.errorHandlerService.handleError<Properties>("signup"))
    )
  }
  

  deletePosts(propertyId: Pick<Properties, "propertyId">): Observable<{}> {
    return this.http.delete<Properties>(`${this.authUrl}/${propertyId}`, this.httpOptions)
    .pipe( 
      catchError(this.errorHandlerService.handleError<Properties>("deletePosts"))
    );
  }

}
