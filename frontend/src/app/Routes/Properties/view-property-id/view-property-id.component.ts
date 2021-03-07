import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

// webpacks
import { LoadToastrService } from '../../../Client/webpack/load-toastr.service';

// service
import { PostService } from '../../../Client/service/post.service';
import { Properties } from '../../../Client/Models/Properties';

@Component({
  selector: 'app-view-property-id',
  templateUrl: './view-property-id.component.html',
  styleUrls: ['./view-property-id.component.scss']
})
export class ViewPropertyIdComponent implements OnInit {
  posts$;
  propertyId;
  loading=true;
  
  constructor(public postService: PostService,
    private activatedRoute: ActivatedRoute,
    public loadToaster: LoadToastrService) {
  }

  async ngOnInit(): Promise<void> {
    this.activatedRoute.params.subscribe(data =>{
      this.propertyId = data.id
    })
    this.posts$ = await this.viewId(this.propertyId)
    this.loading = false;
  }


  viewId(param) {
    return new Promise((res, rej)=>{
      res(this.postService.viewPost(param))
    })
  }

}
