import { Component, ɵɵsetComponentScope } from '@angular/core';
import { AuthorizationService } from '../authorization.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  data: String = '';
  LoadingText: String = 'Loading...';
  isLoading: boolean = true;
  //promise1 = this.DataService.hatchData();
  //promise2 = this.DataService.catchData();

  addingArray = [""]
  addElement = 0; 
  beforeShow : boolean = false;


  constructor(private authenticationService : AuthorizationService, private route : Router) {
    //private DataService : DataService at constructor
    // DataService.hatchData().then( data => {
    //   console.log(data);
    // }).catch(error => {
    //   console.log(error);
    // }).finally(() => {
    //   this.isLoading=false;
    // });


    
    // Promise.all([this.promise1, this.promise2])
    // .then(([data1, data2]) => {
    //   console.log('Data 1', data1);
    //   console.log('Data 2', data2);
    // }) 
    // .catch(error => {
    //   console.error(error.message);
    // });


    // Promise.race([this.promise1, this.promise2])
    // .then(data => {
    //   console.log('first promise resolve', data);
    // }) 
    // .catch(error => {
    //   console.error(error.message);
    // });

  }
  
  goWithAuthenticated(){
    this.authenticationService.authenticated = true;
    console.log('You are now authenticated.');
    alert("You are now authenticated.");
  }

  goWithUnauthenticated(){
    this.authenticationService.authenticated = false;
    console.log('You are now unauthenticated.');
    alert("You are now unauthenticated.");
  }
  // async fetchData(){
  //   try{
  //     this.data = await this.DataService.fetchData();
  //     console.log(this.data);
  //   } catch (error){
  //     console.error(error);
  //   }
  // }
  fetchData(){
    if (this.authenticationService.authenticated){
        this.addingArray = [...this.addingArray, this.addElement.toString()];
        this.addElement += 1;
    } else {
      alert("You need to Authenticate First!");
      console.log("You need to Authenticate First!");
    }
  }
  
  showData(){
    if (this.authenticationService.authenticated){
      this.beforeShow = true;
      console.log(this.addingArray);
    } else {
      alert("You need to Authenticate First!");
      console.log("You need to Authenticate First!");
    }

  }

  // catchData()
  // .then(data => {
  //   console.log(data);
  // })
  // .catch(error => {
  //   console.error(error.message);
  // });

  
}
