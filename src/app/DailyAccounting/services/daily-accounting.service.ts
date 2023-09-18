import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DailyAccounting} from "../models/daily-accounting.model";

const baseUrl = 'http://localhost:8080/api/dailyAccounting';

@Injectable({
  providedIn: 'root'
})
export class DailyAccountingService {

  constructor(private http: HttpClient) { }

  getAll(params: any): Observable<any> {
    return this.http.get<any>(baseUrl, { params });
  }

  get(id: any): Observable<DailyAccounting> {
    return this.http.get<DailyAccounting>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<DailyAccounting[]> {
    return this.http.get<DailyAccounting[]>(`${baseUrl}?title=${title}`);
  }
}
