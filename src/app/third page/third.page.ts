import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-third.page',
  templateUrl: './third.page.html',
})
export class thirdPage implements OnInit {

  constructor(private authenticationService : AuthorizationService, private route : Router) {}
  goToPage3() {
    if(this.authenticationService.authenticated == true){
      this.route.navigate(['third-page'])

    }
    else{
      this.route.navigate(['third-page/']);
    }
    
  }
  goWithAuthenticated(){
    this.authenticationService.authenticated = true;
   
  }
  
  ngOnInit() {
    this.authenticationService.authenticated = false;
  }

  ionViewWillEnter() {
    console.log("You will enter third page.")
  }

  ionViewDidEnter() {
    console.log("You did enter third page.")
  }

  ionViewWillLeave() {
    console.log("You will leave third page.")
  }

  ionViewDidLeave() {
    console.log("You did leave third page.")
  }
}
//page 2