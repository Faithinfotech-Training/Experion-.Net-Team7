import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { ResourcepipelineService } from '../shared/resourcepipeline.service';

@Component({
  selector: 'app-resource-pipeline',
  templateUrl: './resource-pipeline.component.html',
  styleUrls: ['./resource-pipeline.component.css']
})
export class ResourcePipelineComponent implements OnInit {
  page: number = 1;
  filter: string;
  constructor(public service:ResourcepipelineService,private authService:AuthService,private route:Router) { }

  ngOnInit(): void {
    this.service.getReport();
  }

  LogOut()
  {
   
    this.authService.LogOut();
    this.route.navigateByUrl("login");

  }

}
