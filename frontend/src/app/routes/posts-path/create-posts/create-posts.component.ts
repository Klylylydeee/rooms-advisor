import { Component, OnInit, Output, ViewChild, EventEmitter} from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

import { first } from 'rxjs/operators';

// models
import { Properties } from 'src/app/clients/models/Properties';

// service
import { AuthService } from 'src/app/clients/service/auth.service';
import { PostService } from 'src/app/clients/service/post.service';
import { UploadImageService } from 'src/app/clients/webpack/upload-image.service';


@Component({
  selector: 'app-create-posts',
  templateUrl: './create-posts.component.html',
  styleUrls: ['./create-posts.component.scss'],
  providers: [ UploadImageService ]
})

export class CreatePostsComponent implements OnInit {
  @ViewChild("formDirective") formDirective: NgForm;
  @Output() create: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  isOpen = false;
  files: File[] = [];
  
  constructor(
    private authservice: AuthService, 
    private postService: PostService,
    private uploadImageService: UploadImageService,) { 
    this.form = this.createFormGroup();
  }

  ngOnInit(): void {
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

  onSelect(event) {
    // console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    // console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  async onUpload(): Promise<any> {
    //Scape empty array
    if (!this.files[0]) {
      return
    } else {
      const file_data = this.files[0];
      const data = new FormData();
      data.append('file', file_data);
      data.append('upload_preset', 'rooms-advisor-users');
      data.append('cloud_name', 'klylylydeee');
      return new Promise((res, rej)=>{
        this.uploadImageService.uploadImage(data).subscribe((response) => {
          if (response) {
              res(String(response.secure_url));
          }
        });
      })
    }
  }

}
