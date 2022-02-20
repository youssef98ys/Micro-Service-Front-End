import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {KeycloakSecurityService} from './keycloak-security.service';

@Injectable({
  providedIn: 'root'
})
export class RequestInterceptorService implements HttpInterceptor {

  constructor(private secservice: KeycloakSecurityService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('http interceptor working ....');
    if (!this.secservice.kc.authenticated) { return next.handle(req); }
    const request = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + this.secservice.kc.token
      }
    });
    return next.handle(request);
  }
}
