import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { PageVisitService } from '../shared/page-visit.service';

@Component({
  selector: 'app-pagevisit',
  templateUrl: './pagevisit.component.html',
  styleUrls: ['./pagevisit.component.css']
})
export class PagevisitComponent implements OnInit {

  page:number=1;
  filter:string;
  constructor(public pagevisitService:PageVisitService,private route:Router,private authService:AuthService) { }

  ngOnInit(): void {

    this.pagevisitService.bindPageVisit();
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
