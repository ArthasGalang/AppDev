import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loggedIn: boolean = false;
  private userName: string = '';

  constructor() { }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  LoggedIn() {
    this.loggedIn = true;
  }
  LogOut(){
    this.loggedIn = false;
  }

  setUserName(name: string) {
    this.userName = name;
  }

  getUserName(): string {
    return this.userName;
  }


}