import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../shared/auth.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  constructor(public userService: UserService, private authService: AuthService, private router: Router, private route: ActivatedRoute, private toxter: ToastrService) { }

  ngOnInit(): void {

  }

  insertUser(form?: NgForm) {
    console.log("Inserting a user ...");
    console.log(form.value);
    this.userService.insertUser(form.value).subscribe(
      (res) => {
        console.log(res);
        this.toxter.success("User inserted successfuly", "Success");
        form.reset();
        this.router.navigateByUrl('admin');

      }
      , (error) => {
        this.toxter.error("something went wrong", "Error!");

      }
    );
  }

  // check whether the user is admin or not
  IsAdmin() {
    if (localStorage.getItem("Access_Role") === '1') {
      return true;
    }
    else {
      return false;
    }

  }


}
