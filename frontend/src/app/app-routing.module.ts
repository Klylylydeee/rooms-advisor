import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Auth Guard
import { AuthGuard } from './Client/auth/auth-guard.service';
// Created Components
import { HomeComponent } from './Components/home/home.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';

import { LoginComponent } from './Routes/Auth/login/login.component';
import { RegisterComponent } from './Routes/Auth/register/register.component';

import { CreatePropertyComponent } from './Routes/Properties/create-property/create-property.component';
import { ViewPropertyIdComponent } from './Routes/Properties/view-property-id/view-property-id.component';
import { ViewPropertyComponent } from './Routes/Properties/view-property/view-property.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'signup', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'posts', canActivate: [AuthGuard], 
    children: [
      { path: 'view', component: ViewPropertyComponent }, 
      { path: 'view/:id', component: ViewPropertyIdComponent }, 
      { path: 'create', component: CreatePropertyComponent }
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
