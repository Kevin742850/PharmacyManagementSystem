import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InspectionServiceService {
  readonly inspectionAPIURL = "https://localhost:7191/api";
  constructor(private http: HttpClient) { }

  //Inspection
  GetInspectionList(): Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIURL + '/Inspections');

  }
  AddInspection(data:any)
  {
return this.http.post(this.inspectionAPIURL+'/Inspections',data);
  }
  UpdateInspection(id:number|string,data:any)
  {
return this.http.put(this.inspectionAPIURL+'/Inspections/'+id,data);
  }
DeleteInspection(id:number|string)
{
return this.http.delete(this.inspectionAPIURL+'/Inspections/'+id);
}

// Inspection Types

GetInspectionTypesList(): Observable<any[]> {
  return this.http.get<any>(this.inspectionAPIURL + '/InspectionTypes');

}
AddInspectionType(data:any)
{
return this.http.post(this.inspectionAPIURL+'/InspectionTypes',data);
}
UpdateInspectionType(id:number|string,data:any)
{
return this.http.put(this.inspectionAPIURL+'/InspectionTypes/${id}',data);
}
DeleteInspectionType(id:number|string)
{
return this.http.delete(this.inspectionAPIURL+'/InspectionTypes/${id}');
}

// Statuses
GetStatusList(): Observable<any[]> {
  return this.http.get<any>(this.inspectionAPIURL + '/Status');

}
AddStatus(data:any)
{
return this.http.post(this.inspectionAPIURL+'/Status',data);
}
UpdateStatus(id:number|string,data:any)
{
return this.http.put(this.inspectionAPIURL+'/Status/${id}',data);
}
DeleteStatus(id:number|string)
{
return this.http.delete(this.inspectionAPIURL+'/Status/${id}');
}

}

