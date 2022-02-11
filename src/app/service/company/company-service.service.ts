import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyServiceService {
  readonly APIURL = environment.apiURL;
  constructor(private http: HttpClient) { }

  //Company
  GetCompanyList(): Observable<any[]> {
    return this.http.get<any>(this.APIURL + '/Companies');

  }
  AddCompany(data:any)
  {
return this.http.post(this.APIURL+'/Companies',data);
  }
  UpdateCompany(id:number|string,data:any)
  {
return this.http.put(this.APIURL+'/Companies/'+id,data);
  }
DeleteCompany(id:number|string)
{
return this.http.delete(this.APIURL+'/Companies/'+id);
}

// Inspection Types
GetDistributionList(): Observable<any[]> {
  return this.http.get<any>(this.APIURL + '/Distributions');

}
// AddCompany(data:any)
//   {
// return this.http.post(this.medicineAPIURL+'/Companies',data);
//   }
//   UpdateCompany(id:number|string,data:any)
//   {
// return this.http.put(this.medicineAPIURL+'/Companies/'+id,data);
//   }
// DeleteCompay(id:number|string)
// {
// return this.http.delete(this.medicineAPIURL+'/Companies/'+id);
// }

// // Form


}


