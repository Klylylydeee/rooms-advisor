import { Component, OnInit } from '@angular/core';
import { BedspacerService } from '../../../service/Bedspacer.service';
import Bedspacer from '../../../service/Bedspacer';

@Component({
  selector: 'app-spacer-list',
  templateUrl: './spacer-list.component.html',
  styleUrls: ['./spacer-list.component.scss']
})
export class SpacerListComponent implements OnInit {

  members: Bedspacer[];
  constructor(private ms: BedspacerService) { }


  ngOnInit() {
    this.ms
      .getBedspacer()
      .subscribe((data: Bedspacer[]) => {
        this.members = data;
      });
      this.ms
        .getBedspacer()
        .subscribe((data: Bedspacer[]) => {
          this.members = data;
        });
    this.ms
      .getBedspacer()
      .subscribe((data: Bedspacer[]) => {
        this.members = data;
      });
  }
  deleteBedspacer(id, index) {
    this.ms.deleteBedspacer(id).subscribe(res => {
      this.members.splice(this.members.length - index -1, 1);
    });
  }

}
