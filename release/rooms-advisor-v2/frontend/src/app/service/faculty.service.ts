import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  uri = 'https://roomadvisor-backend.herokuapp.com/faculty';

  constructor(private http: HttpClient) { }

  addFaculty(facultyHomeAddress, facultyHomeImage, facultyHomeImages, facultyRooms, facultyPerRoom, facultyBathroom,
    facultyTelevision, facultyInternetAccess, facultyAircondition, facultyFoodFee,
    facultyMonthlyFee, facultyDescription, facultyName, facultyImage, facultyAge, 
    facultyGender, facultyPhoneNumber, facultyEmailAddress) {
    const obj = {
      facultyHomeAddress, facultyHomeImage, facultyHomeImages, facultyRooms, facultyPerRoom, facultyBathroom,
      facultyTelevision, facultyInternetAccess, facultyAircondition, facultyFoodFee,
      facultyMonthlyFee, facultyDescription, facultyName, facultyImage, facultyAge, 
      facultyGender, facultyPhoneNumber, facultyEmailAddress
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj).subscribe(res => console.log('Done'));
    this.getFaculty();
  }
  editFaculty(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }
  checkFaculty(id) {
    return this
            .http
            .get(`${this.uri}/check/${id}`);
  }
  getFaculty() {
    return this
      .http
      .get(`${this.uri}`);
  }
  updateFaculty(facultyHomeAddress, facultyHomeImage, facultyHomeImages, facultyRooms, facultyPerRoom, facultyBathroom,
    facultyTelevision, facultyInternetAccess, facultyAircondition, facultyFoodFee,
    facultyMonthlyFee, facultyDescription, facultyName, facultyImage, facultyAge, 
    facultyGender, facultyPhoneNumber, facultyEmailAddress, id){
    const obj = {
      facultyHomeAddress, facultyHomeImage, facultyHomeImages, facultyRooms, facultyPerRoom, facultyBathroom,
      facultyTelevision, facultyInternetAccess, facultyAircondition, facultyFoodFee,
      facultyMonthlyFee, facultyDescription, facultyName, facultyImage, facultyAge, 
      facultyGender, facultyPhoneNumber, facultyEmailAddress
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Please refresh to see changes.'));
      this.getFaculty();
  }
  deleteFaculty(id) {
    return this
      .http
      .get(`${this.uri}/delete/${id}`);
  }
}