import { Routes } from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {CustomerComponent} from '../customer/customer.component';
import {ProductComponent} from '../product/product.component';
import {FormproductComponent} from '../formproduct/formproduct.component';
import {FormcustomerComponent} from '../formcustomer/formcustomer.component';
import {BillComponent} from '../bill/bill.component';
import {FullbillComponent} from '../fullbill/fullbill.component';


export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'customer',  component: CustomerComponent },
  { path: 'product',  component: ProductComponent },
  { path: 'formproduct',  component: FormproductComponent },
  { path: 'formcustomer',  component: FormcustomerComponent },
  { path: 'bill',  component: BillComponent },
  { path: 'fullbill',  component: FullbillComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
