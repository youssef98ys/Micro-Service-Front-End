import { TestBed } from '@angular/core/testing';

import { KeycloakSecurityService } from './keycloak-security.service';

describe('KeycloakSecurityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KeycloakSecurityService = TestBed.get(KeycloakSecurityService);
    expect(service).toBeTruthy();
  });
});
