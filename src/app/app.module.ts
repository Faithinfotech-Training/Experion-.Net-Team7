import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { AdminComponent } from './admin/admin.component';
import { ManagerComponent } from './manager/manager.component';
import { AuthGuard } from './shared/auth.guard';
import{TokenInterceptor}from'./shared/token.interceptor';
import { CourseEnquiryComponent } from './course-enquiry/course-enquiry.component';
import { ResourcePipelineComponent } from './resource-pipeline/resource-pipeline.component';
import { EditResourcePipelineComponent } from './edit-resource-pipeline/edit-resource-pipeline.component';
import { ResourceSummaryComponent } from './resource-summary/resource-summary.component';
import { ResourceEnquiryReportComponent } from './resource-enquiry-report/resource-enquiry-report.component';
import { CourseEnquirySummaryComponent } from './course-enquiry-summary/course-enquiry-summary.component';
import { CourseEnquiryReportComponent } from './course-enquiry-report/course-enquiry-report.component';
import { CoursePipelineComponent } from './course-pipeline/course-pipeline.component';
import { EditCoursePipelineComponent } from './edit-course-pipeline/edit-course-pipeline.component';
import { CoursePipelineService} from './shared/course-pipeline.service';
import{PageVisitService}from'./shared/page-visit.service';
import { PagevisitComponent } from './pagevisit/pagevisit.component';
import { CourseEnquiryCountComponent } from './course-enquiry-count/course-enquiry-count.component';
import { ResourceEnquiryCountComponent } from './resource-enquiry-count/resource-enquiry-count.component';
import { UsercourselistComponent } from './usercourselist/usercourselist.component';
import { UserresourcelistComponent } from './userresourcelist/userresourcelist.component';
import { HomeComponent } from './home/home.component';
import { UserNavComponent } from './user-nav/user-nav.component';
import { MailerService } from './shared/mailer.service';

import { UserFooterComponent } from './user-footer/user-footer.component';
import { AdminnavComponent } from './adminnav/adminnav.component';
import { ManagernavComponent } from './managernav/managernav.component';
import { ChartsModule } from 'ng2-charts';
import { DatePipe } from '@angular/common';
import { ChartReportComponent } from './chart-report/chart-report.component';
import { UserManagementComponent } from './user-management/user-management.component';
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
    LeadComponent,
    AdminComponent,
    ManagerComponent,
    CourseEnquiryComponent,
    ResourcePipelineComponent,
    EditResourcePipelineComponent,
    ResourceSummaryComponent,
    ResourceEnquiryReportComponent,
    CourseEnquirySummaryComponent,
    CourseEnquiryReportComponent,
    CoursePipelineComponent,
    EditCoursePipelineComponent,
    PagevisitComponent,
    CourseEnquiryCountComponent,
    ResourceEnquiryCountComponent,
    UsercourselistComponent,
    UserresourcelistComponent,
    HomeComponent,
    UserNavComponent,
    UserFooterComponent,
    AdminnavComponent,
    ManagernavComponent,
    ChartReportComponent,
    UserManagementComponent

    
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
    ReactiveFormsModule,
    ChartsModule,
  ],
  providers: [
    ResourceService,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    RouterModule,
    DatePipe,
    CoursesService,
    AuthService,
    CoursesService,
    AuthGuard,
    PageVisitService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi:true
    },
    CoursePipelineService,
    MailerService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
