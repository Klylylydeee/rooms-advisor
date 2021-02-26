import { Injectable } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class LoadToastrService {

  constructor(private toastr: ToastrService) { }

  // Green
  showSuccess(bodyMessage) {
    this.toastr.success(bodyMessage, `Success`);
  }

  // Red
  showError(bodyMessage) {
    this.toastr.error(bodyMessage, `Error`);
  }

  // Blue
  showInfo(bodyMessage) {
    this.toastr.info(bodyMessage, `Info`);
  }

  // Orange 
  showWarning(bodyMessage) {
    this.toastr.warning(bodyMessage, `Warning`);
  }

}
