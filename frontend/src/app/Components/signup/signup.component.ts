// Basically signupform is an object with the type of FormGroup, line 14

// which is then assigned the function of createFormGroup(), line 20

// createFormGroup validates the formControlNames(check the html)  which then returns it, line 24

// the signup() is emitted through the button with type="submit"(check the html) when clicked, 
// which console logs the return value of the createFormGroup

import { Component, OnInit } from '@angular/core';
// Import Reacts Forms
import { FormControl, FormGroup, Validators } from '@angular/forms';
// Inject auth service
import { AuthService } from '../../Client/services/auth.service';

import { UploadImageService } from 'src/app/Client/services/upload-image.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [ UploadImageService ]
})

export class SignupComponent implements OnInit {
  // variable signupForm is in type of FormGroup
  signupForm: FormGroup;

  files: File[] = [];
  links;
  container;

  constructor(private authService: AuthService, private uploadImageService: UploadImageService) { }

  // assigns the signupform into a createFormGroup function
  ngOnInit(): void {
    this.signupForm = this.createFormGroup();
  }

  // returns the Formgroup with the appropriate form control validations
  createFormGroup(): FormGroup{
    return new FormGroup({
      // Requires atleast 4 characters for username
      username: new FormControl("", [Validators.required,Validators.minLength(4)]),
      // Requires atleast a valid email (@gmail.com/@icloud.com)
      email: new FormControl("", [Validators.required,Validators.email]),
      // Requires atleast 7 characters for username
      password: new FormControl("", [Validators.required,Validators.minLength(7)])
    })
  }

  async signup() {
    let uploadLink = await this.onUpload();
    console.log(uploadLink)
    console.log(this.signupForm.value)
    this.signupForm.addControl('userPicture', new FormControl(uploadLink));
    console.log(this.signupForm.value)
    // console logs the signupForm object that is stored in  the input field
    // Uses the authService.signup of the auth.service.ts found in the services folder
    this.authService.signup(this.signupForm.value)
    // // uses the object of the signupForm.value
    // // console logs the first() from auth.service.ts, check the first() action to remember
    .subscribe((msg) => {
      console.log(msg);
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
      alert('Please add an image.');
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
              console.log(response.secure_url)
          }
        });
      })
    }
  }

}
