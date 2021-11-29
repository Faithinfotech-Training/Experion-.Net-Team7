import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Lead } from './lead';

@Injectable({
  providedIn: 'root'
})
export class LeadService {

  formData:Lead = new Lead();

  constructor(private httpclient: HttpClient) { }

    //insert lead
    insertLead(lead: Lead): Observable<any> {
      return this.httpclient.post(environment.apiUrl + "api/lead", lead);
      
    }
}
