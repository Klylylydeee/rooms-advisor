import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

export interface MapboxOutput{
  attribution: String;
  features: Feature[];
  query: [];
}

export interface Feature{
  place_name: String;
}

@Injectable({
  providedIn: 'root'
})

export class MapboxService {

  constructor(private httpClient: HttpClient) { }

  search_word(query: String){
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
    return this.httpClient.get(url+query+'.json?access_token='+environment.mapbox.accessToken+'&autocomplete=true&country=ph')
    .pipe(
      map((res: MapboxOutput) =>{
        return res.features;
      })
    )
  }

}
