import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Resource } from '../shared/resource';
import { ResourceService } from '../shared/resource.service';

@Component({
  selector: 'app-userresourcelist',
  templateUrl: './userresourcelist.component.html',
  styleUrls: ['./userresourcelist.component.css']
})
export class UserresourcelistComponent implements OnInit {

  constructor( public service:ResourceService,private route:Router) { }
resourceview:Resource[];
  ngOnInit(): void {

    this.service.bindAvailableResource();
   
  
}

onEnquiry(ResourceId:number)
{
  this.route.navigateByUrl('resourceenquiry/'+ResourceId)
}

}
