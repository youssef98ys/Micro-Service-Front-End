import { Component, OnInit } from '@angular/core';
import {BillService} from '../services/bill.service';

@Component({
  selector: 'app-fullbill',
  templateUrl: './fullbill.component.html',
  styleUrls: ['./fullbill.component.css']
})
export class FullbillComponent implements OnInit {
  bill: any;
  constructor(private billservie: BillService) { }

  ngOnInit() {
    this.billservie.getFullBill(1).subscribe(data => this.bill = data);
  }

}
