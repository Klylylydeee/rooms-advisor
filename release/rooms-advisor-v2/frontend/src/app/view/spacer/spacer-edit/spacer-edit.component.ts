import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BedspacerService } from '../../../service/Bedspacer.service';
import Bedspacer from '../../../service/Bedspacer';

@Component({
  selector: 'app-spacer-edit',
  templateUrl: './spacer-edit.component.html',
  styleUrls: ['./spacer-edit.component.scss']
})
export class SpacerEditComponent implements OnInit {
  angForm: FormGroup;
  bedspacer: any = {};

  constructor(private zone: NgZone, private route: ActivatedRoute, private router: Router, private ms: BedspacerService, private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      bedHomeName: ['', Validators.required],
      bedAdress: ['', Validators.required],
      bedImage: ['', Validators.required],
      bedImages: ['', Validators.required],
      bedRooms: ['', Validators.required],
      bedStudentPerRoom: ['', Validators.required],
      bedBathroom: ['', Validators.required],
      bedTelevision: ['', Validators.required],
      bedInternetAccess: ['', Validators.required],
      bedAircondition: ['', Validators.required],
      bedElectricFan: ['', Validators.required],
      bedKitchen: ['', Validators.required],
      bedMonthlyFee: ['', Validators.required],
      bedDescription: ['', Validators.required],
      bedOwnerName: ['', Validators.required],
      bedOwnerImage: ['', Validators.required],
      bedOwnerAge: ['', Validators.required],
      bedOwnerGender: ['', Validators.required],
      bedOwnerPhoneNumber:  ['', Validators.required],
      bedOwnerEmailAddress: ['', Validators.required]
    })
  }

  updateBedspacer(bedHomeName, bedAdress, bedImage, bedImages, bedRooms,
    bedStudentPerRoom, bedBathroom, bedTelevision, bedInternetAccess, bedAircondition,
    bedElectricFan, bedKitchen ,bedMonthlyFee, bedDescription, bedOwnerName,
    bedOwnerImage,bedOwnerAge, bedOwnerGender, bedOwnerPhoneNumber, bedOwnerEmailAddress) {
    this.route.params.subscribe(params => {
      this.ms.updateBedspacer(bedHomeName, bedAdress, bedImage, bedImages, bedRooms,
        bedStudentPerRoom, bedBathroom, bedTelevision, bedInternetAccess, bedAircondition,
        bedElectricFan, bedKitchen ,bedMonthlyFee, bedDescription, bedOwnerName,
        bedOwnerImage,bedOwnerAge, bedOwnerGender, bedOwnerPhoneNumber, bedOwnerEmailAddress, params.id);
        this.zone.run(() => {
          this.router.navigateByUrl('BedSpacer/List');
        });
    });
  }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.ms.editBedspacer(params[`id`]).subscribe(res => {
        this.bedspacer = res;
      });
    });
  }


}
