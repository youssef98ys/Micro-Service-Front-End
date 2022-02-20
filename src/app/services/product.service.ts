import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Product } from '../shared/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = 'http://localhost:8888/INVENTORY-SERVICE/';
  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get(this.url + 'products');
  }
  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(this.url + 'products/' + id);
  }
  deleteProduct(id: number) {
    return this.http.delete(this.url + 'products/' + id);
  }
  putProduct(value: Product): Observable<Product> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.put<Product>(this.url + 'products/' + value.id, value, httpOptions);
  }
  postProduct(value: any): Observable<Product> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<Product>(this.url + 'products', value, httpOptions);
  }
}
