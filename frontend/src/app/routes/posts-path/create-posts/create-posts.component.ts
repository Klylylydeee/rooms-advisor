import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
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
import { LoadToastrService } from 'src/app/clients/webpack/load-toastr.service';


@Component({
  selector: 'app-create-posts',
  templateUrl: './create-posts.component.html',
  styleUrls: ['./create-posts.component.scss'],
  providers: [UploadImageService]
})

export class CreatePostsComponent implements OnInit {
  form: FormGroup;
  isOpen = false;
  files = [];

  addresses: String[] = [];
  selectedAddress = null;

  constructor(
    private authservice: AuthService,
    private postService: PostService,
    private uploadImageService: UploadImageService,
    private mapbox: MapboxService,
    private loadToastrService: LoadToastrService) {
    this.form = this.createFormGroup();
  }

  ngOnInit(): void {
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      propertyTitle: new FormControl("", [Validators.required, Validators.minLength(5)]),
      propertyType: new FormControl("", [Validators.required, Validators.minLength(5)]),
      propertyAddress: new FormControl("", [Validators.required, Validators.minLength(5)]),
      propertyDescription: new FormControl("", [Validators.required, Validators.minLength(10)])
    })
  }

  async onSubmit(): Promise<void> {
    let uploadLink = await this.onUpload();
    if (uploadLink == undefined) {
      this.loadToastrService.showError('Please add an image before submitting')
      return
    }
    this.loadToastrService.showInfo('Creating post!')
    console.log(uploadLink);
    // this.form.addControl('propertyImages', new FormControl('hi'));
    // this.postService.createPost(this.form.value, this.authservice.userId).subscribe( (res: any) => {
    //   console.log(`${res.message}`)
    // }, err =>{
    //   console.log(`${err}`)
    // })

  }

  onSelect(event) {
    // console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    // console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  async onUpload() {
    let imageData = [];
    if (!this.files[0]) {
      return
    } else {
      await this.files.forEach(async() => {
        const data = new FormData();
        data.append('file', this.files[0]);
        data.append('upload_preset', 'rooms-advisor-properties');
        data.append('cloud_name', 'klylylydeee');
        await this.uploadImageService.uploadImage(data).subscribe((response) => {
          return new Promise((res, rej) => {
            if (response) {
              res(imageData.push(response.secure_url))
              this.files.pop();
            }
          })
        });
      }); 
    }
    console.log(imageData)
    return Promise.resolve(imageData)
  }



  search(event: any) {
    const searchItem = event.target.value.toLowerCase();
    if (searchItem && searchItem.length > 0) {
      this.mapbox.search_word(searchItem).subscribe((features: Feature[]) => {
        this.addresses = features.map(feat => feat.place_name)
      })
    } else {
      this.addresses = [];
    }
  }

  onClicked(e: any) {
    this.selectedAddress = e;
    this.addresses = [];
  }

}
