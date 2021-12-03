import { Component, OnInit } from '@angular/core';
import { CourseEnquiryService } from '../shared/course-enquiry.service';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-course-enquiry-count',
  templateUrl: './course-enquiry-count.component.html',
  styleUrls: ['./course-enquiry-count.component.css']
})
export class CourseEnquiryCountComponent implements OnInit {
  page: number = 1;
  filter:string;

  constructor(public courseEnquiryService: CourseEnquiryService,private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.courseEnquiryService.bindCourseEnquiryCount();
  }

      //view details by course id 
      viewDetails(CourseId:number){
        console.log(CourseId);
        this.router.navigate(['courseenquirysummary',CourseId]);
      }

  //logout
  LogOut() {

    this.authService.LogOut();
    this.router.navigateByUrl("login");

  }

}
