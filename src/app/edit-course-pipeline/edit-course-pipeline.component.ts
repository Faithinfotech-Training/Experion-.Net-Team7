import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../shared/auth.service';
import { CoursePipelineService } from '../shared/course-pipeline.service';
import { MailerService } from '../shared/mailer.service';

@Component({
  selector: 'app-edit-course-pipeline',
  templateUrl: './edit-course-pipeline.component.html',
  styleUrls: ['./edit-course-pipeline.component.css']
})
export class EditCoursePipelineComponent implements OnInit {

  leadId: number;

  constructor( public service: CoursePipelineService, private authService:AuthService,private router: Router,
    private route: ActivatedRoute, public mailerService: MailerService,public toxter:ToastrService) { }

  ngOnInit(): void {
    this.leadId = this.route.snapshot.params['id'];
    this.service.getLead(this.leadId).subscribe(
      (data) => {
        console.log(data);
        this.service.leadData = data;
      },
      (error) => console.log(error)
    );
  }

  //update
  updateLead(form?: NgForm) {
    console.log("Updating a record ...");
    // console.log(form.value);
    this.mailerService.sentMail(form.value).subscribe(
      (res) => {
        console.log(res);
      }
    );
    this.service.updateLead(form.value).subscribe(
      (res) => {
        console.log(res);
        this.toxter.info("updated successfully","Success")

      },(error)=>
      {
        this.toxter.error("Something went wrong","Erorr")
      }
    );
    this.router.navigateByUrl('coursepipeline');
  }


  LogOut()
  {
   
    this.authService.LogOut();
    this.router.navigateByUrl("login");

  }

}
