import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { ResourceenquiryService } from '../shared/resourceenquiry.service';

@Component({
  selector: 'app-resource-summary',
  templateUrl: './resource-summary.component.html',
  styleUrls: ['./resource-summary.component.css']
})
export class ResourceSummaryComponent implements OnInit {
  page: number = 1;
  filter: string;

  constructor(public resourceEnquiryService:ResourceenquiryService,private router: Router,private authService:AuthService) { }

  ngOnInit(): void {
    this.resourceEnquiryService.bindResourceEnquiry();
  }

  //view details by taking id 
  viewDetails(ResourceEnquiryId:number){
    console.log(ResourceEnquiryId);
    this.router.navigate(['resourceenquiryreport',ResourceEnquiryId]);
  }
//logout
  LogOut()
  {
   
    this.authService.LogOut();
    this.router.navigateByUrl("login");

  }

}
