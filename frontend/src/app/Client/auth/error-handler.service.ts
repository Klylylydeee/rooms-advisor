import { Injectable } from '@angular/core';
import { Router} from "@angular/router";

// Maps and returns a observable objects
import { Observable, of } from 'rxjs';

// webpack
import { LoadToastrService } from '../webpack/load-toastr.service';

@Injectable({
  providedIn: 'root'
})

export class ErrorHandlerService {

  constructor(private router: Router, private loadToastrService: LoadToastrService) {}

  // handlerError function that can take in any Type == <T> 
  // operation is a string that describes the function and is currently assigned as operation
  handleError<T>(operation = "operation", result?: T){
    // returns the error that has any type by console logging the operation and msg
    return (response: any): Observable<T> => {
      this.loadToastrService.showError(`${operation} Failed: ${response.error.error.message}`);
      if(response.error.error.message === "jwt expired"){
        localStorage.removeItem("token");
        this.router.navigate(["home"]).then(() => {
          window.location.reload();
        });
      }
      return of(result as T)
    }
  }

} 
