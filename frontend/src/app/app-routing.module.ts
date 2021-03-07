import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Auth Guard
import { AuthGuard } from './Client/auth/auth-guard.service';
// Created Components
import { HomeComponent } from './Components/home/home.component';
import { SignupComponent } from './Components/signup/signup.component';
import { LoginComponent } from './Components/login/login.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { ViewPostsComponent } from './Components/posts/view-posts/view-posts.component';
import { ViewIdPostsComponent } from './Components/posts/view-id-posts/view-id-posts.component';
import { CreatePostsComponent } from './Components/posts/create-posts/create-posts.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'posts', canActivate: [AuthGuard], 
    children: [
      { path: 'view', component: ViewPostsComponent }, 
      { path: 'view/:id', component: ViewIdPostsComponent }, 
      { path: 'create', component: CreatePostsComponent }
    ]
  },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
