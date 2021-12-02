import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { CoursePipelineService } from '../shared/course-pipeline.service';

@Component({
  selector: 'app-edit-course-pipeline',
  templateUrl: './edit-course-pipeline.component.html',
  styleUrls: ['./edit-course-pipeline.component.css']
})
export class EditCoursePipelineComponent implements OnInit {

  leadId: number;

  constructor( public service: CoursePipelineService, private authService:AuthService,private router: Router,
    private route: ActivatedRoute) { }

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
    this.service.updateLead(form.value).subscribe(
      (res) => {
        console.log(res);
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
