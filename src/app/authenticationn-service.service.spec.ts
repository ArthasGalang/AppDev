import { TestBed } from '@angular/core/testing';

import { AuthenticationnServiceService } from './authenticationn-service.service';

describe('AuthenticationnServiceService', () => {
  let service: AuthenticationnServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationnServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
