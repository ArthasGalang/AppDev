import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  fetchData(): Promise<String>{
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Data Fetched successfully');
      }, 5000);
    });
  }
  
  catchData(){
    return new Promise((resolve, reject) => {
      const errorCondition = true;

      if (errorCondition){
        reject(new Error('Failed to fetch Data'));
      } else {
        setTimeout(() => {
          resolve('Data fetched successfully');
        }, 2000);
      }
    });
  }

  hatchData(){
    return new Promise((resolve, reject) => {
      const errorCondition = false;
  
      if (errorCondition){
        reject(new Error('Access Denied'));
      } else {
        setTimeout(() => {
          resolve('Nice');
        }, 5000);
      }
    });
  }

}

