import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApartmentService } from '../../../service/apartment.service';
import Apartment from '../../../service/Apartment';
import ApartmentComment from '../../../service/ApartmentComment';

@Component({
  selector: 'app-apartment-check',
  templateUrl: './apartment-check.component.html',
  styleUrls: ['./apartment-check.component.scss']
})

export class ApartmentCheckComponent implements OnInit {
  
  members: Apartment[];
  apartment:any = [];
  angForm: FormGroup;

  constructor(private zone: NgZone, private route: ActivatedRoute, private router: Router, private ms: ApartmentService, private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.ms.checkApartment(params[`id`]).subscribe(
        (data: [])=>{
          this.apartment = data;
        }
      )
    })
    this.ms
      .getApartment()
      .subscribe((data: Apartment[]) => {
        this.members = data;
      });
  }

  setDefaultPic() {
    console.log(this.apartment.AptOwnG.value)
    let gender = this.apartment.AptOwnG
    if (this.apartment.AptOwnG == 'Female'){
      this.apartment.AptOwnIMG = "/assets/icon/user/black.png";
    } else if (this.apartment.AptOwnG = 'Male'){
      this.apartment.AptOwnIMG = "/assets/icon/user/close-up.png";
    }
    console.log(gender)
  }
  
}