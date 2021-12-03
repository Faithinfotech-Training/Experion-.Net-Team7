import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../shared/courses.service';
import { ResourceService } from '../shared/resource.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public courseService: CoursesService, public resourceService: ResourceService) { }

  ngOnInit(): void {
    this.courseService.getCourses();
    this.resourceService.bindResource();
  }

}
