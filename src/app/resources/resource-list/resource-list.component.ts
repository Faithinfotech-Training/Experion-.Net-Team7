import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/auth.service';
import { Resource } from 'src/app/shared/resource';
import { ResourceService } from 'src/app/shared/resource.service';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})
export class ResourceListComponent implements OnInit {
  page: number = 1;
  filter: string;
  constructor(public resourceService: ResourceService,
    private toastrService: ToastrService,
    private authService:AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.resourceService.bindResource();
  }
  //populate form by clicking the column
  populateForm(res: Resource) {
    console.log(res);
    this.resourceService.formData = Object.assign({}, res);
  }

  //delete
  deleteResource(id: number) {
    console.log("deleting resource...")
    if (confirm('Are you sure to delete this record?')) {
      this.resourceService.deleteResource(id).subscribe(
        (result) => {
          console.log(result);
          this.resourceService.bindResource();

      
        },
        (error) => {
          console.log(error);
        });

    }
  }
  //update a resource
  updateResource(resId: number) {
    console.log(resId);
    this.router.navigate(['resource', resId]);
  }

  LogOut()
  {
   
    this.authService.LogOut();
    this.router.navigateByUrl("login");

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
