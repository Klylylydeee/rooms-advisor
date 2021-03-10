import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Landing Page Components
import { FooterComponent } from './Landing page/footer/footer.component';
import { HeaderComponent } from './Landing page/header/header.component';
import { HeaderBackupComponent } from './Landing page/header/header-backup/header-backup.component';
import { HomeComponent } from './Landing page/home/home.component';
//  General Informations
import { DevelopersComponent } from './Components/developers/developers.component';
import { DocumentationsComponent } from './Components/documentations/documentations.component';
import { FaqComponent } from './Components/faq/faq.component';
import { StoryOfRoomadvisorComponent } from './Components/story-of-roomadvisor/story-of-roomadvisor.component';
import { ServicesComponent } from './Components/services/services.component';
import { SupportComponent } from './Components/support/support.component';
import { HomeOwnerInfoComponent } from './Components/user_informations/home-owner-info/home-owner-info.component';
import { SchoolAdminInfoComponent } from './Components/user_informations/school-admin-info/school-admin-info.component';
import { StudentInfoComponent } from './Components/user_informations/student-info/student-info.component';
import { WorksComponent } from './Components/works/works.component';
import { GuidelinesComponent } from './Components/guidelines/guidelines.component';
// Apartment Components
import { ApartmentCreateComponent } from './view/apartment/apartment-create/apartment-create.component';
import { ApartmentEditComponent } from './view/apartment/apartment-edit/apartment-edit.component';
import { ApartmentListComponent } from './view/apartment/apartment-list/apartment-list.component';
import { ApartmentCheckComponent } from './view/apartment/apartment-check/apartment-check.component';
// Bedspacer Components
import { SpacerCheckComponent } from './view/spacer/spacer-check/spacer-check.component';
import { SpacerCreateComponent } from './view/spacer/spacer-create/spacer-create.component';
import { SpacerEditComponent } from './view/spacer/spacer-edit/spacer-edit.component';
import { SpacerListComponent } from './view/spacer/spacer-list/spacer-list.component';
// Faculty Components
import { FacultyCheckComponent } from './view/faculty/faculty-check/faculty-check.component';
import { FacultyEditComponent } from './view/faculty/faculty-edit/faculty-edit.component';
import { FacultyCreateComponent } from './view/faculty/faculty-create/faculty-create.component';
import { FacultyListComponent } from './view/faculty/faculty-list/faculty-list.component';
// Dormitory Components
import { DormitoryCheckComponent } from './view/dormitory/dormitory-check/dormitory-check.component';
import { DormitoryListComponent } from './view/dormitory/dormitory-list/dormitory-list.component';
import { DormitoryEditComponent } from './view/dormitory/dormitory-edit/dormitory-edit.component';
import { DormitoryCreateComponent } from './view/dormitory/dormitory-create/dormitory-create.component';
// Services
import { ApartmentService } from './service/apartment.service';
import { DormitoryService } from './service/dormitory.service';
import { FacultyService } from './service/faculty.service';
import { BedspacerService } from './service/Bedspacer.service';
// Test
import { ViewTestingComponent } from './view-testing/view-testing.component';
import { LoginComponent } from './Testing/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    DevelopersComponent,
    SupportComponent,
    ServicesComponent, 
    HomeComponent, 
    WorksComponent, 
    HeaderBackupComponent, 
    StoryOfRoomadvisorComponent, 
    FaqComponent,
    DocumentationsComponent,
    StudentInfoComponent,
    HomeOwnerInfoComponent,
    SchoolAdminInfoComponent,
    GuidelinesComponent,
    ApartmentCreateComponent,
    ApartmentEditComponent,
    ApartmentListComponent,
    ApartmentCheckComponent,
    SpacerCheckComponent,
    SpacerCreateComponent,
    SpacerEditComponent,
    SpacerListComponent,
    FacultyCheckComponent,
    FacultyEditComponent,
    FacultyCreateComponent,
    FacultyListComponent,
    DormitoryCheckComponent,
    DormitoryListComponent,
    DormitoryEditComponent,
    DormitoryCreateComponent,
    ViewTestingComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ApartmentService,
    DormitoryService,
    FacultyService,
    BedspacerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
