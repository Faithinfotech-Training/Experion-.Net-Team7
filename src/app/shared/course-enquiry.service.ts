import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CourseEnquiry } from './course-enquiry';
import { Courses } from './courses';
import { CourseEnquiryModel } from './course-enquiry-model';
import { CourseEnquiryCount } from './course-enquiry-count'

@Injectable({
  providedIn: 'root'
})
export class CourseEnquiryService {
  courseEnquiryModel: CourseEnquiryModel[];
  enquirydetails: CourseEnquiryModel[];
  courseEnquiryCount: CourseEnquiryCount[];

  formData: CourseEnquiry = new CourseEnquiry();

  constructor(private httpclient: HttpClient) { }

  // api for inserting CourseEnquiry
  insertCourseEnquiry(courseEnquiry: CourseEnquiry): Observable<any> {
    return this.httpclient.post(environment.apiUrl + "api/CourseEnquiry", courseEnquiry);
  }

  //bind viewmodel of course enquiry
  bindCourseEnquiry() {
    this.httpclient.get(environment.apiUrl + "api/CourseEnquiry/EnquiryReport")
      .toPromise().then(response =>
        this.courseEnquiryModel = response as CourseEnquiryModel[])
  }

  // get view model by course enquiry id 
  bindCourseEnquiryById(CourseEnquiryId: number): Observable<any> {
    return this.httpclient.get(environment.apiUrl + "api/CourseEnquiry/EnquiryReportById?id=" + CourseEnquiryId);
  }

  //get details by course id
  bindCourseEnquiryByCourseId(CourseId: number): Observable<any> {
    return this.httpclient.get(environment.apiUrl + "api/CourseEnquiry/EnquiryReportByCourseId?id=" + CourseId);
  }


  //get course enquiry count 
  bindCourseEnquiryCount() {
    this.httpclient.get(environment.apiUrl + "api/CourseEnquiry/EnquiryCount")
      .toPromise().then(response =>
        this.courseEnquiryCount = response as CourseEnquiryCount[]);
        
  }

}
