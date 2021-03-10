import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BedspacerService {

  uri = 'https://roomadvisor-backend.herokuapp.com/bedspacer';

  constructor(private http: HttpClient) { }

  addBedspacer(bedHomeName, bedAdress, bedImage, bedImages, bedRooms,
    bedStudentPerRoom, bedBathroom, bedTelevision, bedInternetAccess, bedAircondition,
    bedElectricFan, bedKitchen ,bedMonthlyFee, bedDescription, bedOwnerName,
    bedOwnerImage,bedOwnerAge, bedOwnerGender, bedOwnerPhoneNumber, bedOwnerEmailAddress){
    const obj = {
      bedHomeName, bedAdress, bedImage, bedImages, bedRooms,
      bedStudentPerRoom, bedBathroom, bedTelevision, bedInternetAccess, bedAircondition,
      bedElectricFan, bedKitchen ,bedMonthlyFee, bedDescription, bedOwnerName,
      bedOwnerImage,bedOwnerAge, bedOwnerGender, bedOwnerPhoneNumber, bedOwnerEmailAddress
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj).subscribe(res => console.log('Done'));
    this.getBedspacer();
  }
  editBedspacer(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }
  checkBedspacer(id) {
    return this
            .http
            .get(`${this.uri}/check/${id}`);
  }
  getBedspacer() {
    return this
      .http
      .get(`${this.uri}`);
  }
  updateBedspacer(bedHomeName, bedAdress, bedImage, bedImages, bedRooms,
    bedStudentPerRoom, bedBathroom, bedTelevision, bedInternetAccess, bedAircondition,
    bedElectricFan, bedKitchen ,bedMonthlyFee, bedDescription, bedOwnerName,
    bedOwnerImage,bedOwnerAge, bedOwnerGender, bedOwnerPhoneNumber, bedOwnerEmailAddress, id){
    const obj = {
      bedHomeName, bedAdress, bedImage, bedImages, bedRooms,
      bedStudentPerRoom, bedBathroom, bedTelevision, bedInternetAccess, bedAircondition,
      bedElectricFan, bedKitchen ,bedMonthlyFee, bedDescription, bedOwnerName,
      bedOwnerImage,bedOwnerAge, bedOwnerGender, bedOwnerPhoneNumber, bedOwnerEmailAddress
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Please refresh to see changes.'));
      this.getBedspacer();
  }
  deleteBedspacer(id) {
    return this
      .http
      .get(`${this.uri}/delete/${id}`);
  }
}