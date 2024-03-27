import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/new-service.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {
  name : string = "";
  constructor(private router:Router, private userService: UserService) {  
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
