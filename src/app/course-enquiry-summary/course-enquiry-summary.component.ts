import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { CourseEnquiryService } from '../shared/course-enquiry.service';

@Component({
  selector: 'app-course-enquiry-summary',
  templateUrl: './course-enquiry-summary.component.html',
  styleUrls: ['./course-enquiry-summary.component.css']
})
export class CourseEnquirySummaryComponent implements OnInit {
  CourseId:number;
  page: number = 1;
  filter: string;

  constructor(public courseEnquiryService:CourseEnquiryService,private router: Router,private authService:AuthService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.courseEnquiryService.bindCourseEnquiry();

    //get courseid from ativated route
    this.CourseId=this.route.snapshot.params['CourseId'];
    console.log(this.CourseId);

    if (this.CourseId != 0 && this.CourseId != null && this.CourseId != undefined) {
      //get courseenquiry
      this.courseEnquiryService.bindCourseEnquiryByCourseId(this.CourseId).subscribe(
        (data) => {
          console.log(data);
          this.courseEnquiryService.enquirydetails = data;

        },
        error =>
          console.log(error)
      );
    }

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
