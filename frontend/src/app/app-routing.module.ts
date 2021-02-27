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
import { PostComponent } from 'src/app/routes/posts-path/post/post.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'Home' },
  { path: 'Home', component: HomeComponent},
  { path: 'Signup', component: SignupComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Posts', component: PostComponent, canActivate: [AuthGuard] },
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
