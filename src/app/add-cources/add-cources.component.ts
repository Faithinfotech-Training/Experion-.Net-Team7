import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../shared/auth.service';
import { CoursesService } from '../shared/courses.service';

@Component({
  selector: 'app-add-cources',
  templateUrl: './add-cources.component.html',
  styleUrls: ['./add-cources.component.css']
})
export class AddCourcesComponent implements OnInit {

  constructor(public service: CoursesService,private authService:AuthService, private router: Router, private route: ActivatedRoute,private toxter:ToastrService) { }

  ngOnInit(): void {
    
  }

  insertCourse(form?: NgForm) {
    console.log("Inserting a record ...");
    console.log(form.value);
    this.service.addCourse(form.value).subscribe(
      (res) => {
        console.log(res);
        this.toxter.success("Course inserted successfuly","Success");
        form.reset();
        this.router.navigateByUrl('courses');
       
      }
      ,(error)=>
      {
        this.toxter.error("something went wrong","Error!");

      }
    );
  }


  // log out 
  LogOut()
  {
   
    this.authService.LogOut();
    this.router.navigateByUrl("login");

  }

  // check whether the user is admin or not
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
  // check whether the user is manager or not
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
