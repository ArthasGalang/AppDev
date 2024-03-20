import { Component, ɵɵsetComponentScope } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(private route : Router) {
  }
  GoMyCustomPage(){
   this.route.navigate(['/custom-page-with-id/'])

  }
  
}
