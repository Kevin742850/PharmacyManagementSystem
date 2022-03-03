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


              /////DIstribution service

  GetDistributionList(): Observable<any[]> {
    return this.http.get<any>(this.APIURL + '/Distributions');

  }


                      ////Company service

  GetCompanyList(): Observable<any[]>
  {
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



  //Category service


  GetCategoryList(): Observable<any[]>
  {
    return this.http.get<any>(this.APIURL + '/Categories');
  }
  AddCategory(data:any)
  {
return this.http.post(this.APIURL+'/Categories',data);
  }
  UpdateCategory(id:number|string,data:any)
  {
    return this.http.put(this.APIURL+'/Categories/'+id,data);
  }
  DeleteCategory(id:number|string,pid:number)
{
return this.http.delete(this.APIURL+'/Categories/'+id+pid);
}




                     //Form service


    GetFormList(): Observable<any[]>
  {
    return this.http.get<any>(this.APIURL + '/Forms');
  }
 AddForm(data:any)
  {
   return this.http.post(this.APIURL+'/Forms',data);
  }
  UpdateForm(id:number|string,data:any)
  {
    return this.http.put(this.APIURL+'/Forms/'+id,data);
  }
   DeleteForm(id:number|string)
  {
   return this.http.delete(this.APIURL+'/Forms/'+id);
  }



  //Strength service


  GetStrengthList(): Observable<any[]>
  {
    return this.http.get<any>(this.APIURL + '/Strengths');
  }
  AddStrength(data:any)
  {
   return this.http.post(this.APIURL+'/Strengths',data);
  }
  UpdateStrength(id:number|string,data:any)
  {
    return this.http.put(this.APIURL+'/Strengths/'+id,data);
  }
   DeleteStrength(id:number|string, pid:number)
  {
   return this.http.delete(this.APIURL+'/Strengths/'+id+pid);
  }



}


