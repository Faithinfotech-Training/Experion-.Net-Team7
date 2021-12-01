import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResourceenquiryService } from '../shared/resourceenquiry.service';

@Component({
  selector: 'app-resource-summary',
  templateUrl: './resource-summary.component.html',
  styleUrls: ['./resource-summary.component.css']
})
export class ResourceSummaryComponent implements OnInit {
  page: number = 1;
  filter: string;

  constructor(public resourceEnquiryService:ResourceenquiryService,private router: Router) { }

  ngOnInit(): void {
    this.resourceEnquiryService.bindResourceEnquiry();
  }

  //view details by taking id 
  viewDetails(ResourceEnquiryId:number){
    console.log(ResourceEnquiryId);
    this.router.navigate(['resourceenquiryreport',ResourceEnquiryId]);
  }

}
