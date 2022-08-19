import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {companyModel} from '../models/company.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyDetailsService {
  constructor(private http:HttpClient) { }
  getData(): Observable<companyModel[]>{
     return  this.http.get<companyModel[]>("http://localhost:3000/companyDetails");
  } 
}
