import { Component, OnInit, Output, ViewChild, EventEmitter} from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

import { first } from 'rxjs/operators';

// models
import { Properties } from 'src/app/clients/models/Properties';

// service
import { AuthService } from 'src/app/clients/service/auth.service';
import { PostService } from 'src/app/clients/service/post.service';
import { UploadImageService } from 'src/app/clients/webpack/upload-image.service';
import { MapboxService } from 'src/app/clients/webpack/mapbox.service';
import { Feature } from 'src/app/clients/models/Feature';


@Component({
  selector: 'app-create-posts',
  templateUrl: './create-posts.component.html',
  styleUrls: ['./create-posts.component.scss'],
  providers: [ UploadImageService ]
})

export class CreatePostsComponent implements OnInit {
  form: FormGroup;
  isOpen = false;
  files: File[] = [];

  addresses: String[] = [];
  selectedAddress = null;
  
  constructor(
    private authservice: AuthService, 
    private postService: PostService,
    private uploadImageService: UploadImageService,
    private mapbox: MapboxService) { 
    this.form = this.createFormGroup();
  }

  ngOnInit(): void {
  }

  createFormGroup(): FormGroup{
    return new FormGroup({
      propertyTitle: new FormControl("", [Validators.required,Validators.minLength(5)]),
      propertyType: new FormControl("", [Validators.required,Validators.minLength(5)]),
      propertyAddress: new FormControl("", [Validators.required,Validators.minLength(5)]),
      propertyDescription: new FormControl("", [Validators.required,Validators.minLength(10)])
    })
  }

  onSubmit(): void{
    this.form.addControl('propertyImages', new FormControl('hi'));
    this.postService.createPost(this.form.value, this.authservice.userId).subscribe( (res: any) => {
      console.log(`${res.message}`)
    }, err =>{
      console.log(`${err}`)
    })

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

  search(event:any){
    const searchItem = event.target.value.toLowerCase();
    if (searchItem && searchItem.length > 0){
      this.mapbox.search_word(searchItem).subscribe((features: Feature[])=>{
        console.log(features);
        this.addresses = features.map(feat => feat.place_name)
      })
    } else {
      this.addresses = [];
    }
  }

  onClicked(e:any){
    this.selectedAddress = e;
    this.addresses = [];
  }

}
