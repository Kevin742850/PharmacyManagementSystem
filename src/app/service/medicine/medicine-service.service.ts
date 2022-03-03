import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MedicineServiceService {
  readonly medicineAPIURL = environment.apiURL;
  constructor(private http: HttpClient) { }

  //Inspection
  GetMedicineList(): Observable<any[]> {
    return this.http.get<any>(this.medicineAPIURL + '/Medicines');

  }
  AddMedicine(data:any)
  {
return this.http.post(this.medicineAPIURL+'/Medicines',data);
  }
  UpdateMedicine(id:number|string,data:any)
  {
return this.http.put(this.medicineAPIURL+'/Medicines/'+id,data);
  }
DeleteMedicine(id:number|string, pid:number | string)
{
return this.http.delete(this.medicineAPIURL+'/Medicines/'+id + pid);
}

// Inspection Types
// GetCompanyList(): Observable<any[]> {
//   return this.http.get<any>(this.medicineAPIURL + '/Companies');

// }
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

// GetFormList(): Observable<any[]> {
//   return this.http.get<any>(this.medicineAPIURL + '/Forms');

// }
// AddForm(data:any)
//   {
// return this.http.post(this.medicineAPIURL+'/Forms',data);
//   }
//   UpdateForm(id:number|string,data:any)
//   {
// return this.http.put(this.medicineAPIURL+'/Forms/'+id,data);
//   }
// DeleteForm(id:number|string)
// {
// return this.http.delete(this.medicineAPIURL+'/Forms/'+id);
// }

// //strengths

// GetStrengthList(): Observable<any[]> {
//   return this.http.get<any>(this.medicineAPIURL + '/Strengths');

// }
// AddStrength(data:any)
//   {
// return this.http.post(this.medicineAPIURL+'/Strengths',data);
//   }
//   UpdateStrength(id:number|string,data:any)
//   {
// return this.http.put(this.medicineAPIURL+'/Strengths/'+id,data);
//   }
// DeleteStrength(id:number|string)
// {
// return this.http.delete(this.medicineAPIURL+'/Strengths/'+id);
// }

// //Categories
// GetCategoryList(): Observable<any[]> {
//   return this.http.get<any>(this.medicineAPIURL + '/Categories');

// }
// Addategory(data:any)
//   {
// return this.http.post(this.medicineAPIURL+'/Categories',data);
//   }
//   UpdateCategory(id:number|string,data:any)
//   {
// return this.http.put(this.medicineAPIURL+'/Categories/'+id,data);
//   }
// DeleteCategory(id:number|string)
// {
// return this.http.delete(this.medicineAPIURL+'/Categories/'+id);
// }


}

