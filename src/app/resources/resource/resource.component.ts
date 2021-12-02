import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ResourceService } from 'src/app/shared/resource.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Resource } from 'src/app/shared/resource';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {

  resId:number;
  resource: Resource= new Resource();
  constructor(public resService: ResourceService, private toastrService: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private authService:AuthService,
    private location: Location) { }


    goBack(){
      this.location.back();
    }
  ngOnInit(): void {
  
     // this.resetform();
     //get resid from activatedroute
     this.resId = this.route.snapshot.params['resId'];
     console.log(this.resId);
     if (this.resId != 0 && this.resId != null && this.resId!=undefined) {
       //get resource
       this.resService.getResourceById(this.resId).subscribe(
         (data) => {
           console.log(data);
           this.resService.formData = Object.assign({}, data);
         },
         error =>
           console.log(error)
       );
     }
 
   }
   onSubmit(form: NgForm) {
     console.log(form.value);
 
     let addId = this.resService.formData.ResourceId;
     //insert
     if (addId == 0 || addId == null) {
       this.insertResourceRecord(form);
       this.router.navigateByUrl('resourcelist');
     
     }
     //update
     else {
       console.log("update");
       this.updateResourceRecord(form);
       this.router.navigateByUrl('resourcelist');
     }
    
 
   }
 
   //clear all content at initialisation
 
   resetform(form?: NgForm) {
     if (form != null) {
       form.resetForm();
     }
   }
 
   //insert resource
   insertResourceRecord(form?: NgForm) {
     console.log("inserting resource...");
     this.resService.insertResource(form.value).subscribe(
       (result) => {
         console.log("result" + result);
         this.resetform(form);
         this.toastrService.success("Inserted resource..","Success")
         
       },
       (error)=>
       {
        this.toastrService.error("Error while inserting..","Error")
       }
     );
    
   }
   //update resource
   updateResourceRecord(form?: NgForm) {
     console.log("updating resource...");
     this.resService.updateResource(form.value).subscribe(
       (result) => {
         console.log(result);
         this.resetform(form);
         this.toastrService.info("Updated resource..","Team 7")
        
       },
       (error)=>
       {
        this.toastrService.error("Error while updating..","Error")
       }
     );
   
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
