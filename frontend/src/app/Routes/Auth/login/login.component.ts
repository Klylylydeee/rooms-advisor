import { Component, OnInit } from '@angular/core';
// Import Reacts Forms
import { FormControl, FormGroup, Validators } from '@angular/forms';
// Inject auth service
import { AuthService } from '../../../Client/service/auth.service';

import { LoadToastrService } from '../../../Client/webpack/load-toastr.service';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup; // variable loginForm is in type of FormGroup
  loginMessage: any;
  loading: boolean = false;

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
    this.loading = true;
    this.loadToastrService.showInfo('Processing. Please wait!')
    this.authService.login(this.loginForm.value.username, this.loginForm.value.password)
    .subscribe( res =>{
      this.loadToastrService.showSuccess('Logged in!');
    },
    error =>{
      this.loading = false;
      this.loadToastrService.showError(error.error.error.message);
    });
  }

}
