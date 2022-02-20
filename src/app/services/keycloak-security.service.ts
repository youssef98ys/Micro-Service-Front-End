import { Injectable } from '@angular/core';
import {KeycloakInstance} from 'keycloak-js';
import {HttpClient} from '@angular/common/http';

declare var Keycloak: any;
@Injectable({
  providedIn: 'root'
})
export class KeycloakSecurityService {
  public kc: KeycloakInstance;
  constructor(private http: HttpClient) { }
  public async init() {
    console.log('security initialisation');
    this.kc = new Keycloak({
      url: 'http://localhost:8080/auth',
      realm: 'my-billing-realm',
      clientId: 'angular-app'
    });
    await this.kc.init({
      onLoad: 'check-sso'
    });
    console.log(this.kc.token);
  }
  public isManager(): boolean {
    return this.kc.hasResourceRole('MANAGER');
  }
}
