import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-another',
  templateUrl: './another.page.html',
})
export class AnotherPage implements OnInit {

  constructor(private authenticationService : AuthorizationService, private route : Router) {}
  goToPage3() {
    if(this.authenticationService.authenticated == true){
      this.route.navigate(['third page'])

    }
    else{
      this.route.navigate(['third page/']);
    }
    
  }
  goWithAuthenticated(){
    this.authenticationService.authenticated = true;
   
  }
  
  ngOnInit() {
    this.authenticationService.authenticated = false;
  }

  ionViewWillEnter() {
    console.log("You will enter second page.")
  }

  ionViewDidEnter() {
    console.log("You did enter second page.")
  }

  ionViewWillLeave() {
    console.log("You will leave second page.")
  }

  ionViewDidLeave() {
    console.log("You did leave second page.")
  }
}
//page 2