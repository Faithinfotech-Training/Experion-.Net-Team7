import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { CourseEnquiryService } from '../shared/course-enquiry.service';

@Component({
  selector: 'app-course-enquiry-report',
  templateUrl: './course-enquiry-report.component.html',
  styleUrls: ['./course-enquiry-report.component.css']
})
export class CourseEnquiryReportComponent implements OnInit {
  CourseEnquiryId: number;

  constructor(public courseEnquiryService: CourseEnquiryService,
    private route: ActivatedRoute,
    private authService:AuthService,
    private router: Router) { }

  ngOnInit(): void {
    //get courseEnquiryid from activated route
    this.CourseEnquiryId = this.route.snapshot.params['CourseEnquiryId'];
    console.log(this.CourseEnquiryId);

    if (this.CourseEnquiryId != 0 && this.CourseEnquiryId != null && this.CourseEnquiryId != undefined) {
      //get resourceenquiry
      this.courseEnquiryService.bindCourseEnquiryById(this.CourseEnquiryId).subscribe(
        (data) => {
          console.log(data);
          this.courseEnquiryService.enquirydetails = data;

        },
        error =>
          console.log(error)
      );
    }
  }

  //logout
  LogOut()
  {
   
    this.authService.LogOut();
    this.router.navigateByUrl("login");

  }

}
