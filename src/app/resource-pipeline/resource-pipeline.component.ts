import { Component, OnInit } from '@angular/core';
import { ResourcepipelineService } from '../shared/resourcepipeline.service';

@Component({
  selector: 'app-resource-pipeline',
  templateUrl: './resource-pipeline.component.html',
  styleUrls: ['./resource-pipeline.component.css']
})
export class ResourcePipelineComponent implements OnInit {

  constructor(public service:ResourcepipelineService) { }

  ngOnInit(): void {
    this.service.getReport();
  }

}
