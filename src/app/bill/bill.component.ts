import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../services/customer.service';
import {BillService} from '../services/bill.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  customers: any;
  hide = false;
  constructor(private customerservice: CustomerService,
              private billservice: BillService,
              private router: Router ) { }

  ngOnInit() {
    this.customerservice.getCustomers().subscribe(data => this.customers = data);
  }

  produceBill(id: any) {
    this.billservice.producerCustomer(id).subscribe(data =>
      this.billservice.producerProduit().subscribe(() => { this.hide = true;
        setTimeout(() => {
        this.router.navigateByUrl('fullbill'); }, 2000); }));

  }
}
