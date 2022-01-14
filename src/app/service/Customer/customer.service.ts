import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  readonly pharmacyManagementSystemAPIURL = environment.apiURL;
  readonly controllerName: string = "/Customers";
  constructor(private http: HttpClient) { }

  GetCustomerList(): Observable<any> {
    return this.http.get<any>(this.pharmacyManagementSystemAPIURL + this.controllerName);

  }
  DeleteCustomer(id: number | string) {
    return this.http.delete(this.pharmacyManagementSystemAPIURL + this.controllerName+ "/" + + id);
  }
  AddCustomer(data: any) {
    return this.http.post(this.pharmacyManagementSystemAPIURL + this.controllerName, data);
  }
  UpdateCustomer(id: number | string, data: any) {
    return this.http.put(this.pharmacyManagementSystemAPIURL + this.controllerName + "/" + id, data);
  }
}
