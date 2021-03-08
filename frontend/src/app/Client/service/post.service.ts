import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, } from 'rxjs';
import { catchError, finalize, first, tap,} from 'rxjs/operators';

// models
import { Username } from '../Models/Username';
import { Properties } from '../Models/Properties';
import { Review } from '../Models/Review';

// auth
import { ErrorHandlerService } from '../auth/error-handler.service';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  // private propertyUrl = "http://localhost:5000/api/properties/";
  private propertyUrl = "https://rooms-advisor.herokuapp.com/api/properties/";
  // private reviewUrl = "http://localhost:5000/api/reviews/";
  private reviewUrl = "https://rooms-advisor.herokuapp.com/api/reviews/";
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
    return this.http.get<Properties[]>(this.propertyUrl, { responseType: "json" }).pipe(
      finalize(()=>{
        setTimeout(()=>{
          this.loader = false;
        },2000)
      }),
      catchError(this.errorHandlerService.handleError<Properties[]>("fetch error"))
    );
  }

  viewPost(paramPropertyId): Observable<Properties[]>{
    return this.http.get<Properties[]>(`${this.propertyUrl}${paramPropertyId}`, 
    { responseType: "json" }).pipe(
      catchError(this.errorHandlerService.handleError<Properties[]>("View Property"))
    );
  }

  viewPostComments(paramPropertyId): Observable<Properties[]>{
    this.loader = true;
    return this.http.get<Properties[]>(`${this.reviewUrl}${paramPropertyId}`, 
    { responseType: "json" }).pipe(
      tap(() => {
        this.loader = false;
      }),
      catchError(this.errorHandlerService.handleError<Properties[]>("Comments"))
    );
  }
  
  postComments(formValue: Pick<Review, "reviewComment" | "reviewRate">, paramUserId : Pick<Review, "userId">, paramPropertyId: Pick<Review, "propertyId">){
    return this.http.post<Review>(this.reviewUrl, { propertyId: paramPropertyId, userId: paramUserId, reviewComment: formValue.reviewComment, reviewRate: formValue.reviewRate }, this.httpOptions).pipe(
      first(), 
      tap(() => {
        window.location.reload();
      }),
      catchError(this.errorHandlerService.handleError<Review>("create comment"))
    )
  }

  createPost(formValue: Pick<Properties, "propertyType" |"propertyTitle" | "propertyDescription" | "propertyAddress" | "propertyImages">, userId: Pick<Username, "userId">): Observable<Properties> {    
    return this.http.post<Properties>(this.propertyUrl, { propertyTitle: formValue.propertyTitle, propertyType: formValue.propertyType,propertyAddress: formValue.propertyAddress,propertyDescription: formValue.propertyDescription, userId: userId, propertyImages: formValue.propertyImages} ,this.httpOptions).pipe(
      first(), 
      tap(() => {
        this.router.navigate(["posts/view"]);
      }),
      catchError(this.errorHandlerService.handleError<Properties>("signup"))
    )
  }
  

  deletePosts(propertyId: Pick<Properties, "propertyId">): Observable<{}> {
    return this.http.delete<Properties>(`${this.propertyUrl}/${propertyId}`, this.httpOptions)
    .pipe( 
      catchError(this.errorHandlerService.handleError<Properties>("deletePosts"))
    );
  }

}
