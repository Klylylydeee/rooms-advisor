import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Created Components
import { HomeComponent } from './Components/home/home.component';
import { SignupComponent } from './Components/signup/signup.component';
import { LoginComponent } from './Components/login/login.component';
import { PostsComponent } from './Components/posts/posts.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent},
  { path: 'Signup', component: SignupComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Posts', component: PostsComponent },
  { path: '**', redirectTo: 'Home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
