import { Component, OnInit } from '@angular/core';
import Member from '../../../service/Member';
import { MemberService } from '../../../service/member.service';

@Component({
  selector: 'app-member-get',
  templateUrl: './member-get.component.html',
  styleUrls: ['./member-get.component.scss']
})
export class MemberGetComponent implements OnInit {

  members: Member[];
  constructor(private ms: MemberService) { }

  ngOnInit() {
    this.ms
      .getMembers()
      .subscribe((data: Member[]) => {
        this.members = data;
      });
  }
  deleteMember(id, index) {
    this.ms.deleteMember(id).subscribe(res => {
      this.members.splice(index, 1);
    });
  }
}