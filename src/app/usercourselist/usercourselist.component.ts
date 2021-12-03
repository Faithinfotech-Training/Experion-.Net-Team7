import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Courses } from '../shared/courses';
import { CoursesService } from '../shared/courses.service';

@Component({
  selector: 'app-usercourselist',
  templateUrl: './usercourselist.component.html',
  styleUrls: ['./usercourselist.component.css']
})
export class UsercourselistComponent implements OnInit {

  constructor( public service:CoursesService,private route:Router) { }
courseview:Courses[];
  ngOnInit(): void {

    this.service.getAvailableCourses();
   
  
}

onEnquiry(courseId:number)
{
  this.route.navigateByUrl('courseenquiry/'+courseId)
}

}
