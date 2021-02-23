import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

  constructor(private httpClient: HttpClient) { }
  uploadImage(vals): Observable<any> {
    let data = vals;

    return this.httpClient.post(
      'https://api.cloudinary.com/v1_1/klylylydeee/image/upload',
      data
    );
  }
}
