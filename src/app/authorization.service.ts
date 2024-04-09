import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  authenticated = false;
  constructor() { }
  
  canActivate() {
    return this.authenticated;
  }
}
