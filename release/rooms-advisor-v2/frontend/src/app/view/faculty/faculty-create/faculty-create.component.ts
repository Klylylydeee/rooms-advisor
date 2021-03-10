import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FacultyService } from '../../../service/faculty.service';

@Component({
  selector: 'app-faculty-create',
  templateUrl: './faculty-create.component.html',
  styleUrls: ['./faculty-create.component.scss']
})
export class FacultyCreateComponent implements OnInit {

  angForm: FormGroup;

  constructor(private zone: NgZone, private fb: FormBuilder, private ms: FacultyService, private router: Router) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      // Information
      facultyHomeAddress: ['', Validators.required],
      facultyHomeImage: ['', Validators.required],
      facultyHomeImages: ['', Validators.required],
      facultyMonthlyFee: ['', Validators.required],
      // Amenities
      facultyRooms: ['', Validators.required], 
      facultyPerRoom: ['', Validators.required], 
      facultyBathroom: ['', Validators.required], 
      facultyTelevision: ['', Validators.required],
      facultyInternetAccess: ['', Validators.required],
      facultyAircondition: ['', Validators.required],
      facultyFoodFee: ['', Validators.required], 
      facultyDescription: ['', Validators.required],  
      // Owner
      facultyName: ['', Validators.required], 
      facultyImage: ['', Validators.required], 
      facultyAge: ['', Validators.required],
      facultyGender: ['', Validators.required],
      facultyPhoneNumber: ['', Validators.required],
      facultyEmailAddress: ['', Validators.required]
    });
  }

  addFaculty(facultyHomeAddress, facultyHomeImage, facultyHomeImages, facultyRooms, facultyPerRoom, facultyBathroom,
    facultyTelevision, facultyInternetAccess, facultyAircondition, facultyFoodFee,
    facultyMonthlyFee, facultyDescription, facultyName, facultyImage, facultyAge, 
    facultyGender, facultyPhoneNumber, facultyEmailAddress) {
    this.ms.addFaculty(facultyHomeAddress, facultyHomeImage, facultyHomeImages, facultyRooms, facultyPerRoom, facultyBathroom,
     facultyTelevision, facultyInternetAccess, facultyAircondition, facultyFoodFee,
     facultyMonthlyFee, facultyDescription, facultyName, facultyImage, facultyAge, 
     facultyGender, facultyPhoneNumber, facultyEmailAddress);
    // this.router.navigate(['Faculty/List']).then(() => {window.location.reload();
    // });
    this.zone.run(() => {
      this.router.navigateByUrl('Faculty/List');
    });
  }
  

  ngOnInit(): void {
  }

}
