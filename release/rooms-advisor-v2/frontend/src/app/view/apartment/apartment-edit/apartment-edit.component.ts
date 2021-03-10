import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApartmentService } from '../../../service/apartment.service';
import Apartment from '../../../service/Apartment';
import {ApartmentListComponent} from '../apartment-list/apartment-list.component';
@Component({
  selector: 'app-apartment-edit',
  templateUrl: './apartment-edit.component.html',
  styleUrls: ['./apartment-edit.component.scss']
})
export class ApartmentEditComponent implements OnInit {
  angForm: FormGroup;
  apartment: any = {};
  constructor(private zone: NgZone, private route: ActivatedRoute, private router: Router, private ms: ApartmentService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      AptName: ['', Validators.required],
      AptAd: ['', Validators.required],
      AptImg: ['', Validators.required],
      AptGm: ['', Validators.required],
  
      AptBed: ['', Validators.required],
      AptTv: ['', Validators.required],
      AptBath: ['', Validators.required],
      AptWifi: ['', Validators.required],
  
      AptFan: ['', Validators.required],
      AptAir: ['', Validators.required],
      AptWater: ['', Validators.required],
      AptEle: ['', Validators.required],
      AptKit: ['', Validators.required],
      AptKitU: ['', Validators.required],
      AptMonthly: ['', Validators.required],
      AptDesc:  ['', Validators.required],
      AptOwnFN: ['', Validators.required],
      AptOwnIMG:['', Validators.required],
      AptOwnA: ['', Validators.required],
      AptOwnG: ['', Validators.required],
      AptOwnPN: ['', Validators.required],
      AptOwnEA: ['', Validators.required],
      AptOwnMA: ['', Validators.required]
    });
  }
  

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.ms.editApartment(params[`id`]).subscribe(res => {
        this.apartment = res;
      });
    });
  }
  
  updateApartment(AptName,AptAd,AptImg,AptGm,AptBed,AptTv,AptBath,AptWifi,AptFan,AptAir,AptWater,AptEle,AptKit,AptKitU,AptMonthly,AptDesc,AptOwnFN,AptOwnIMG,AptOwnA,AptOwnG,AptOwnPN,AptOwnEA,AptOwnMA) {
    this.route.params.subscribe(params => {
      this.ms.updateApartment(AptName,AptAd,AptImg,AptGm,AptBed,AptTv,AptBath,AptWifi,AptFan,AptAir,AptWater,AptEle,AptKit,AptKitU,AptMonthly,AptDesc,AptOwnFN,AptOwnIMG,AptOwnA,AptOwnG,AptOwnPN,AptOwnEA,AptOwnMA, params.id);
      // this.ngZone.run(() => this.router.navigateByUrl(url))
      this.zone.run(() => {
        this.router.navigateByUrl('Apartment/List');
      });
      // this.router.navigate(['Apartment/List']).then(() => {window.location.reload();
      // });
    });
  }
}