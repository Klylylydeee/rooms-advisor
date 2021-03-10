import { Component, OnInit, NgZone} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FacultyService } from '../../../service/faculty.service';
import Faculty from '../../../service/Faculty';

@Component({
  selector: 'app-faculty-edit',
  templateUrl: './faculty-edit.component.html',
  styleUrls: ['./faculty-edit.component.scss']
})
export class FacultyEditComponent implements OnInit {
  angForm: FormGroup;
  faculty: any = {};
  constructor(private zone: NgZone, private route: ActivatedRoute, private router: Router, private ms: FacultyService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      // Information
      facultyHomeAddress: ['', Validators.required],
      facultyHomeImage: ['', Validators.required],
      facultyHomeImages: ['', Validators.required],
      facultyMonthlyFee: ['', Validators.required],
      // Amenities
      facultyRooms: ['', Validators.required], 
      facultyPerRoom: ['', Validators.required], 
      facultyBathroom: ['', Validators.required], 
      facultyTelevision: ['', Validators.required],
      facultyInternetAccess: ['', Validators.required],
      facultyAircondition: ['', Validators.required],
      facultyFoodFee: ['', Validators.required], 
      facultyDescription: ['', Validators.required],  
      // Owner
      facultyName: ['', Validators.required], 
      facultyImage: ['', Validators.required], 
      facultyAge: ['', Validators.required],
      facultyGender: ['', Validators.required],
      facultyPhoneNumber: ['', Validators.required],
      facultyEmailAddress: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.ms.editFaculty(params[`id`]).subscribe(res => {
        this.faculty = res;
      });
    });
  }
  
  updateFaculty(facultyHomeAddress, facultyHomeImage, facultyHomeImages, facultyRooms, facultyPerRoom, facultyBathroom,
    facultyTelevision, facultyInternetAccess, facultyAircondition, facultyFoodFee,
    facultyMonthlyFee, facultyDescription, facultyName, facultyImage, facultyAge, 
    facultyGender, facultyPhoneNumber, facultyEmailAddress) {
    this.route.params.subscribe(params => {
      this.ms.updateFaculty(facultyHomeAddress, facultyHomeImage, facultyHomeImages, facultyRooms, facultyPerRoom, facultyBathroom,
        facultyTelevision, facultyInternetAccess, facultyAircondition, facultyFoodFee,
        facultyMonthlyFee, facultyDescription, facultyName, facultyImage, facultyAge, 
        facultyGender, facultyPhoneNumber, facultyEmailAddress, params.id);
        this.zone.run(() => {
          this.router.navigateByUrl('Faculty/List');
        });
      // this.router.navigate(['Faculty/List']).then(() => {window.location.reload();
      // });
    });
  }

}