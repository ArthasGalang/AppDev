import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonTabs } from '@ionic/angular';
import { UserService } from '../new-service.service';
import { LoginPage } from '../login/login.page';
import { CalculatorPage } from './calculator/calculator.page';
import { HomePage } from './home/home.page';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  name : string = "";
  constructor(private router : Router, private userService: UserService, private calc : CalculatorPage, private home: HomePage, private logn: LoginPage) { 
    this.name = this.userService.getUserName();
  }

  ngOnInit() {
  }
  goHome(){
    this.router.navigate(['/dashboard/home']);
  }
  goCalcu(){
    this.router.navigate(['/dashboard/calculator']);
  }
  
}
