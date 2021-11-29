import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ResourcesComponent } from './resources/resources.component';
import { ResourceComponent } from './resources/resource/resource.component';
import { ResourceListComponent } from './resources/resource-list/resource-list.component';
import { ResourceService } from './shared/resource.service';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { CoursesComponent } from './courses/courses.component';
import { AddCourcesComponent } from './add-cources/add-cources.component';
import { EditCourcesComponent } from './edit-cources/edit-cources.component';
import { CoursesService } from './shared/courses.service';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { LoginComponent } from './login/login.component';
import { AuthService } from './shared/auth.service';
import{LeadComponent}from'./lead/lead.component';
import{ResourceEnquiryComponent}from'./resource-enquiry/resource-enquiry.component';

@NgModule({
  declarations: [
    AppComponent,
    ResourcesComponent,
    ResourceComponent,
    ResourceListComponent,
    CoursesComponent,
    AddCourcesComponent,
    EditCourcesComponent,
    LoginComponent,
    ResourceEnquiryComponent,
    LeadComponent
    
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule
  ],
  providers: [
    ResourceService,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    RouterModule,
    CoursesService,
    AuthService,
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
