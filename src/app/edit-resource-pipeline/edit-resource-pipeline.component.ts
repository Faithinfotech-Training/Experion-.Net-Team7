import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../shared/auth.service';
import { MailerService } from '../shared/mailer.service';
import { ResourcepipelineService } from '../shared/resourcepipeline.service';
@Component({
  selector: 'app-edit-resource-pipeline',
  templateUrl: './edit-resource-pipeline.component.html',
  styleUrls: ['./edit-resource-pipeline.component.css']
})
export class EditResourcePipelineComponent implements OnInit {
  leadId: number;
  constructor(public service: ResourcepipelineService,
    private router:Router,private authService:AuthService,
    private route:ActivatedRoute, private mailerService: MailerService,public toxter:ToastrService) { }

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
    console.log("Updating lead details ...");
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
    this.router.navigateByUrl('resourcepipeline');
  }

  LogOut()
  {
   
    this.authService.LogOut();
    this.router.navigateByUrl("login");

  }

}
