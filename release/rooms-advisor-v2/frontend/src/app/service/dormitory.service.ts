import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DormitoryService {

  uri = 'https://roomadvisor-backend.herokuapp.com/dormitory';

  constructor(private http: HttpClient) { }
  
  addDormitory(dormName, dormAdress, dormImage, dormImages, dormRooms,
    dormStudentPerRoom, dormBathroom, dormTelevision, dormInternetAccess, dormAircondition,
    dormElectricFan, dormKitchen, dormKitchenUtensils ,dormMonthlyFee, dormDescription, 
    dormDeanName, dormDeanImage,dormDeanAge, dormDeanGender, dormDeanPhoneNumber, 
    dormDeanEmailAddress){
    const obj = {
      dormName, dormAdress, dormImage, dormImages, dormRooms,
      dormStudentPerRoom, dormBathroom, dormTelevision, dormInternetAccess, dormAircondition,
      dormElectricFan, dormKitchen, dormKitchenUtensils ,dormMonthlyFee, dormDescription, 
      dormDeanName, dormDeanImage,dormDeanAge, dormDeanGender, dormDeanPhoneNumber, 
      dormDeanEmailAddress
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj).subscribe(res => console.log('Dorm added'));
  }
  editDormitory(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }
  checkDormitory(id) {
    return this
            .http
            .get(`${this.uri}/check/${id}`);
  }
  getDormitory() {
    return this
      .http
      .get(`${this.uri}`);
  }
  updateDormitory(dormName, dormAdress, dormImage, dormImages, dormRooms,
    dormStudentPerRoom, dormBathroom, dormTelevision, dormInternetAccess, dormAircondition,
    dormElectricFan, dormKitchen, dormKitchenUtensils ,dormMonthlyFee, dormDescription, 
    dormDeanName, dormDeanImage,dormDeanAge, dormDeanGender, dormDeanPhoneNumber, 
    dormDeanEmailAddress, id) {
    const obj = {
      dormName, dormAdress, dormImage, dormImages, dormRooms,
      dormStudentPerRoom,dormBathroom, dormTelevision, dormInternetAccess, dormAircondition,
      dormElectricFan, dormKitchen, dormKitchenUtensils ,dormMonthlyFee, dormDescription, 
      dormDeanName, dormDeanImage,dormDeanAge, dormDeanGender, dormDeanPhoneNumber, 
      dormDeanEmailAddress
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Dorm updated.'));
  }
  deleteDormitory(id) {
    return this
      .http
      .get(`${this.uri}/delete/${id}`);
  }
}