import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import {ReversePipe} from 'ngx-pipes';

import { Username } from '../../../Client/Models/Username';
import { Properties } from '../../../Client/Models/Properties';

import { PostService } from '../../../Client/service/post.service';
import { AuthService } from '../../../Client/service/auth.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [ReversePipe]
})
export class PostComponent implements OnInit {
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
