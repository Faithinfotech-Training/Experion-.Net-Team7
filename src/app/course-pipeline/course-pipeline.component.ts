import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { CoursePipelineService } from '../shared/course-pipeline.service';

@Component({
  selector: 'app-course-pipeline',
  templateUrl: './course-pipeline.component.html',
  styleUrls: ['./course-pipeline.component.css']
})
export class CoursePipelineComponent implements OnInit {

  constructor(public authService:AuthService,private route:Router,public service: CoursePipelineService) { }

  ngOnInit(): void {
    this.service.getReport();
  }
  
  LogOut()
  {
   
    this.authService.LogOut();
    this.route.navigateByUrl("login");

  }
}
