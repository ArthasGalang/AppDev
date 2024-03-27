import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/new-service.service';
import { ApiService } from 'src/app/api.service';
import { News } from 'src/app/model/data.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
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
    this.router.navigate(['/login']);
  }
   


}
