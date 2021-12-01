import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseEnquiryService } from '../shared/course-enquiry.service';

@Component({
  selector: 'app-course-enquiry-summary',
  templateUrl: './course-enquiry-summary.component.html',
  styleUrls: ['./course-enquiry-summary.component.css']
})
export class CourseEnquirySummaryComponent implements OnInit {
  page: number = 1;
  filter: string;

  constructor(public courseEnquiryService:CourseEnquiryService,private router: Router) { }

  ngOnInit(): void {
    this.courseEnquiryService.bindCourseEnquiry();
  }


    //view details by taking id 
    viewDetails(CourseEnquiryId:number){
      console.log(CourseEnquiryId);
      this.router.navigate(['courseenquiryreport',CourseEnquiryId]);
    }

}
