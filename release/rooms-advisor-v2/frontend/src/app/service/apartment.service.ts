import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {

  uri = 'https://roomadvisor-backend.herokuapp.com/apartments';
  // uri = 'http://localhost:4000/apartments';

  constructor(private http: HttpClient) { }

  addApartment(AptName,AptAd,AptImg,AptGm,AptBed,AptTv,AptBath,AptWifi,AptFan,AptAir,AptWater,AptEle,AptKit,AptKitU,AptMonthly,AptDesc,AptOwnFN,AptOwnIMG,AptOwnA,AptOwnG,AptOwnPN,AptOwnEA,AptOwnMA,) {
    const obj = {
      AptName,
      AptAd,
      AptImg,
      AptGm,
      AptBed,
      AptTv,
      AptBath,
      AptWifi,
      AptFan,
      AptAir,
      AptWater,
      AptEle,
      AptKit,
      AptKitU,
      AptMonthly,
      AptDesc,AptOwnFN,AptOwnIMG,AptOwnA,AptOwnG,AptOwnPN,AptOwnEA,AptOwnMA,
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj).subscribe(res => console.log('Done'));
    this.getApartment();
  }
  editApartment(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }
  checkApartment(id) {
    return this
            .http
            .get(`${this.uri}/check/${id}`);
  }
  getApartment() {
    return this
      .http
      .get(`${this.uri}`);
  }
  updateApartment(AptName,AptAd,AptImg,AptGm,AptBed,AptTv,AptBath,AptWifi,AptFan,AptAir,AptWater,AptEle,AptKit,AptKitU,AptMonthly,AptDesc,AptOwnFN,AptOwnIMG,AptOwnA,AptOwnG,AptOwnPN,AptOwnEA,AptOwnMA, id) {
    const obj = {
      AptName,
      AptAd,
      AptImg,
      AptGm,
      AptBed,
      AptTv,
      AptBath,
      AptWifi,
      AptFan,
      AptAir,
      AptWater,
      AptEle,
      AptKit,
      AptKitU,
      AptMonthly,
      AptDesc,AptOwnFN,AptOwnIMG,AptOwnA,AptOwnG,AptOwnPN,AptOwnEA,AptOwnMA
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Please refresh to see changes.'));
      this.getApartment();
  }
  deleteApartment(id) {
    return this
      .http
      .get(`${this.uri}/delete/${id}`);
  }

}