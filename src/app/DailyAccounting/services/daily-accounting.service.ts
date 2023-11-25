import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {DailyAccounting} from "../models/daily-accounting.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DailyAccountingService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAll(params: any): Observable<any> {
    return this.http.get<any>(this.baseUrl +'tutorials',{ params });
  }

  get(id: any): Observable<DailyAccounting> {
    return this.http.get<DailyAccounting>(`${this.baseUrl}/tutorials/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.baseUrl +'tutorials', data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/tutorials/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/tutorials/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }

  findByTitle(title: any): Observable<DailyAccounting[]> {
    return this.http.get<DailyAccounting[]>(`${this.baseUrl}/tutorials?title=${title}`);
  }

  getBalancePreviousMonth(){
    const url = `${this.baseUrl}tutorials/balancePreviousMonth`;
    return this.http.get<number>(url)
      .pipe(
        catchError((error: any) => {
          console.error('Erreur de parsing : ', error);
          return throwError(error);
        })
      );
  }

  getPostalCurrentAccount(){
    const url = `${this.baseUrl}tutorials/postalCurrentAccount`;
    return this.http.get<number>(url)
      .pipe(
        catchError((error: any) => {
          console.error('Erreur de parsing : ', error);
          return throwError(error);
        })
      );
  }

  getCreditExpected(){
    const url = `${this.baseUrl}tutorials/creditExpected`;
    return this.http.get<number>(url)
      .pipe(
        catchError((error: any) => {
          console.error('Erreur de parsing : ', error);
          return throwError(error);
        })
      );
  }

  getExpectedFlow(){
    const url = `${this.baseUrl}tutorials/expectedFlow`;
    return this.http.get<number>(url)
      .pipe(
        catchError((error: any) => {
          console.error('Erreur de parsing : ', error);
          return throwError(error);
        })
      );
  }

  getOtherValues(){
    const url = `${this.baseUrl}tutorials/otherValues`;
    return this.http.get<number>(url)
      .pipe(
        catchError((error: any) => {
          console.error('Erreur de parsing : ', error);
          return throwError(error);
        })
      );
  }

  getStatesRepartition(){
    const url = `${this.baseUrl}tutorials/statesRepartition`;
    return this.http.get<number>(url)
      .pipe(
        catchError((error: any) => {
          console.error('Erreur de parsing : ', error);
          return throwError(error);
        })
      );
  }
//-------------------------------------
  getRecetteTotal(date: string): Observable<any> {
    const url = `${this.baseUrl}tutorials/recette-total?date=${date}`;
    return this.http.get<string>(url)
      .pipe(
        catchError((error: any) => {
          console.error('Erreur de parsing : ', error);
          return throwError(error);
        })
      );
  }


///------------------------------------
  getTreasuryOperationsTotal(date: string): Observable<any> {
    const url = `${this.baseUrl}tutorials/OperationsTreasury-total?date=${date}`;
    return this.http.get<string>(url)
      .pipe(
        catchError((error: any) => {
          console.error('Erreur de parsing : ', error);
          return throwError(error);
        })
      );
  }

  getTotalTreasuryOperationsLastDay(){
    const url = `${this.baseUrl}tutorials/OperationsTreasuryTotalLastDay`;
    return this.http.get<number>(url)
      .pipe(
        catchError((error: any) => {
          console.error('Erreur de parsing : ', error);
          return throwError(error);
        })
      );
  }
//-------------------------------------
  getRegulationOperationsTotal(date: string): Observable<any> {
    const url = `${this.baseUrl}tutorials/OperationsRegulation-total?date=${date}`;
    return this.http.get<string>(url)
      .pipe(
        catchError((error: any) => {
          console.error('Erreur de parsing : ', error);
          return throwError(error);
        })
      );
  }
  //
  getTotalRegulationOperationsLastDay(){
    const url = `${this.baseUrl}tutorials/OperationsRegulationsTotalDoubleLastRow`;
    return this.http.get<number>(url)
      .pipe(
        catchError((error: any) => {
          console.error('Erreur de parsing : ', error);
          return throwError(error);
        })
      );
  }

//---------------------------------
  getTotalExpenses(date: string): Observable<any> {
    const url = `${this.baseUrl}tutorials/totalExpenses?date=${date}`;
    return this.http.get<string>(url)
      .pipe(
        catchError((error: any) => {
          console.error('Erreur de parsing : ', error);
          return throwError(error);
        })
      );
  }

//-------------------------------------
  getDalyAccountBalance(date: string): Observable<any> {
    const url = `${this.baseUrl}tutorials/dalyAccountBalance?date=${date}`;
    return this.http.get<string>(url)
      .pipe(
        catchError((error: any) => {
          console.error('Erreur de parsing : ', error);
          return throwError(error);
        })
      );
  }

//-----------------------------------------
  getFinalPostalAccount(date: string): Observable<any> {
    const url = `${this.baseUrl}tutorials/finalPostalAccount?date=${date}`;
    return this.http.get<string>(url)
      .pipe(
        catchError((error: any) => {
          console.error('Erreur de parsing : ', error);
          return throwError(error);
        })
      );
  }

//----------------------------
  getTotalCash(date: string): Observable<any> {
    const url = `${this.baseUrl}tutorials/totalCash?date=${date}`;
    return this.http.get<string>(url)
      .pipe(
        catchError((error: any) => {
          console.error('Erreur de parsing : ', error);
          return throwError(error);
        })
      );
  }

 //-------------------------------------------
  getMoneyInCoinsInCash(date: string): Observable<any> {
    const url = `${this.baseUrl}tutorials/moneyInCoinsInCash?date=${date}`;
    return this.http.get<string>(url)
      .pipe(
        catchError((error: any) => {
          console.error('Erreur de parsing : ', error);
          return throwError(error);
        })
      );
  }

}
