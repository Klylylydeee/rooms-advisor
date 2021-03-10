import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApartmentService } from '../../../service/apartment.service';

@Component({
  selector: 'app-apartment-create',
  templateUrl: './apartment-create.component.html',
  styleUrls: ['./apartment-create.component.scss']
})
export class ApartmentCreateComponent implements OnInit {
  angForm: FormGroup;
  constructor(private zone: NgZone, private fb: FormBuilder, private ms: ApartmentService, private router: Router) {
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
    AptOwnFN: ['', Validators.required],AptOwnIMG:['', Validators.required],AptOwnA: ['', Validators.required],AptOwnG: ['', Validators.required],AptOwnPN: ['', Validators.required],AptOwnEA: ['', Validators.required],AptOwnMA: ['', Validators.required]
    });
  }

  addApartment( AptName,AptAd,AptImg,AptGm,AptBed,AptTv,AptBath,AptWifi,AptFan,AptAir,AptWater,AptEle,AptKit,AptKitU,AptMonthly,AptDesc,AptOwnFN,AptOwnIMG,AptOwnA,AptOwnG,AptOwnPN,AptOwnEA,AptOwnMA) {
    this.ms.addApartment( AptName,AptAd,AptImg,AptGm,AptBed,AptTv,AptBath,AptWifi,AptFan,AptAir,AptWater,AptEle,AptKit,AptKitU,AptMonthly,AptDesc,AptOwnFN,AptOwnIMG,AptOwnA,AptOwnG,AptOwnPN,AptOwnEA,AptOwnMA);
    // this.router.navigate(['Apartment/List']).then(() => {window.location.reload();
    // });
    this.zone.run(() => {
      this.router.navigateByUrl('Apartment/List');
    });
  }

  ngOnInit(): void {
  }

}