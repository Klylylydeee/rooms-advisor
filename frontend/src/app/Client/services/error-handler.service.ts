import { Injectable } from '@angular/core';
// Maps and returns a observable objects
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ErrorHandlerService {
  // handlerError function that can take in any Type == <T> 
  // operation is a string that describes the function and is currently assigned as operation
  handleError<T>(operation = "operation", result?: T){
    // returns the error that has any type by console logging the operation and msg
    return (response: any): Observable<T> => {
      console.log(response);
      alert(`${operation} Failed: ${response.error.error.message}`);
      return of(result as T)
    }
  }
} 
