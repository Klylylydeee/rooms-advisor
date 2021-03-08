import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

// webpacks
import { LoadToastrService } from '../../../Client/webpack/load-toastr.service';

// service
import { PostService } from '../../../Client/service/post.service';
import { Properties } from '../../../Client/Models/Properties';
import { AuthService } from '../../../Client/service/auth.service';

import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-property-id',
  templateUrl: './view-property-id.component.html',
  styleUrls: ['./view-property-id.component.scss']
})
export class ViewPropertyIdComponent implements OnInit {
  posts$;
  reviews$;
  propertyId;
  loading = true;
  form: FormGroup;

  constructor(public postService: PostService,
    private authservice: AuthService,
    private activatedRoute: ActivatedRoute,
    public loadToaster: LoadToastrService) {
      this.form = this.createFormGroup();
  }

  async ngOnInit(): Promise<void> {
    this.activatedRoute.params.subscribe(data => {
      this.propertyId = data.id
    })
    console.log(this.propertyId)
    this.posts$ = await this.viewId(this.propertyId)
    this.reviews$ = await this.viewComments(this.propertyId);
    this.loading = false;
  }


  viewId(param) {
    return new Promise((res, rej) => {
      res(this.postService.viewPost(param))
    })
  }

  viewComments(param) {
    return new Promise((res, rej) => {
      res(this.postService.viewPostComments(param))
    })
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      reviewComment: new FormControl("", [Validators.required]),
      reviewRate: new FormControl("", [Validators.required])
    })
  }

  onSubmit() {
    this.postService.postComments(this.form.value, this.authservice.userId, this.propertyId).subscribe((res: any) => {
      console.log(`${res.message}`)
    }, err => {
      console.log(`${err}`)
    })
  }
}
