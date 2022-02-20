import { Component, OnInit } from '@angular/core';
import {KeycloakSecurityService} from '../services/keycloak-security.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private secservice: KeycloakSecurityService) { }

  ngOnInit() {
  }
  onLogout() {
    this.secservice.kc.logout();
  }
  onLogin() {
    this.secservice.kc.login();
  }
  onChangePassword() {
    this.secservice.kc.accountManagement();
  }
}
