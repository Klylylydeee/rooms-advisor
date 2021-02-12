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

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
  // variable signupForm is in type of FormGroup
  signupForm: FormGroup;

  constructor(private authService: AuthService) { }

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

  signup(): void {
    // console logs the signupForm object that is stored in  the input field
    console.log(this.signupForm.value);
    // Uses the authService.signup of the auth.service.ts found in the services folder
    this.authService
    // uses the object of the signupForm.value
    .signup(this.signupForm.value)
    // console logs the first() from auth.service.ts, check the first() action to remember
    .subscribe((msg) => {
      console.log(msg);
    })
  }

}
