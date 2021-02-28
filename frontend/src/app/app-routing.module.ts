// angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// auth
import { AuthGuard } from 'src/app/clients/auth/auth-guard.service';

// routes
import { HomeComponent } from 'src/app/routes/home/home.component';
import { NotfoundComponent } from 'src/app/routes/notfound/notfound.component';
import { SignupComponent } from 'src/app/routes/auth-path/signup/signup.component';
import { LoginComponent } from 'src/app/routes/auth-path/login/login.component';
import { CreatePostsComponent } from 'src/app/routes/posts-path/create-posts/create-posts.component';
import { ViewPostsComponent } from './routes/posts-path/view-posts/view-posts.component';
import { ViewIdPostsComponent } from './routes/posts-path/view-id-posts/view-id-posts.component';

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
