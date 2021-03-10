import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BedspacerService } from '../../../service/Bedspacer.service';
@Component({
  selector: 'app-spacer-create',
  templateUrl: './spacer-create.component.html',
  styleUrls: ['./spacer-create.component.scss']
})
export class SpacerCreateComponent implements OnInit {

  angForm: FormGroup;

  constructor(private zone: NgZone, private fb: FormBuilder, private ms: BedspacerService, private router: Router) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      bedHomeName: ['', Validators.required],//First
      bedAdress: ['', Validators.required],//First
      bedImage: ['', Validators.required], //Second
      bedImages: ['', Validators.required],//Second
      bedRooms: ['', Validators.required], //Third
      bedStudentPerRoom: ['', Validators.required], //Fourth
      bedBathroom: ['', Validators.required],//Fourth
      bedTelevision: ['', Validators.required], // Second
      bedInternetAccess: ['', Validators.required],// Second
      bedAircondition: ['', Validators.required],
      bedElectricFan: ['', Validators.required],
      bedKitchen: ['', Validators.required],
      bedMonthlyFee: ['', Validators.required], //First
      bedDescription: ['', Validators.required], //Last
      bedOwnerName: ['', Validators.required], //right
      bedOwnerImage: ['', Validators.required], //right
      bedOwnerAge: ['', Validators.required], //right
      bedOwnerGender: ['', Validators.required], //right
      bedOwnerPhoneNumber:  ['', Validators.required], //right
      bedOwnerEmailAddress: ['', Validators.required] //right
    })
  }
  addBedspacer(bedHomeName, bedAdress, bedImage, bedImages, bedRooms,
    bedStudentPerRoom, bedBathroom, bedTelevision, bedInternetAccess, bedAircondition,
    bedElectricFan, bedKitchen ,bedMonthlyFee, bedDescription, bedOwnerName,
    bedOwnerImage,bedOwnerAge, bedOwnerGender, bedOwnerPhoneNumber, bedOwnerEmailAddress) {
    this.ms.addBedspacer(bedHomeName, bedAdress, bedImage, bedImages, bedRooms,
      bedStudentPerRoom, bedBathroom, bedTelevision, bedInternetAccess, bedAircondition,
      bedElectricFan, bedKitchen ,bedMonthlyFee, bedDescription, bedOwnerName,
      bedOwnerImage,bedOwnerAge, bedOwnerGender, bedOwnerPhoneNumber, bedOwnerEmailAddress);
    this.zone.run(() => {
      this.router.navigateByUrl('BedSpacer/List');
    });
  }

  ngOnInit(): void {
  }

}