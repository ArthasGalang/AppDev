import { Component } from '@angular/core';
import { AuthorizationService } from '../authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-page',
  templateUrl: 'shared.component.html',
})
export class SharedPage {

  constructor(private authenticationService : AuthorizationService, private route : Router) {}
  goWithAuthenticated(){
    this.authenticationService.authenticated = true;
    this.route.navigate(['another']);
  }
}