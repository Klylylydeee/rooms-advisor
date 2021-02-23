import { Component, OnInit } from '@angular/core';
// Import Reacts Forms
import { FormControl, FormGroup, Validators } from '@angular/forms';
// Inject auth service
import { AuthService } from '../../Client/services/auth.service';

import { LoadToastrService } from 'src/app/Client/services/load-toastr.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // variable loginForm is in type of FormGroup
  loginForm: FormGroup;

  loginMessage: any;

  constructor(private authService: AuthService, private loadToastrService: LoadToastrService) { }

  // assigns the loginForm into a createFormGroup function
  ngOnInit(): void {
    this.loginForm = this.createFormGroup();
  }

  createFormGroup(): FormGroup{
    return new FormGroup({
      // Requires atleast 4 characters for username
      username: new FormControl("", [Validators.required,Validators.minLength(4)]),
      // Requires atleast 7 characters for username
      password: new FormControl("", [Validators.required,Validators.minLength(7)])
    })
  }

  login(): void{
    this.authService.login(this.loginForm.value.username, this.loginForm.value.password)
    .subscribe( res=>{
      this.loadToastrService.showSuccess('logging in');
    },
    error=>{
      this.loginMessage = error.error.error.message;
      this.loadToastrService.showSuccess(this.loginMessage);
    });
  }
}
