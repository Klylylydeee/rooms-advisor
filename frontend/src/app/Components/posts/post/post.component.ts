import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Username } from 'src/app/Client/Models/Username';
import { Properties } from 'src/app/Client/Models/Properties';

import { PostService } from 'src/app/Client/services/post.service';
import { AuthService } from 'src/app/Client/services/auth.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  posts$: Observable<Properties[]>;
  userId: Pick<Username, "userId">;

  constructor(private postService: PostService, private authservice: AuthService) { }

  ngOnInit(): void {
    this.posts$ = this.fetchAll(); 
    this.userId = this.authservice.userId;
  }

  fetchAll(): Observable<Properties[]>  {
    return this.postService.fetchAll();
  }

  createPost(): void {
    this.posts$ = this.fetchAll();
  }

  // delete(postId: Pick<Post, "id">): void {
  //   this.postService
  //     .deletePost(postId)
  //     .subscribe(() => (this.posts$ = this.fetchAll()));
  // }

}
