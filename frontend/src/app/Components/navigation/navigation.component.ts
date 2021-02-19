import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from  'src/app/Client/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  isAuthenticated = false;
  constructor(public authservice: AuthService, private router: Router) { 

  }

  ngOnInit(): void {
    this.authservice.isUserLoggedIn$.subscribe((isLoggedIn) => {
      this.isAuthenticated = isLoggedIn;
    })
    if(this.isAuthenticated == true){
      this.authservice.getToken(localStorage.getItem('token'));
    }
  }

  logout(): void{
    localStorage.removeItem("token");
    this.authservice.isUserLoggedIn$.next(false);
    this.router.navigate(["Login"]);
  }

}
