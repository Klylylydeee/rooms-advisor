import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Required if using forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Http modules to use httpclient
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
// Auth Services
import { AuthInterceptorService } from "./Client/auth/auth-interceptor.service";
// Pagination
import {NgxPaginationModule} from 'ngx-pagination';
// Loading animation
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
// Reverse array
import {NgPipesModule} from 'ngx-pipes';
// Toaster Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
// Dropzone for picture
import { NgxDropzoneModule } from 'ngx-dropzone';
// registration loading
import { NgxLoadingModule } from 'ngx-loading';

// Created Components
import { NavigationComponent } from './Components/navigation/navigation.component';
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './Components/footer/footer.component';

import { LoginComponent } from './Routes/Auth/login/login.component';
import { RegisterComponent } from './Routes/Auth/register/register.component';

import { CreatePropertyComponent } from './Routes/Properties/create-property/create-property.component';
import { ViewPropertyIdComponent } from './Routes/Properties/view-property-id/view-property-id.component';
import { ViewPropertyComponent } from './Routes/Properties/view-property/view-property.component';

import { AboutUsComponent } from './Routes/General/about-us/about-us.component';
import { ContactUsComponent } from './Routes/General/contact-us/contact-us.component';
import { OurTeamComponent } from './Routes/General/our-team/our-team.component';
import { PrivacyPolicyComponent } from './Routes/General/privacy-policy/privacy-policy.component';

import { NotFoundComponent } from './Routes/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    CreatePropertyComponent,
    ViewPropertyIdComponent,
    ViewPropertyComponent,
    AboutUsComponent,
    ContactUsComponent,
    OurTeamComponent,
    PrivacyPolicyComponent,
    NotFoundComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,        // Required if using forms
    ReactiveFormsModule,// Required if using forms
    HttpClientModule,   // Http modules to use httpclient
    NgxPaginationModule, // Pagination
    NgxSkeletonLoaderModule.forRoot(), // Loading animation
    NgPipesModule,       // Reverse array
    BrowserAnimationsModule, // Toaster Animations
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }), // Toaster Animations
    NgxDropzoneModule, // Dropzone for picture
    NgxLoadingModule.forRoot({}) // registration loading
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true,
  }, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
