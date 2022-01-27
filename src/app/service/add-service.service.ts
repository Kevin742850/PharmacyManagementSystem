import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddServiceService {
  readonly APIURL = environment.apiURL;
  constructor(private http: HttpClient) { }

  //Category service
  AddCategory(data:any)
  {
return this.http.post(this.APIURL+'/Categories',data);
  }
 //Form service
 AddForm(data:any)
  {
return this.http.post(this.APIURL+'/Forms',data);
  }

  //Strength service
  AddStrength(data:any)
  {
return this.http.post(this.APIURL+'/Strengths',data);
  }



}


