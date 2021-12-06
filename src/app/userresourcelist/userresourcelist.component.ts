import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageVisitService } from '../shared/page-visit.service';
import { Resource } from '../shared/resource';
import { ResourceService } from '../shared/resource.service';

@Component({
  selector: 'app-userresourcelist',
  templateUrl: './userresourcelist.component.html',
  styleUrls: ['./userresourcelist.component.css']
})
export class UserresourcelistComponent implements OnInit {

  constructor( public service:ResourceService,private route:Router,public pageVisitService:PageVisitService) { }
resourceview:Resource[];
  ngOnInit(): void {

    this.service.bindAvailableResource();
    this.pageVisitService.updatepageVisit("resourcelist");
   
  
}

onEnquiry(ResourceId:number)
{
  this.route.navigateByUrl('resourceenquiry/'+ResourceId)
}

}
