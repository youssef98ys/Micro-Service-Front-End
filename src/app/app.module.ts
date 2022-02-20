import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { ProductComponent } from './product/product.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FormproductComponent } from './formproduct/formproduct.component';
import { FormcustomerComponent } from './formcustomer/formcustomer.component';
import {CustomerService} from './services/customer.service';
import {ProductService} from './services/product.service';
import {BillService} from './services/bill.service';
import {
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatLine,
    MatProgressSpinnerModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {KeycloakSecurityService} from './services/keycloak-security.service';
import { BillComponent } from './bill/bill.component';
import { FullbillComponent } from './fullbill/fullbill.component';
import {RequestInterceptorService} from './services/request-interceptor.service';
import {StoreModule, StoreRootModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {customersReducer} from './ngrx/customers.reducer';
import {CustomersEffects} from './ngrx/customers.effects';

export function kcFactory(kcsecserv: KeycloakSecurityService) {
  return () => kcsecserv.init();
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CustomerComponent,
    ProductComponent,
    FormproductComponent,
    FormcustomerComponent,
    BillComponent,
    FullbillComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MatProgressSpinnerModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        BrowserAnimationsModule,
        MatListModule,
      StoreModule.forRoot({catalogState: customersReducer}),
      EffectsModule.forRoot([CustomersEffects]),
      StoreDevtoolsModule.instrument()
    ],
  providers: [CustomerService, ProductService, BillService,
    {
      provide: APP_INITIALIZER, deps: [KeycloakSecurityService], useFactory: kcFactory, multi: true
    },
    {
      provide: HTTP_INTERCEPTORS, useClass: RequestInterceptorService, multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
