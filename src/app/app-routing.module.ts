import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResourceListComponent } from './resources/resource-list/resource-list.component';
import { ResourceComponent } from './resources/resource/resource.component';
import { ResourcesComponent } from './resources/resources.component';
import { AddCourcesComponent } from './add-cources/add-cources.component';
import { CoursesComponent } from './courses/courses.component';
import { EditCourcesComponent } from './edit-cources/edit-cources.component';
import { LoginComponent } from './login/login.component';
import{LeadComponent}from'./lead/lead.component';
import{ResourceEnquiryComponent}from'./resource-enquiry/resource-enquiry.component';
import { AdminComponent } from './admin/admin.component';
import { ManagerComponent } from './manager/manager.component';
import{AuthGuard} from "./shared/auth.guard";
import { CourseEnquiryComponent } from './course-enquiry/course-enquiry.component';
import { EditCoursePipelineComponent } from './edit-course-pipeline/edit-course-pipeline.component';
import { CoursePipelineComponent } from './course-pipeline/course-pipeline.component';

const routes: Routes = [
  {path: 'resources',  component:ResourcesComponent},
  {path: 'resource',  component: ResourceComponent},
  {path: 'resourcelist',  component: ResourceListComponent},
  {path: 'resource/:resId',  component: ResourceComponent},
  {path: 'resourcelist/resource', component:ResourceComponent},
  { path:'courses', component:CoursesComponent },
  { path:'addcourse', component:AddCourcesComponent },
  { path:'editcourse/:courseId', component:EditCourcesComponent },
  {path: 'login',component: LoginComponent},
  {path: '',component: LoginComponent},
  {path: 'lead',component: LeadComponent},
  {path:'admin',component:AdminComponent,canActivate:[AuthGuard],data:{role:'1'}},
  {path:'manager',component:ManagerComponent,canActivate:[AuthGuard],data:{role:'2'}},
  {path: 'resourceenquiry/:ResourceId',component: ResourceEnquiryComponent},
  {path: 'courseenquiry/:CourseId',component: CourseEnquiryComponent},
  {path:'coursepipeline',component: CoursePipelineComponent},
  {path:'editcpipeline/:id', component: EditCoursePipelineComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
