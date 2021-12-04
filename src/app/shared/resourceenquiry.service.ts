import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {ResourceEnquiryCount} from './resource-enquiry-count'
import { Resourceenquiry } from './resourceenquiry';
import {ResourceEnquiryModel} from './resource-enquiry-model'

@Injectable({
  providedIn: 'root'
})
export class ResourceenquiryService {
  resourceEnquiryModel:ResourceEnquiryModel[];
  enquirydetails:ResourceEnquiryModel[];
  resourceEnquiryCount:ResourceEnquiryCount[];
  resourceEnquiryCountbydate:ResourceEnquiryCount[];
  formData: Resourceenquiry = new Resourceenquiry();


  constructor(private httpclient: HttpClient) { }


  
  //insert Resource Enquiry
  insertResourceEnquiry(resourceEnquiry: Resourceenquiry): Observable<any> {
    return this.httpclient.post(environment.apiUrl + "api/ResourceEnquiry", resourceEnquiry);
  }

  //bind viewmodel of resource enquiry
  bindResourceEnquiry(){
    this.httpclient.get(environment.apiUrl+"api/ResourceEnquiry/EnquiryReport")
    .toPromise().then(response=>
      this.resourceEnquiryModel=response as ResourceEnquiryModel[])
    
  }

  // get view model by resource enquiry id 
  bindResourceEnquiryById(ResourceEnquiryId:number):Observable<any>
  {
    return this.httpclient.get(environment.apiUrl+"api/ResourceEnquiry/EnquiryReportById?id="+ResourceEnquiryId);
  }

  //get details by resource id
  bindResourceEnquiryByResourceId(ResourceId:number):Observable<any>
  {
    return this.httpclient.get(environment.apiUrl+"api/ResourceEnquiry/EnquiryReportByResourceId?id="+ResourceId);
  }


    //get resource enquiry count 
    bindResourceEnquiryCount() {
      this.httpclient.get(environment.apiUrl + "api/ResourceEnquiry/EnquiryCount")
        .toPromise().then(response =>
          this.resourceEnquiryCount = response as ResourceEnquiryCount[]);
          
    }
    bindResourceEnquiryCountbydate(filterdate:string) {
      this.httpclient.get(environment.apiUrl + "api/resourceEnquiry/EnquiryCountByDate?date="+filterdate)
        .toPromise().then(response =>
          this.resourceEnquiryCountbydate = response as ResourceEnquiryCount[]);
          
    }
//get enquiry count in syncronouse form
    getResourceenquirycount()
    {
      return this.httpclient.get(environment.apiUrl+"api/ResourceEnquiry/EnquiryCount").toPromise().then((data)=>{
        return data;
      });
    }

}
