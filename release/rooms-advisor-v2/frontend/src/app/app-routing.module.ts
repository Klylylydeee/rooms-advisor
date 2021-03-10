import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Landing Page Components
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
// Test
import { ViewTestingComponent } from './view-testing/view-testing.component';

const routes: Routes = [
  // Default Landing page
  { path: '', redirectTo: 'Home', pathMatch: 'full'},
  { path: 'Home', component: HomeComponent},
  // General Information
  { path: 'Developers', component: DevelopersComponent },
  { path: 'Statement', component: WorksComponent },
  { path: 'Guidelines', component: GuidelinesComponent },
  { path: 'Support', component: SupportComponent },
  // Apartment
  { path: 'Apartment/Create', component: ApartmentCreateComponent },
  { path: 'Apartment/List', component: ApartmentListComponent },
  { path: 'Apartment/List/:id', component: ApartmentCheckComponent },
  { path: 'Apartment/Edit/:id', component: ApartmentEditComponent },
  // Bedspacer
  { path: 'BedSpacer/Create', component: SpacerCreateComponent },
  { path: 'BedSpacer/List', component: SpacerListComponent },
  { path: 'BedSpacer/List/:id', component: SpacerCheckComponent },
  { path: 'BedSpacer/Edit/:id', component: SpacerEditComponent },
  // Dormitory
  { path: 'Dormitory/Create', component: DormitoryCreateComponent },
  { path: 'Dormitory/List', component: DormitoryListComponent },
  { path: 'Dormitory/List/:id', component: DormitoryCheckComponent },
  { path: 'Dormitory/Edit/:id', component: DormitoryEditComponent },
  // Faculty
  { path: 'Faculty/Create', component: FacultyCreateComponent },
  { path: 'Faculty/List', component: FacultyListComponent },
  { path: 'Faculty/List/:id', component: FacultyCheckComponent },
  { path: 'Faculty/Edit/:id', component: FacultyEditComponent },
  // Testing 
  { path: 'Test', component: ViewTestingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
