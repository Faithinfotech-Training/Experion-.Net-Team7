import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CourseEnquiry } from './course-enquiry';
import { Courses } from './courses';

@Injectable({
  providedIn: 'root'
})
export class CourseEnquiryService {

  formData: CourseEnquiry = new CourseEnquiry();

  constructor(private httpclient: HttpClient) { }

  // api for inserting CourseEnquiry
  insertCourseEnquiry(courseEnquiry: CourseEnquiry): Observable<any> {
    return this.httpclient.post(environment.apiUrl + "api/CourseEnquiry", courseEnquiry);
  }
}
