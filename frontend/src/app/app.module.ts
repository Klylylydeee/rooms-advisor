import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Required if using forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Http modules to use httpclient
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
// Auth Services
import { AuthInterceptorService } from "./Client/services/auth-interceptor.service";
// Pagination
import {NgxPaginationModule} from 'ngx-pagination';
// Loading animation
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
// Reverse array
import {NgPipesModule} from 'ngx-pipes';

// Created Components
import { NavigationComponent } from './Components/navigation/navigation.component';
import { SignupComponent } from './Components/signup/signup.component';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { CreatePostsComponent } from './Components/posts/create-posts/create-posts.component';
import { PostComponent } from './Components/posts/post/post.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { FooterComponent } from './Components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    CreatePostsComponent,
    PostComponent,
    NotfoundComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,        // Required if using forms
    ReactiveFormsModule,// Required if using forms
    HttpClientModule,   // Http modules to use httpclient
    NgxPaginationModule, // Pagination
    NgxSkeletonLoaderModule.forRoot(), // Loading animation
    NgPipesModule       // Reverse array
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
