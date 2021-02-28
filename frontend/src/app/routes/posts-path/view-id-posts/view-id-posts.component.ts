import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-id-posts',
  templateUrl: './view-id-posts.component.html',
  styleUrls: ['./view-id-posts.component.scss']
})
export class ViewIdPostsComponent implements OnInit {

  propertyId;
  
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(data =>{
      this.propertyId = data.id
    })
  }

  ngOnInit(): void {
  }

}
