import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { ResourceenquiryService } from '../shared/resourceenquiry.service';
import { DatePipe } from '@angular/common'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-resource-enquiry-count',
  templateUrl: './resource-enquiry-count.component.html',
  styleUrls: ['./resource-enquiry-count.component.css']
})
export class ResourceEnquiryCountComponent implements OnInit {
  page: number = 1;
  filter: string;
  issubmit=false;
date:Date=new Date();

  constructor(public datepipe: DatePipe,public resourceEnquiryService: ResourceenquiryService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.resourceEnquiryService.bindResourceEnquiryCount();
   this.date.setDate(this.date.getDate() - 1);
    //let latest_date =this.datepipe.transform(this.date, 'yyyy-MM-dd');
    //this.resourceEnquiryService.bindResourceEnquiryCountbydate(latest_date)
  }

  onpress(form:NgForm)
  {
    this.issubmit=true;
    //api
    console.log( form.value.filterdate);
    this.resourceEnquiryService.bindResourceEnquiryCountbydate(form.value.filterdate)
    console.log(this.resourceEnquiryService.resourceEnquiryCountbydate)

  }
  //view details by resource id 
  viewDetails(ResourceId: number) {
    console.log(ResourceId);
    this.router.navigate(['resourcesummary', ResourceId]);
  }

  //logout
  LogOut() {

    this.authService.LogOut();
    this.router.navigateByUrl("login");

  }

}
