import { Component, OnInit } from '@angular/core';
import Apartment from '../../../service/Apartment';
import { ApartmentService } from '../../../service/apartment.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-apartment-list',
  templateUrl: './apartment-list.component.html',
  styleUrls: ['./apartment-list.component.scss']
})
export class ApartmentListComponent implements OnInit {
  members: Apartment[];
  constructor(private ms: ApartmentService) { }

  ngOnInit() {
    this.ms
      .getApartment()
      .subscribe((data: Apartment[]) => {
        this.members = data;
        console.log('get1')
      });
      this.ms
        .getApartment()
        .subscribe((data: Apartment[]) => {
          this.members = data;
          console.log('get2')
        });
        
      this.ms
      .getApartment()
      .subscribe((data: Apartment[]) => {
        this.members = data;
        console.log('get3')
      });
  }
  deleteApartment(id, index) {
    this.ms.deleteApartment(id).subscribe(res => {
      this.members.splice(this.members.length - index -1, 1);
    });
  }
}
