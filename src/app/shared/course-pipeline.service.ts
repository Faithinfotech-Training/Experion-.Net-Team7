import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CoursePipeline } from './course-pipeline';
import { Lead } from './lead';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursePipelineService {

  formData: CoursePipeline = new CoursePipeline();
  pipeline: CoursePipeline[];
  leadData: Lead = new Lead();
  lead: Lead[];

  constructor(private http: HttpClient) { }

  getReport(){
    this.http.get( environment.apiUrl + "api/courseenquiry/enquiryreport")
    .toPromise().then(res =>
      this.pipeline = res as CoursePipeline[]);
  }

  getLead(id: number): Observable<any>{
    return this.http.get( environment.apiUrl + "api/lead/" + id);
  }

  updateLead(lead: Lead): Observable<any>{
    return this.http.put( environment.apiUrl + "api/lead/", lead );
  }
}
