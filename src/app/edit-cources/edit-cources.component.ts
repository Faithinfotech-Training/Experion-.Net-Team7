import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Courses } from '../shared/courses';
import { CoursesService } from '../shared/courses.service';

@Component({
  selector: 'app-edit-cources',
  templateUrl: './edit-cources.component.html',
  styleUrls: ['./edit-cources.component.css']
})
export class EditCourcesComponent implements OnInit {

  courseId: number;
  course: Courses = new Courses();

  constructor(public service: CoursesService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.courseId = this.route.snapshot.params['courseId'];

    if (this.courseId!= 0 || this.courseId != null) {
      //get course and populate form
      this.service.getCourse(this.courseId).subscribe(
        (data) => {
          console.log(data);
          this.service.formData = data;
        },
        (error) => console.log(error)
      );
    }
  }

  //update
  updateCourse(form?: NgForm) {
    console.log("Updating a record ...");
    this.service.updateCourse(form.value).subscribe(
      (res) => {
        console.log(res);
      }
    );
    this.router.navigateByUrl('courses');
  }

}
