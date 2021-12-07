import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../shared/auth.service';
import { CoursesService } from '../shared/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  page:number=1;
  filter: string;

  constructor( public service:CoursesService,public authService:AuthService,private route:Router, private router: Router ,public toxter:ToastrService) { }

  ngOnInit(): void {
    this.service.getCourses();
  }

  //delete course
  deleteCourse(id: number){
    if(confirm('Are you sure you want to delete')){
     this.service.deleteCourse(id).subscribe(
       (res) => {
         console.log(res);
         this.toxter.info("is available set to false","Success")
         window.location.reload();
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

 LogOut()
  {
   
    this.authService.LogOut();
    this.route.navigateByUrl("login");

  }

  IsAdmin()
  {
    if(localStorage.getItem("Access_Role")==='1')
    {
      return true;
    }
    else{
      return false;
    }

  }
  IsManager()
  {
    if(localStorage.getItem("Access_Role")==='2')
    {
      return true;
    }
    else{
      return false;
    }

  }

}
