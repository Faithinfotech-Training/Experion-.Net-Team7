import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Resourceenquiry } from './resourceenquiry';

@Injectable({
  providedIn: 'root'
})
export class ResourceenquiryService {
  formData: Resourceenquiry = new Resourceenquiry();

  constructor(private httpclient: HttpClient) { }

  //insert Resource Enquiry
  insertResourceEnquiry(resourceEnquiry: Resourceenquiry): Observable<any> {
    return this.httpclient.post(environment.apiUrl + "api/ResourceEnquiry", resourceEnquiry);
  }
}
