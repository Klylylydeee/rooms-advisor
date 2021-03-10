import { Component, OnInit } from '@angular/core';
import { FacultyService } from '../../../service/faculty.service';
import Faculty from '../../../service/Faculty';

@Component({
  selector: 'app-faculty-list',
  templateUrl: './faculty-list.component.html',
  styleUrls: ['./faculty-list.component.scss']
})
export class FacultyListComponent implements OnInit {

  members: Faculty[];
  constructor(private ms: FacultyService) { }


  ngOnInit() {
    this.ms
      .getFaculty()
      .subscribe((data: Faculty[]) => {
        this.members = data;
      });
      this.ms
        .getFaculty()
        .subscribe((data: Faculty[]) => {
          this.members = data;
        });
    this.ms
      .getFaculty()
      .subscribe((data: Faculty[]) => {
        this.members = data;
      });
  }
  deleteFaculty(id, index) {
    this.ms.deleteFaculty(id).subscribe(res => {
      this.members.splice(this.members.length - index -1, 1);
    });
  }

}
