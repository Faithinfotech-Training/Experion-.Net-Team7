import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResourceEnquiryComponent } from './resource-enquiry/resource-enquiry.component';
import { LeadComponent } from './lead/lead.component';

const routes: Routes = [
  {path:'resourceenquiry/:ResourceId',component:ResourceEnquiryComponent},
  {path:'lead',component:LeadComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
