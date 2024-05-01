import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private auth: AuthService) {}

logOut(){
  this.auth.lemail = "";
  this.auth.lpass = "";
  this.auth.isLoggedIn = false;
  this.router.navigate(['signin']);
}

}
