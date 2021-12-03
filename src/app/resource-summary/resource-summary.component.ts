import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { ResourceenquiryService } from '../shared/resourceenquiry.service';

@Component({
  selector: 'app-resource-summary',
  templateUrl: './resource-summary.component.html',
  styleUrls: ['./resource-summary.component.css']
})
export class ResourceSummaryComponent implements OnInit {
  ResourceId: number;
  page: number = 1;
  filter: string;

  constructor(public resourceEnquiryService: ResourceenquiryService, private router: Router, private authService: AuthService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.resourceEnquiryService.bindResourceEnquiry();

    // get resource id from activated route 
    this.ResourceId = this.route.snapshot.params['ResourceId'];
    console.log(this.ResourceId);

    if (this.ResourceId != 0 && this.ResourceId != null && this.ResourceId != undefined) {
      //get courseenquiry
      this.resourceEnquiryService.bindResourceEnquiryByResourceId(this.ResourceId).subscribe(
        (data) => {
          console.log(data);
          this.resourceEnquiryService.enquirydetails = data;

        },
        error =>
          console.log(error)
      );
    }
  }

  //view details by taking id 
  viewDetails(ResourceEnquiryId: number) {
    console.log(ResourceEnquiryId);
    this.router.navigate(['resourceenquiryreport', ResourceEnquiryId]);
  }
  //logout
  LogOut() {

    this.authService.LogOut();
    this.router.navigateByUrl("login");

  }

}
