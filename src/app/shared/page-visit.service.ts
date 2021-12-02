import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PageVisit } from './page-visit';

@Injectable({
  providedIn: 'root'
})
export class PageVisitService {

  pageVisits:PageVisit[];
  constructor(private http: HttpClient ) { }

  bindPageVisit(){
    this.http.get( environment.apiUrl + "api/PageVisit")
    .toPromise().then(res =>
      this.pageVisits = res as PageVisit[]);
  }
}
