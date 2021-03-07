import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MapsService {

  constructor(private httpClient: HttpClient) { }

  getLocation(): any {
    return this.httpClient.get("https://ipinfo.io/ip?token=75e1cc79ae8376")
  }

}
