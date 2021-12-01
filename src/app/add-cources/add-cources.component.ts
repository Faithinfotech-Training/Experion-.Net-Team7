import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../shared/courses.service';

@Component({
  selector: 'app-add-cources',
  templateUrl: './add-cources.component.html',
  styleUrls: ['./add-cources.component.css']
})
export class AddCourcesComponent implements OnInit {

  constructor(public service: CoursesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  insertCourse(form?: NgForm) {
    console.log("Inserting a record ...");
    console.log(form.value);
    this.service.addCourse(form.value).subscribe(
      (res) => {
        console.log(res);
        this.router.navigateByUrl('courses');
      }
    );
  }

}
