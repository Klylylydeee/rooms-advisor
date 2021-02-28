import { Component, OnInit, Output, ViewChild, EventEmitter} from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

import { first } from 'rxjs/operators';

// models
import { Properties } from 'src/app/clients/models/Properties';

// service
import { AuthService } from 'src/app/clients/service/auth.service';
import { PostService } from 'src/app/clients/service/post.service';


@Component({
  selector: 'app-create-posts',
  templateUrl: './create-posts.component.html',
  styleUrls: ['./create-posts.component.scss']
})

export class CreatePostsComponent implements OnInit {
  @ViewChild("formDirective") formDirective: NgForm;
  @Output() create: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  isOpen = false;
  
  constructor(
    private authservice: AuthService, 
    private postService: PostService) { 
    this.form = this.createFormGroup();
  }

  ngOnInit(): void {
  }

  createFormGroup(): FormGroup{
    return new FormGroup({
      propertyTitle: new FormControl("", [Validators.required,Validators.minLength(5)]),
      propertyDescription: new FormControl("", [Validators.required,Validators.minLength(10)]),
      propertyDescription2: new FormControl("", [Validators.required,Validators.minLength(10)])
    })
  }

  onSubmit(formValue: Pick<Properties, "propertyTitle" | "propertyDescription">): void{
    console.log(formValue)
    // this.postService.createPost(formValue, this.authservice.userId).pipe(first()).subscribe(() => {
    //   this.create.emit(null); 
    // })
    // this.form.reset();
    // this.formDirective.resetForm();
  }

}
