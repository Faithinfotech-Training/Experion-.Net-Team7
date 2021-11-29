import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ResourceEnquiryComponent } from './resource-enquiry/resource-enquiry.component';
import { LeadComponent } from './lead/lead.component';
import { RouterModule } from '@angular/router';
import { ResourcesComponent } from './resources/resources.component';
import { ResourceComponent } from './resources/resource/resource.component';
import { ResourceListComponent } from './resources/resource-list/resource-list.component';
import { ResourceService } from './shared/resource.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoursesComponent } from './courses/courses.component';
import { AddCourcesComponent } from './add-cources/add-cources.component';
import { EditCourcesComponent } from './edit-cources/edit-cources.component';
import { CoursesService } from './shared/courses.service';
import { LoginComponent } from './login/login.component';
import { AuthService } from './shared/auth.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { LeadService } from './shared/lead.service';
import { ResourceenquiryService } from './shared/resourceenquiry.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    LeadComponent,
    ResourcesComponent,
    ResourceListComponent,
    ResourceEnquiryComponent,
    CoursesComponent,
    AddCourcesComponent,
    EditCourcesComponent,
    LoginComponent,
    ResourceEnquiryComponent,
    ResourceComponent
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  providers: [
    ResourceService,
    CoursesService,
    AuthService,
    CoursesService,
    LeadService,
    ResourceenquiryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
