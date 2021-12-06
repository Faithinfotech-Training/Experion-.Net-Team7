import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import{CourseEnquiry}from'../shared/course-enquiry';
import{CourseEnquiryService}from'../shared/course-enquiry.service';
import{Lead}from'../shared/lead';
import { LeadService } from '../shared/lead.service';


@Component({
  selector: 'app-course-enquiry',
  templateUrl: './course-enquiry.component.html',
  styleUrls: ['./course-enquiry.component.css']
})
export class CourseEnquiryComponent implements OnInit {

  courseEnquiry:CourseEnquiry=new CourseEnquiry();
  lead:Lead=new Lead();
  CourseId:number;

  constructor(public courseEnquiryService:CourseEnquiryService,private router:Router,public leadService:LeadService,private route:ActivatedRoute,private toxter:ToastrService) { }

  ngOnInit(): void {
    //get snapshot
    this.CourseId=this.route.snapshot.params['CourseId'];
    this.courseEnquiryService.formData.CourseId=this.CourseId;

  }

  onSubmit(form:NgForm)
  {
    console.log(form.value);
    //insert lead
    this.insertLead(form);
    
  }

  //insert lead 
  insertLead(form?:NgForm){
    console.log("Inserting a lead record...");
    this.leadService.insertLead(form.value).subscribe(
      (result)=>{
        console.log(result);
        // getting lead id from reasult and adding to form parameter
        form.value.LeadId=result;
        console.log(this.courseEnquiryService.formData.LeadId);
        this.insertCourseEnquiry(form);

       
       this.toxter.success("Your query is registered successfully",'Success');
       form.reset();
       this.router.navigateByUrl("/home");
       
      },
      (error)=>
      {
          this.toxter.error("Something went wrong, Please try again.","Error");
      }
    ); 
  }

  //insert resource enquiry
    
    insertCourseEnquiry(form?:NgForm){
    console.log("Inserting an enquiry...");
    console.log(form.value);
    this.courseEnquiryService.insertCourseEnquiry(form.value).subscribe(
      (result)=>{
        console.log(result);
       
      }
    ); 
  }

}
