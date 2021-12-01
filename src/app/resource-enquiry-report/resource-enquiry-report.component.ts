import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResourceenquiryService } from '../shared/resourceenquiry.service';

@Component({
  selector: 'app-resource-enquiry-report',
  templateUrl: './resource-enquiry-report.component.html',
  styleUrls: ['./resource-enquiry-report.component.css']
})
export class ResourceEnquiryReportComponent implements OnInit {

  ResourceEnquiryId:number;
  constructor(public resourceEnquiryService:ResourceenquiryService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    //get resourceEnquiryid from activated route
    this.ResourceEnquiryId=this.route.snapshot.params['ResourceEnquiryId'];
    console.log(this.ResourceEnquiryId);

    if (this.ResourceEnquiryId != 0 && this.ResourceEnquiryId != null && this.ResourceEnquiryId!=undefined) {
      //get resourceenquiry
      this.resourceEnquiryService.bindResourceEnquiryById(this.ResourceEnquiryId).subscribe(
        (data) => {
          console.log(data);
           this.resourceEnquiryService.enquirydetails = data;
           
        },
        error =>
          console.log(error)
      );
    }
  }

}
