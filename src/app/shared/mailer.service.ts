import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailerService {

  constructor(private http:HttpClient) { }

  sentMail(format: any): Observable<any>{
    return this.http.post("http://localhost:5000/mail",format);
  }

  test(format: any): Observable<any>{
    return this.http.post("http://localhost:5000/test",format);
  }
}
