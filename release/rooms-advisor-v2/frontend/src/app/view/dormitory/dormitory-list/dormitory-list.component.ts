import { Component, OnInit } from '@angular/core';
import Dormitory from '../../../service/Dormitory';
import { DormitoryService } from '../../../service/dormitory.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dormitory-list',
  templateUrl: './dormitory-list.component.html',
  styleUrls: ['./dormitory-list.component.scss']
})
export class DormitoryListComponent implements OnInit {
  members: Dormitory[];
  
  constructor(private ms: DormitoryService) { }


  ngOnInit() {
    this.ms
      .getDormitory()
      .subscribe((data: Dormitory[]) => {
        this.members = data;
      });
      this.ms
        .getDormitory()
        .subscribe((data: Dormitory[]) => {
          this.members = data;
        });
        this.ms
          .getDormitory()
          .subscribe((data: Dormitory[]) => {
            this.members = data;
          });
  }
  deleteDormitory(id, index) {
    this.ms.deleteDormitory(id).subscribe(res => {
      this.members.splice(this.members.length - index -1, 1);
    });
  }
}
