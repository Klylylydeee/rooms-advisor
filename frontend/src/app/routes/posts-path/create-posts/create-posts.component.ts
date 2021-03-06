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

  insertionInCandidate(element, arrayIndex) {
    return new Promise((res, rej) => {
      const data = new FormData();
      data.append('file', this.files[arrayIndex]);
      data.append('upload_preset', 'rooms-advisor-properties');
      data.append('cloud_name', 'klylylydeee');
      this.uploadImageService.uploadImage(data).subscribe((response) => {
        return res(response.secure_url);
      });
    })
  }

  async procesMultipleCandidates() {
    let links = []
    await Promise.all(this.files.map(async (elem, index) => {
      try {
        let insertResponse = await this.insertionInCandidate(elem, index)
        links.push(insertResponse)
      } catch (error) {
        console.log('error' + error);
      }
    }))
    console.log('images are now uploaded. Proceeding to registering in the db')
    return links
  }

  async onSubmit(){
    try {
      console.log('1');
      let tester = await this.procesMultipleCandidates();
      console.log(tester)
      console.log('3');
      this.form.addControl('propertyImages', new FormControl(tester));
      this.postService.createPost(this.form.value, this.authservice.userId).subscribe( (res: any) => {
        console.log(`${res.message}`)
      }, err =>{
        console.log(`${err}`)
      })
    } catch (err) {
      console.log(err)
    }
  }

  onSelect(event) {
    // console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    // console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
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
