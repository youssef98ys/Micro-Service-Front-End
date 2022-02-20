import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillService {
  urlCustomer = 'http://localhost:8888/CUSTOMER-SERVICE/';
  urlProduit = 'http://localhost:8888/INVENTORY-SERVICE/';
  urlBill = 'http://localhost:8888/BILLING-SERVICE/';
  constructor(private http: HttpClient) { }
  producerCustomer(id: any): Observable<any> {
    return this.http.get(this.urlCustomer + 'producer/' + id);
  }
  producerProduit(): Observable<any> {
    return this.http.get(this.urlProduit + 'producer');
  }
  getFullBill(id: any): Observable<any> {
    return this.http.get(this.urlBill + 'fullBill/' + id);
  }
}
