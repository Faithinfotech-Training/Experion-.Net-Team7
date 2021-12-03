import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { ResourceenquiryService } from '../shared/resourceenquiry.service';

@Component({
  selector: 'app-resource-enquiry-count',
  templateUrl: './resource-enquiry-count.component.html',
  styleUrls: ['./resource-enquiry-count.component.css']
})
export class ResourceEnquiryCountComponent implements OnInit {
  page: number = 1;
  filter: string;

  constructor(public resourceEnquiryService: ResourceenquiryService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.resourceEnquiryService.bindResourceEnquiryCount();
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
