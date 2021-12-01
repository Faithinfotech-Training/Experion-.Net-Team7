import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResourcePipeline} from './resource-pipeline';
import { Lead } from './lead';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ResourcepipelineService {

  formData: ResourcePipeline = new ResourcePipeline();
  pipeline : ResourcePipeline[];
  leadData: Lead = new Lead();
  lead: Lead[];
  constructor(private http: HttpClient) { }

  getReport(){
    this.http.get(environment.apiUrl+'api/resourceenquiry/enquiryreport')
    .toPromise().then(respone=>
      this.pipeline=respone as ResourcePipeline[]);
  }

  getLead(id: number): Observable<any>{
    return this.http.get( environment.apiUrl + "api/lead/" + id);
  }

  updateLead(lead: Lead): Observable<any>{
    return this.http.put( environment.apiUrl + "api/lead/", lead );
  }
}
