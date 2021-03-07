import { Component, OnInit } from '@angular/core';

import { UploadImageService } from '../../Client/webpack/upload-image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ UploadImageService ]
})
export class HomeComponent implements OnInit {
  files: File[] = [];
  links: string[] = [];
  
  constructor(private uploadImageService: UploadImageService) { }

  ngOnInit(): void {
  }

  onSelect(event) {
    // console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    // console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
  onUpload() {
    //Scape empty array
    if (!this.files[0]) {
      alert('Please add an image.');
    } else {
      this.files.forEach(() => {
        const data = new FormData();
        data.append('file', this.files[0]);
        data.append('upload_preset', 'rooms-advisor-properties');
        data.append('cloud_name', 'klylylydeee');
        this.uploadImageService.uploadImage(data).subscribe((response) => {
          if (response) {
            console.log(response.secure_url);
            this.files.pop();
            this.links.push(response.secure_url);
          }
        });
      });
      console.log(this.links);
    }
  }
}
