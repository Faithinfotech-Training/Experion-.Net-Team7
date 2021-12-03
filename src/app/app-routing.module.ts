import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResourceListComponent } from './resources/resource-list/resource-list.component';
import { ResourceComponent } from './resources/resource/resource.component';
import { ResourcesComponent } from './resources/resources.component';
import { AddCourcesComponent } from './add-cources/add-cources.component';
import { CoursesComponent } from './courses/courses.component';
import { EditCourcesComponent } from './edit-cources/edit-cources.component';
import { LoginComponent } from './login/login.component';
import { LeadComponent } from './lead/lead.component';
import { ResourceEnquiryComponent } from './resource-enquiry/resource-enquiry.component';
import { AdminComponent } from './admin/admin.component';
import { ManagerComponent } from './manager/manager.component';
import { AuthGuard } from "./shared/auth.guard";
import { CourseEnquiryComponent } from './course-enquiry/course-enquiry.component';
import { ResourcePipelineComponent } from './resource-pipeline/resource-pipeline.component';
import { EditResourcePipelineComponent } from './edit-resource-pipeline/edit-resource-pipeline.component';
import { ResourceSummaryComponent } from './resource-summary/resource-summary.component';
import { ResourceEnquiryReportComponent } from './resource-enquiry-report/resource-enquiry-report.component';
import { CourseEnquirySummaryComponent } from './course-enquiry-summary/course-enquiry-summary.component';
import { CourseEnquiryReportComponent } from './course-enquiry-report/course-enquiry-report.component'
import { CoursePipelineComponent } from './course-pipeline/course-pipeline.component';
import { EditCoursePipelineComponent } from './edit-course-pipeline/edit-course-pipeline.component';
import { PagevisitComponent } from './pagevisit/pagevisit.component';
import { UsercourselistComponent } from './usercourselist/usercourselist.component';
import { UserresourcelistComponent } from './userresourcelist/userresourcelist.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  {path: 'resources',  component:ResourcesComponent},
  {path: 'resource',  component: ResourceComponent},
  {path: 'resourcelist',  component: ResourceListComponent},
  {path: 'resource/:resId',  component: ResourceComponent},
  {path: 'resourcelist/resource', component:ResourceComponent},
  { path:'courses', component:CoursesComponent },
  { path:'addcourse', component:AddCourcesComponent },
  { path:'editcourse/:courseId', component:EditCourcesComponent },
  {path: 'login',component: LoginComponent},
  {path: 'lead',component: LeadComponent},
  {path:'admin',component:AdminComponent,canActivate:[AuthGuard],data:{role:'1'}},
  {path:'manager',component:ManagerComponent,canActivate:[AuthGuard],data:{role:'2'}},
  //{path:'resourceenquiry/:ResourceEnquiryId',component:ResourceEnquiryComponent},
  {path: 'resourceenquiry/:ResourceId',component: ResourceEnquiryComponent},
  {path:'resourcepipeline',component:ResourcePipelineComponent},
  {path:'editrpipeline/:id',component:EditResourcePipelineComponent},
  {path: 'courseenquiry/:CourseId',component: CourseEnquiryComponent},
  {path:'lead/:leadId',component:LeadComponent},
  { path: 'resourcesummary', component: ResourceSummaryComponent },
  { path: 'courseenquirysummary', component: CourseEnquirySummaryComponent },
  { path: 'resourceenquiryreport/:ResourceEnquiryId', component: ResourceEnquiryReportComponent },
  { path: 'courseenquiryreport/:CourseEnquiryId', component: CourseEnquiryReportComponent },
  { path: 'courseenquiry/:CourseId', component: CourseEnquiryComponent },
  { path: 'coursepipeline', component: CoursePipelineComponent },
  { path: 'editcpipeline/:id', component: EditCoursePipelineComponent },
  { path: 'pagevisit', component: PagevisitComponent },
  {path:'usercourselist',component:UsercourselistComponent},
  {path:'userresourcelist',component:UserresourcelistComponent},
  { path: 'home', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
