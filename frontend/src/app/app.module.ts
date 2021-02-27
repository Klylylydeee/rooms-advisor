// angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'; // Http modules to use httpclient
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Required if using forms

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// auth
import { AuthInterceptorService } from "src/app/clients/auth/auth-interceptor.service"; // Auth Services

// webpack
import {NgxPaginationModule} from 'ngx-pagination'; // Pagination
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader'; // Loading animation
import { NgPipesModule } from 'ngx-pipes'; // Reverse array
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Toaster Animations
import { ToastrModule } from 'ngx-toastr'; // Toaster Animations
import { NgxDropzoneModule } from 'ngx-dropzone'; // Dropzone for picture
import { NgxLoadingModule } from 'ngx-loading'; // registration loading

// components
import { NavigationComponent } from 'src/app/components/navigation/navigation.component';
import { FooterComponent } from './Components/footer/footer.component';

// routes
import { HomeComponent } from 'src/app/routes/home/home.component';
import { NotfoundComponent } from 'src/app/routes/notfound/notfound.component';
import { SignupComponent } from 'src/app/routes/auth-path/signup/signup.component';
import { LoginComponent } from 'src/app/routes/auth-path/login/login.component';
import { CreatePostsComponent } from 'src/app/routes/posts-path/create-posts/create-posts.component';
import { PostComponent } from 'src/app/routes/posts-path/post/post.component';

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
    FormsModule,                       // Required if using forms
    ReactiveFormsModule,               // Required if using forms
    HttpClientModule,                  // Http modules to use httpclient
    NgxPaginationModule,               // Pagination
    NgxSkeletonLoaderModule.forRoot(), // Loading animation
    NgPipesModule,                     // Reverse array
    BrowserAnimationsModule,           // Toaster Animations
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),                                // Toaster Animations
    NgxDropzoneModule,                 // Dropzone for picture
    NgxLoadingModule.forRoot({})       // registration loading
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true,
  }, ],
  bootstrap: [AppComponent]
})

export class AppModule { }
