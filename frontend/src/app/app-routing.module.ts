import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Auth Guard
import { AuthGuard } from './Client/auth/auth-guard.service';
// Created Components
import { HomeComponent } from './Components/home/home.component';

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

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'signup', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'our-team', component: OurTeamComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'posts', canActivate: [AuthGuard], 
    children: [
      { path: 'view', component: ViewPropertyComponent }, 
      { path: 'view/:id', component: ViewPropertyIdComponent }, 
      { path: 'create', component: CreatePropertyComponent }
    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
