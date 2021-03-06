import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http'

import { MapboxOutput } from 'src/app/clients/models/MapboxOutput';

@Injectable({
  providedIn: 'root'
})

export class MapboxService {

  constructor(private httpClient: HttpClient) { }

  search_word(query: String){
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
    return this.httpClient.get(url+query+'.json?access_token='+'pk.eyJ1Ijoia2x5bHlseWRlZWUiLCJhIjoiY2tsb3c4bHoyMDl0MDJxbXh5ZzZ3dWR6OSJ9.hp2Au5hK2f-qbtuHSslxGA'+'&autocomplete=true&country=ph')
    .pipe(
      map((res: MapboxOutput) =>{
        return res.features;
      })
    )
  }

}
