import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DormitoryService } from '../../../service/dormitory.service';

@Component({
  selector: 'app-dormitory-create',
  templateUrl: './dormitory-create.component.html',
  styleUrls: ['./dormitory-create.component.scss']
})
export class DormitoryCreateComponent implements OnInit {

  angForm: FormGroup;

  constructor(private zone: NgZone, private fb: FormBuilder, private ms: DormitoryService, private router: Router) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      // Dormitory Information
      dormName: ['', Validators.required],
      dormAdress: ['', Validators.required],
      dormImage: ['', Validators.required],
      dormImages: ['', Validators.required], 
      // Dormitory Ameneties
      dormRooms: ['', Validators.required], // First Line
      dormStudentPerRoom: ['', Validators.required], // First Line
      dormBathroom: ['', Validators.required], // First Line
      dormTelevision: ['', Validators.required], // Second Line
      dormInternetAccess: ['', Validators.required], // Second Line
      dormAircondition: ['', Validators.required], // Third Line
      dormElectricFan: ['', Validators.required], // Third Line
      dormKitchen: ['', Validators.required], // Fourth Line
      dormKitchenUtensils: ['', Validators.required],  // Fourth Line
      dormMonthlyFee: ['', Validators.required], // Near Dormitory Information
      dormDescription: ['', Validators.required], // Fourth Line
      // Dormitory Owner Information
      dormDeanName: ['', Validators.required],
      dormDeanImage: ['', Validators.required],
      dormDeanAge: ['', Validators.required],
      dormDeanGender: ['', Validators.required],
      dormDeanPhoneNumber: ['', Validators.required],
      dormDeanEmailAddress: ['', Validators.required]
    });
  }

  addDormitory(dormName, dormAdress, dormImage, dormImages, dormRooms,
    dormStudentPerRoom, dormBathroom, dormTelevision, dormInternetAccess, dormAircondition,
    dormElectricFan, dormKitchen, dormKitchenUtensils ,dormMonthlyFee, dormDescription, 
    dormDeanName, dormDeanImage,dormDeanAge, dormDeanGender, dormDeanPhoneNumber, 
    dormDeanEmailAddress) {
    this.ms.addDormitory(dormName, dormAdress, dormImage, dormImages, dormRooms,
      dormStudentPerRoom, dormBathroom, dormTelevision, dormInternetAccess, dormAircondition,
      dormElectricFan, dormKitchen, dormKitchenUtensils ,dormMonthlyFee, dormDescription, 
      dormDeanName, dormDeanImage,dormDeanAge, dormDeanGender, dormDeanPhoneNumber, 
      dormDeanEmailAddress);
    // this.router.navigate(['Dormitory/List']).then(() => {window.location.reload();
    // });
    this.zone.run(() => {
      this.router.navigateByUrl('Dormitory/List');
    });
  }
  

  ngOnInit(): void {
  }

}
