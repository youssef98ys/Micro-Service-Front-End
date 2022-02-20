import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer} from '../shared/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  url = 'http://localhost:8888/CUSTOMER-SERVICE/';
  constructor(private http: HttpClient) { }

  getCustomers(): Observable<any> {
    return this.http.get(this.url + 'customers');
  }
  getCustomer(id: number): Observable<Customer> {
    return this.http.get<Customer>(this.url + 'customers/' + id);
  }
  deleteCustomer(id: any) {
    return this.http.delete(this.url + 'customers/' + id);
  }
  putCustomer(value: Customer): Observable<Customer> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.put<Customer>(this.url + 'customers/' + value.id, value, httpOptions);
  }
  postCustomer(value: Customer): Observable<Customer> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<Customer>(this.url + 'customers', value, httpOptions);
  }
}
