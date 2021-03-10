import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BedspacerService } from '../../../service/Bedspacer.service';
import Bedspacer from '../../../service/Bedspacer';

@Component({
  selector: 'app-spacer-check',
  templateUrl: './spacer-check.component.html',
  styleUrls: ['./spacer-check.component.scss']
})
export class SpacerCheckComponent implements OnInit {

  members: Bedspacer[];
  bedspacer:any = [];
  angForm: FormGroup;

  constructor(private zone: NgZone, private route: ActivatedRoute, private router: Router, private ms: BedspacerService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.ms.checkBedspacer(params[`id`]).subscribe(
        (data: [])=>{
          this.bedspacer = data;
        }
      )
    })
    this.ms
      .getBedspacer()
      .subscribe((data: Bedspacer[]) => {
        this.members = data;
      });
  }

  setDefaultPic() {
    console.log(this.bedspacer.bedOwnerGender.value)
    let gender = this.bedspacer.bedOwnerGender
    if (this.bedspacer.bedOwnerGender == 'Female'){
      this.bedspacer.bedOwnerImage = "/assets/icon/user/black.png";
    } else if (this.bedspacer.bedOwnerGender = 'Male'){
      this.bedspacer.bedOwnerImage = "/assets/icon/user/close-up.png";
    }
    console.log(gender)
  }

}
