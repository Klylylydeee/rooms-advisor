import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Required if using forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Http modules to use httpclient
import { HttpClientModule} from '@angular/common/http';

// Created Components
import { NavigationComponent } from './Components/navigation/navigation.component';
import { SignupComponent } from './Components/signup/signup.component';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { PostsComponent } from './Components/posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,        // Required if using forms
    ReactiveFormsModule,// Required if using forms
    HttpClientModule    // Http modules to use httpclient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
