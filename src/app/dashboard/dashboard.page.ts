import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonTabs } from '@ionic/angular';
import { UserService } from '../new-service.service';
import { LoginPage } from '../login/login.page';
import { CalculatorPage } from './calculator/calculator.page';
import { HomePage } from './home/home.page';
import { ApiService } from 'src/app/api.service';
import { News } from 'src/app/model/data.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  user : string = "";
  news : News[] = [];
  constructor(private router: Router, private userService: UserService, private api: ApiService) {}

  ngOnInit(): void {
    this.user = this.userService.getUserName();
    this.api.getNews().subscribe(item => {
      this.news = item;
      console.log(item)
    });
    
  }
  goHome(){
    this.router.navigate(['/dashboard/home']);
  }
  goCalcu(){
    this.router.navigate(['/dashboard/calculator']);
  }
  logOut(){
    this.userService.LogOut();
    this.router.navigate(['/login']);
  }
   


}
