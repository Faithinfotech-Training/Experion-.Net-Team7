import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Resourceenquiry } from './resourceenquiry';
import {ResourceEnquiryModel} from './resource-enquiry-model'

@Injectable({
  providedIn: 'root'
})
export class ResourceenquiryService {
  resourceEnquiryModel:ResourceEnquiryModel[];
  enquirydetails:ResourceEnquiryModel[];
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
}
