import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { ReversePipe } from 'ngx-pipes';

// service
import { PostService } from '../../../Client/service/post.service';
import { AuthService } from '../../../Client/service/auth.service';

// models
import { Username } from '../../../Client/Models/Username';
import { Properties } from '../../../Client/Models/Properties';


@Component({
  selector: 'app-view-property',
  templateUrl: './view-property.component.html',
  styleUrls: ['./view-property.component.scss'],
  providers: [ReversePipe]
})
export class ViewPropertyComponent implements OnInit {
  posts$: Observable<Properties[]>;
  userId: Pick<Username, "userId">;
  currentPg: number;
  
  constructor(public postService: PostService, 
    private authservice: AuthService, 
    private reversePipe: ReversePipe) { }

  ngOnInit(): void {
    this.authservice.getToken(localStorage.getItem('token'));
    this.userId = this.authservice.userId;
    this.posts$ = this.fetchAll(); 
  }

  dec(){
    this.currentPg -= 1;
  }
  inc(){
    this.currentPg += 1;
  }

  fetchAll(): Observable<Properties[]>  {
    return this.postService.fetchAll();
  }

  createPost(): void {
    this.posts$ = this.fetchAll();
  }

  delete(propertyId: Pick<Properties, "propertyId">): void {
    this.postService.deletePosts(propertyId).subscribe(() => {
      this.posts$ = this.fetchAll()
    });
  }

}
