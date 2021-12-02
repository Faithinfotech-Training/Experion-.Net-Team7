import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { CourseEnquiryService } from '../shared/course-enquiry.service';

@Component({
  selector: 'app-course-enquiry-summary',
  templateUrl: './course-enquiry-summary.component.html',
  styleUrls: ['./course-enquiry-summary.component.css']
})
export class CourseEnquirySummaryComponent implements OnInit {
  page: number = 1;
  filter: string;

  constructor(public courseEnquiryService:CourseEnquiryService,private router: Router,private authService:AuthService) { }

  ngOnInit(): void {
    this.courseEnquiryService.bindCourseEnquiry();
  }


    //view details by taking id 
    viewDetails(CourseEnquiryId:number){
      console.log(CourseEnquiryId);
      this.router.navigate(['courseenquiryreport',CourseEnquiryId]);
    }

    //logout
    LogOut()
  {
   
    this.authService.LogOut();
    this.router.navigateByUrl("login");

  }

}
