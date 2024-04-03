import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/new-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {
  input : string = "";
  output : string = "";

  hold1 : string = "";
  hold2 : string = "";

  result : number = 0;

  addition : boolean = false;
  subtraction : boolean = false;
  division : boolean = false;
  multiplication : boolean = false;
   
  num1: number = 0;
  num2: number = 0;

  it : boolean = false;

  constructor() {  
  }

  ngOnInit() {
  }
  a0(){
    this.input += "0";
    this.output += "0";
    this.hold1 += "0";
 }
  a1(){
    this.input += "1";
    this.output += "1";
    this.hold1 += "1";
  }
  a2(){
    this.input += "2";
    this.output += "2";
    this.hold1 += "2";
  }
  a3(){
    this.input += "3";
    this.output += "3";
    this.hold1 += "3";
  }
  a4(){
    this.input += "4";
    this.output += "4";
    this.hold1 += "4";
  }
  a5(){
    this.input += "5";
    this.output += "5";
    this.hold1 += "5";
  }
  a6(){
    this.input += "6";
    this.output += "6";
    this.hold1 += "6";
  }
  a7(){
    this.input += "7";
    this.output += "7";
    this.hold1 += "7";
  }
  a8(){
    this.input += "8";
    this.output += "8";
    this.hold1 += "8";
  }
  a9(){
    this.input += "9";
    this.output += "9";
    this.hold1 += "9";
  }




  add(){
    this.addition = true;
    this.input += "+";
    this.output += "+";
    if (this.it == false) {
      this.hold2 = this.hold1;
    }
    
    this.hold1 = "";
    this.it = true;
  }
  sub(){
    this.subtraction = true;
    this.input += "-";
    this.output += "-";
    if (this.it == false) {
      this.hold2 = this.hold1;
    }
    this.hold1 = "";
    this.it = true;
  }
  div(){
    this.division = true;
    this.input += "/";
    this.output += "/";
    if (this.it == false) {
      this.hold2 = this.hold1;
    }
    this.hold1 = "";
    this.it = true;
  }
  mul(){
    this.multiplication = true;
    this.input += "*";
    this.output += "*";
    if (this.it == false) {
      this.hold2 = this.hold1;
    }
    this.hold1 = "";
    this.it = true;
  }






  clr(){
    this.input = "";
    this.output = "";
  }


  res(){
     this.num1 = parseFloat(this.hold1);
     this.num2 = parseFloat(this.hold2);
    if (this.addition) {
      this.result += this.num2 + this.num1;
      this.addition = false;
    } else if(this.subtraction){
      this.result += this.num2 - this.num1;
      this.subtraction = false;
    } else if(this.division){
      this.result += this.num2 / this.num1;
      this.division = false;
    } else if(this.multiplication){
      this.result += this.num2 * this.num1;
      this.multiplication = false;
    }
    
    this.output = String(this.result)
    this.result = 0;
    this.hold1 = "";
    this.hold2 = this.output;
  }

}
