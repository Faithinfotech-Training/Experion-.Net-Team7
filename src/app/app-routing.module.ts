import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResourceListComponent } from './resources/resource-list/resource-list.component';
import { ResourceComponent } from './resources/resource/resource.component';
import { ResourcesComponent } from './resources/resources.component';

const routes: Routes = [
  {path: 'resources',  component:ResourcesComponent},
  {path: 'resource',  component: ResourceComponent},
  {path: 'resourcelist',  component: ResourceListComponent},
  {path: 'resource/:resId',  component: ResourceComponent},
  {path: 'resourcelist/resource', component:ResourceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
