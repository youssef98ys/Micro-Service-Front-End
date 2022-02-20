import {Injectable} from '@angular/core';
import {CustomerService} from '../services/customer.service';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {
  CustomersActions,
  CustomersActionsTypes,
  GetAllCustomersAction,
  GetAllCustomersActionError,
  GetAllCustomersActionSuccess
} from './customers.actions';
import {mergeMap, map, catchError} from 'rxjs/operators';

@Injectable()
export class CustomersEffects {
  constructor(private service: CustomerService, private effectActions: Actions) {
  }
  @Effect()
  getAllCustomersEffects: Observable<Action> = this.effectActions.pipe(ofType(CustomersActionsTypes.GET_ALL_CUSTOMERS),
    mergeMap((action) => {
      return this.service.getCustomers().pipe(
        map((customers) => new GetAllCustomersActionSuccess(customers)),
        catchError((err) => of(new GetAllCustomersActionError(err.message))));
    }));
}
