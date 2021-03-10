import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FacultyService } from '../../../service/faculty.service';
import Faculty from '../../../service/Faculty';

@Component({
  selector: 'app-faculty-check',
  templateUrl: './faculty-check.component.html',
  styleUrls: ['./faculty-check.component.scss']
})
export class FacultyCheckComponent implements OnInit {

  
  members: Faculty[];
  faculty: any = [];
  angForm: FormGroup;

  constructor(private zone: NgZone, private route: ActivatedRoute, private router: Router, private ms: FacultyService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.ms.checkFaculty(params[`id`]).subscribe(
        (data: [])=>{
          this.faculty = data;
        }
      )
    })
    this.ms
      .getFaculty()
      .subscribe((data: Faculty[]) => {
        this.members = data;
      });
  }

  
  setDefaultPic() {
    console.log(this.faculty.facultyGender.value)
    let gender = this.faculty.facultyGender
    if (this.faculty.facultyGender == 'Female'){
      this.faculty.facultyImage = "/assets/icon/user/black.png";
    } else if (this.faculty.facultyGender = 'Male'){
      this.faculty.facultyImage = "/assets/icon/user/close-up.png";
    }
    console.log(gender)
  }

}
