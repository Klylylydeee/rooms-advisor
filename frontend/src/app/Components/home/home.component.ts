import { Component, OnInit } from '@angular/core';

import { UploadImageService } from 'src/app/Client/services/upload-image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ UploadImageService ]
})
export class HomeComponent implements OnInit {
  files: File[] = [];
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
      console.log(this.files.length)
    }
    //Upload my image to cloudinary
    const file_data = this.files[0];
    const data = new FormData();
    data.append('file', file_data);
    data.append('upload_preset', 'rooms-advisor');
    data.append('cloud_name', 'klylylydeee');
    this.uploadImageService.uploadImage(data).subscribe((response) => {
      if (response) {
        console.log(response);
      }
    });
  }

}
