import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../services/customer.service';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {GetAllCustomersAction} from '../ngrx/customers.actions';
import {Observable} from 'rxjs';
import {CustomersState} from '../ngrx/customers.reducer';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: any;
  customersState$: Observable<CustomersState> | null = null;
  constructor(private service: CustomerService, private router: Router,
              private store: Store<any>) { }

  ngOnInit() {
    // this.service.getCustomers().subscribe(data => this.customers = data);
    this.store.dispatch(new GetAllCustomersAction({}));
    this.customersState$ = this.store.pipe(
      map((state) => state.catalogState)
    );
  }

  supprimerCustomer(id: any) {
    this.service.deleteCustomer(id).subscribe();
    // window.location.reload();
      const currentUrl = this.router.url;
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
  }); }
}
