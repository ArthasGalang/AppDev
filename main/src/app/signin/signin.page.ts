import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
email:string ='';
pass:string ='';
  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

 async Signin(){
  this.auth.lemail = this.email;
  this.auth.lpass = this.pass;
    this.auth.login();
  }

}
