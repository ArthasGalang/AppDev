import { Component } from '@angular/core';
import { AuthorizationService } from '../authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private authenticationService : AuthorizationService, private route : Router) {}
  goToPage2() {
    if(this.authenticationService.authenticated == true){
      this.route.navigate(['another'])

    }
    else{
      this.route.navigate(['another/']);
    }
    
  }
  goWithAuthenticated(){
    this.authenticationService.authenticated = true;
  }

  ionViewWillEnter() {
    console.log("You will enter home page.")
  }

  ionViewDidEnter() {
    console.log("You did enter home page.")
  }

  ionViewWillLeave() {
    console.log("You will leave home page.")
  }

  ionViewDidLeave() {
    console.log("You did leave home page.")
  }
}
