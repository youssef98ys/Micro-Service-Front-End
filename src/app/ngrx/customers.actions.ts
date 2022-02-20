import {Action} from '@ngrx/store';
import {Customer} from '../shared/customer';

export enum CustomersActionsTypes {
  GET_ALL_CUSTOMERS = '[Customers] Get All Customers' ,
  GET_ALL_CUSTOMERS_SUCCESS = '[Customers] Get All Customers Success' ,
  GET_ALL_CUSTOMERS_ERROR = '[Customers] Get All Customers Error'
}

export class GetAllCustomersAction implements Action {
  type: CustomersActionsTypes = CustomersActionsTypes.GET_ALL_CUSTOMERS;
  constructor(public payload: any) {
  }
}
export class GetAllCustomersActionSuccess implements Action {
  type: CustomersActionsTypes = CustomersActionsTypes.GET_ALL_CUSTOMERS_SUCCESS;
  constructor(public payload: Customer[]) {
  }
}
export class GetAllCustomersActionError implements Action {
  type: CustomersActionsTypes = CustomersActionsTypes.GET_ALL_CUSTOMERS_ERROR;
  constructor(public payload: string) {
  }
}

export type CustomersActions = GetAllCustomersAction | GetAllCustomersActionSuccess | GetAllCustomersActionError ;
