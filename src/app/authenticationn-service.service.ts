import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationnService {
  private isAuthenticated = false;

  constructor() {}

  login(username: string, password: string): boolean {
    // Implement your authentication logic here (e.g., call an API)
    // If authentication is successful, set isAuthenticated to true
    this.isAuthenticated = true;
    return true;
  }

  logout(): void {
    // Implement logout logic (e.g., clear tokens, remove session)
    this.isAuthenticated = false;
  }

  isAuthenticatedUser(): boolean {
    // Check if the user is authenticated
    return this.isAuthenticated;
  }
}