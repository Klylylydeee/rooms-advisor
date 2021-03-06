import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from  '../../Client/service/auth.service';

import { LoadToastrService } from '../../Client/webpack/load-toastr.service';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  isAuthenticated = false;

  constructor(
    public authservice: AuthService, 
    private router: Router, 
    private loadToastrService: LoadToastrService) { }

  ngOnInit(): void {
    this.authservice.isUserLoggedIn$.subscribe((isLoggedIn) => {
      this.isAuthenticated = isLoggedIn;
    })
    if(this.isAuthenticated == true){
      this.authservice.getToken(localStorage.getItem('token'));
    }
  }
  
  logout(): void{
    this.loadToastrService.showSuccess('logout');
    localStorage.removeItem("token");
    this.authservice.isUserLoggedIn$.next(false);
    this.router.navigate(["login"]);
  }

}
