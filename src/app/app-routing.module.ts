import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResourceListComponent } from './resources/resource-list/resource-list.component';
import { ResourceComponent } from './resources/resource/resource.component';
import { ResourcesComponent } from './resources/resources.component';
import { AddCourcesComponent } from './add-cources/add-cources.component';
import { CoursesComponent } from './courses/courses.component';
import { EditCourcesComponent } from './edit-cources/edit-cources.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'resources',  component:ResourcesComponent},
  {path: 'resource',  component: ResourceComponent},
  {path: 'resourcelist',  component: ResourceListComponent},
  {path: 'resource/:resId',  component: ResourceComponent},
  {path: 'resourcelist/resource', component:ResourceComponent},
  { path:'courses', component:CoursesComponent },
  { path:'addcourse', component:AddCourcesComponent },
  { path:'editcourse/:courseId', component:EditCourcesComponent },
  {path: 'login',component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
