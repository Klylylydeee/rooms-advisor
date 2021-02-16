import { Component, OnInit, Output, ViewChild, EventEmitter} from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { Properties } from 'src/app/Client/Models/Properties';

import { AuthService } from 'src/app/Client/services/auth.service';
import { PostService } from 'src/app/Client/services/post.service';


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
  
  constructor(private authservice: AuthService, private postService: PostService,) { 
    this.form = this.createFormGroup();
  }

  ngOnInit(): void {
    this.authservice.getToken(localStorage.getItem('token'));
  }

  createFormGroup(): FormGroup{
    return new FormGroup({
      propertyTitle: new FormControl("", [Validators.required,Validators.minLength(5)]),
      propertyDescription: new FormControl("", [Validators.required,Validators.minLength(10)])
    })
  }

  onSubmit(formValue: Pick<Properties, "propertyTitle" | "propertyDescription">): void{
    this.postService.createPost(formValue, this.authservice.userId).pipe(first()).subscribe(() => {
      this.create.emit(null); 
    })
    this.form.reset();
    this.formDirective.resetForm();
  }
}
