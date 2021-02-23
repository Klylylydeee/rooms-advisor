import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Auth Guard
import { AuthGuard } from './Client/services/auth-guard.service';
// Created Components
import { HomeComponent } from './Components/home/home.component';
import { SignupComponent } from './Components/signup/signup.component';
import { LoginComponent } from './Components/login/login.component';
import { PostComponent } from './Components/posts/post/post.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'Home' },
  // { path: 'home', component: HomeComponent },
  { path: 'Home', component: HomeComponent},
  { path: 'Signup', component: SignupComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Posts', component: PostComponent, canActivate: [AuthGuard]},
  {path: '404', component: NotfoundComponent},
  {path: '**', redirectTo: '404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
