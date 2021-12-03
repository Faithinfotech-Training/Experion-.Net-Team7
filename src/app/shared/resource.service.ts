import { Injectable } from '@angular/core';
import { Resource } from './resource';
import{HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  //create an instance of employee
  formData:Resource=new Resource();
  resources:Resource[];
  availableResource:Resource[];
  constructor(private httpClient:HttpClient) { }

  bindResource(){
    this.httpClient.get(environment.apiUrl+"api/resource/GetResources")
    .toPromise().then(response=>
      this.resources=response as Resource[])
  
  }
  bindAvailableResource(){
    this.httpClient.get(environment.apiUrl+"api/Resource/GetAvailableResources")
    .toPromise().then(response=>
      this.availableResource=response as Resource[])
  
  }

  //insert resource
insertResource(resource:Resource):Observable<any>
{
  return this.httpClient.post(environment.apiUrl+"api/resource/AddResource",resource);

}

//update resource
updateResource(resource:Resource):Observable<any>
{
  return this.httpClient.put(environment.apiUrl+"api/resource/UpdateResource",resource);

}


//delete resource
deleteResource(resourceId:number):Observable<any>
{
  return this.httpClient.delete(environment.apiUrl+"api/resource/DeleteResource?id="+resourceId);

}


//get resource by id
getResourceById(resourceId:number):Observable<any>
{
  return this.httpClient.get(environment.apiUrl+"api/resource/GetResourceById?id="+resourceId);

}
}
