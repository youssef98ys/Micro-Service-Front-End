import {Customer} from '../shared/customer';
import {CustomersActions, CustomersActionsTypes} from './customers.actions';
import {Action} from '@ngrx/store';

export enum CustomersStateEnum {
  LOADING = 'Loading',
  LOADED = 'Loaded',
  ERROR = 'Error',
  INITIAL = 'Initial'
}

export interface CustomersState {
  customers: Customer[];
  errorMessage: string;
  dataState: CustomersStateEnum;
}

const initState: CustomersState = {
  customers: [],
  errorMessage: '',
  dataState: CustomersStateEnum.INITIAL
};

export function customersReducer(state: CustomersState = initState, action: Action): CustomersState {
  switch (action.type) {
    case CustomersActionsTypes.GET_ALL_CUSTOMERS:
      return {...state, dataState: CustomersStateEnum.LOADING};
    case CustomersActionsTypes.GET_ALL_CUSTOMERS_SUCCESS:
      return {...state, dataState: CustomersStateEnum.LOADED, customers: (<CustomersActions>action).payload};
    case CustomersActionsTypes.GET_ALL_CUSTOMERS_ERROR:
      return {...state, dataState: CustomersStateEnum.ERROR, errorMessage: (<CustomersActions>action).payload};
    default: return {...state};
  }
}
