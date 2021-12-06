import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  formData:Users=new Users();
  constructor(private httpclient:HttpClient) { }

    //insert user Enquiry
    insertUser(user: Users): Observable<any> {
      return this.httpclient.post(environment.apiUrl + "api/Login/AddUser", user);
    }
}
