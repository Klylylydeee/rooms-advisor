import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DormitoryService } from '../../../service/dormitory.service';
import Dormitory from '../../../service/Dormitory';

@Component({
  selector: 'app-dormitory-check',
  templateUrl: './dormitory-check.component.html',
  styleUrls: ['./dormitory-check.component.scss']
})
export class DormitoryCheckComponent implements OnInit {

  
  members: Dormitory[];
  dormitory:any = [];
  angForm: FormGroup;

  constructor(private zone: NgZone, private route: ActivatedRoute, private router: Router, private ms: DormitoryService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.ms.checkDormitory(params[`id`]).subscribe(
        (data: [])=>{
          this.dormitory = data;
        }
      )
    })
    this.ms
      .getDormitory()
      .subscribe((data: Dormitory[]) => {
        this.members = data;
      });
  }

  setDefaultPic() {
    console.log(this.dormitory.dormDeanGender.value)
    let gender = this.dormitory.dormDeanGender
    if (this.dormitory.dormDeanGender == 'Female'){
      this.dormitory.dormDeanImage = "/assets/icon/user/black.png";
    } else if (this.dormitory.dormDeanGender = 'Male'){
      this.dormitory.dormDeanImage = "/assets/icon/user/close-up.png";
    }
    console.log(gender)
  }

}
