import { Injectable } from '@angular/core';
import { Courses } from './courses';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  //instance 
  formData: Courses = new Courses();
  courses: Courses[];
  availableCourses:Courses[];

  constructor(private http: HttpClient) { }

  //add course
  addCourse(course: Courses): Observable<any>{
    return this.http.post(environment.apiUrl + "api/courses",course );
  }

  //get courses
  getCourses(){
    this.http.get(environment.apiUrl+ "api/courses")
    .toPromise().then(res=>
      this.courses = res as Courses[]);
  }

  //get courses which are available and public
  getAvailableCourses(){
    this.http.get(environment.apiUrl+ "api/courses/getavailable")
    .toPromise().then(res=>
      this.availableCourses = res as Courses[]);
  }

  //update course
  updateCourse(course: Courses): Observable<any>{
    return this.http.put(environment.apiUrl + "api/courses",course );
  }

  //delete course
  deleteCourse(id: number){
    return this.http.delete(environment.apiUrl + "api/courses/" + id);
  }

  //get particular course
  getCourse(id: number): Observable<any>{
    return this.http.get(environment.apiUrl+"api/courses/" + id);
  }
}
