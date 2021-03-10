import { Component, OnInit, NgZone} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DormitoryService } from '../../../service/dormitory.service';
import Dormitory from '../../../service/Dormitory';
import { DormitoryListComponent } from '../dormitory-list/dormitory-list.component';

@Component({
  selector: 'app-dormitory-edit',
  templateUrl: './dormitory-edit.component.html',
  styleUrls: ['./dormitory-edit.component.scss']
})

export class DormitoryEditComponent implements OnInit {
  angForm: FormGroup;
  dormitory: any = {};
  
  constructor(private zone: NgZone, private route: ActivatedRoute, private router: Router, private ms: DormitoryService, private fb: FormBuilder) {
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

  

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.ms.editDormitory(params[`id`]).subscribe(res => {
        this.dormitory = res;
      });
    });
  }
  
  updateDormitory(dormName, dormAdress, dormImage, dormImages, dormRooms,
    dormStudentPerRoom, dormBathroom, dormTelevision, dormInternetAccess, dormAircondition,
    dormElectricFan, dormKitchen, dormKitchenUtensils ,dormMonthlyFee, dormDescription, 
    dormDeanName, dormDeanImage,dormDeanAge, dormDeanGender, dormDeanPhoneNumber, 
    dormDeanEmailAddress) {
    this.route.params.subscribe(params => {
      this.ms.updateDormitory(dormName, dormAdress, dormImage, dormImages, dormRooms,
        dormStudentPerRoom, dormBathroom, dormTelevision, dormInternetAccess, dormAircondition,
        dormElectricFan, dormKitchen, dormKitchenUtensils ,dormMonthlyFee, dormDescription, 
        dormDeanName, dormDeanImage,dormDeanAge, dormDeanGender, dormDeanPhoneNumber, 
        dormDeanEmailAddress, params.id);
    });
    this.zone.run(() => {
      this.router.navigateByUrl('Dormitory/List');
    });
    // this.router.navigate(['Dormitory/List']).then(() => {window.location.reload();
    // });
  }

}
