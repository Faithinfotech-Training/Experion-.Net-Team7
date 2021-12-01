import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResourcepipelineService } from '../shared/resourcepipeline.service';
@Component({
  selector: 'app-edit-resource-pipeline',
  templateUrl: './edit-resource-pipeline.component.html',
  styleUrls: ['./edit-resource-pipeline.component.css']
})
export class EditResourcePipelineComponent implements OnInit {
  leadId: number;
  constructor(public service: ResourcepipelineService,
    private router:Router,
    private route:ActivatedRoute) { }

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
    this.service.updateLead(form.value).subscribe(
      (res) => {
        console.log(res);
      }
    );
    this.router.navigateByUrl('resourcepipeline');
  }
}
