import { Component, OnInit } from '@angular/core';
import { CoursePipelineService } from '../shared/course-pipeline.service';

@Component({
  selector: 'app-course-pipeline',
  templateUrl: './course-pipeline.component.html',
  styleUrls: ['./course-pipeline.component.css']
})
export class CoursePipelineComponent implements OnInit {

  constructor(public service: CoursePipelineService) { }

  ngOnInit(): void {
    this.service.getReport();
  }

}
