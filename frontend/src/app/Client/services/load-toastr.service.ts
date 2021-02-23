import { Injectable } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class LoadToastrService {

  constructor(private toastr: ToastrService) { }

  
  showSuccess(param1) {
    this.toastr.info(param1, '', {

    });
  }
}
