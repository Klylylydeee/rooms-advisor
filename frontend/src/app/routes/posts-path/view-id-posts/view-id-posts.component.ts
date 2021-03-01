import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

// webpacks
import { LoadToastrService } from 'src/app/clients/webpack/load-toastr.service';

// service
import { PostService } from 'src/app/clients/service/post.service';
import { Properties } from 'src/app/clients/models/Properties';

@Component({
  selector: 'app-view-id-posts',
  templateUrl: './view-id-posts.component.html',
  styleUrls: ['./view-id-posts.component.scss']
})

export class ViewIdPostsComponent implements OnInit {
  posts$: Observable<Properties[]>;
  propertyId;
  loading = true;
  constructor(public postService: PostService,
    private activatedRoute: ActivatedRoute,
    public loadToaster: LoadToastrService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data =>{
      this.propertyId = data.id
    })
    this.posts$ = this.viewId(this.propertyId); 
  }


  viewId(param): Observable<Properties[]>  {
    return this.postService.viewPost(param);
  }

}
