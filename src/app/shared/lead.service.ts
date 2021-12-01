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
  leadData: Lead = new Lead();
  lead: Lead[];

  constructor(private httpclient: HttpClient) { }

    //insert lead
    insertLead(lead: Lead): Observable<any> {
      return this.httpclient.post(environment.apiUrl + "api/lead", lead);
      
    }
     //get Lead by id
  getLeadById(leadId: number): Observable<any> {
    return this.httpclient.get(environment.apiUrl + "api/lead/" + leadId);

  }

  //update lead
updateLead(lead:Lead):Observable<any>
{
  return this.httpclient.put(environment.apiUrl+"api/lead",lead);

}
}
