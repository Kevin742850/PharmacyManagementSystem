import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PharmacyService {
  readonly pharmacyManagementSystemAPIURL = environment.apiURL;
  readonly controllerName: string = "/Pharmacies";
  constructor(private http: HttpClient) { }

  GetPharmacyList(): Observable<any> {
    return this.http.get<any>(this.pharmacyManagementSystemAPIURL + this.controllerName);

  }
  DeletePharmacy(id: number | string) {
    return this.http.delete(this.pharmacyManagementSystemAPIURL + this.controllerName+ "/" + id);
  }
  AddPharmacy(data: any) {
    return this.http.post(this.pharmacyManagementSystemAPIURL + this.controllerName, data);
  }
  UpdatePharmacy(id: number | string, data: any) {
    return this.http.put(this.pharmacyManagementSystemAPIURL + this.controllerName + "/" + id, data);
  }
}
