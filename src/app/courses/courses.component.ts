import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from '../shared/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  page:number=1;
  filter: string;

  constructor( public service:CoursesService, private router: Router ) { }

  ngOnInit(): void {
    this.service.getCourses();
  }

  //delete course
  deleteCourse(id: number){
    if(confirm('Are you sure you want to delete')){
     this.service.deleteCourse(id).subscribe(
       (res) => {
         console.log(res);
       }
     );
    }
    else{
     window.location.reload();
    }   
 }

 //update
 updateCourse(courseId: number){
   console.log(courseId);
   this.router.navigate(['editcourse',courseId]);
 }
}
