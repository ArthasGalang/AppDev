import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../new-service.service';

import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user : string = "";
  pass : string = "";
  credentials = [
    { usern: "user1", passw: "123" },
    { usern: "user2", passw: "1234" },
    { usern: "user3", passw: "12345" },
    { usern: "admin", passw: "321" },
   
  ];
  
  constructor(private router: Router, private userService: UserService, private alertController: AlertController, private toastController: ToastController) { }

  ngOnInit() {
  }


  async login() {
    
    try{
      await this.fetchData();
      this.userService.setUserName(this.user);
      this.router.navigate(['/dashboard/home']);
      this.alert()
    }//end of try
  catch (Error){
    this.toast();
  }//end of catch
  }//end of login()


      fetchData(): Promise<any>{
        const check = this.credentials.find(cred => cred.usern === this.user && cred.passw === this.pass);
        return new Promise ((resolve, reject) => {
          if (check){
            setTimeout(() => {
              resolve('Success');
            }, 2000);
          } else {
            reject(new Error('access denied'))
          }//end of ifelse
        })//end of Promise
      }//end of fetchData()

  async toast(){
    const toast = await this.toastController.create({
      message: 'Login Failed',
      duration : 2000
    });
  toast.present();
  }//end of toast()

  async alert(){
    const alert = await this.alertController.create({
      header: 'Login Status',
      message: 'Login Success!',
      buttons: ['OK']
    });
  alert.present();
  }//end of alert()
}//end of Class
