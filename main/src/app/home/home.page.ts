import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { addDoc, collection, getFirestore, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore"
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { User, iUser } from './home.model';
import { HomeService } from './home.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user: User = new User();
  userList: iUser[] = [];
  isLoading = false;
  isToggled = false;

  constructor(private router: Router, private auth: AuthService, private homeService: HomeService,
    private alertController: AlertController,
    private toastController: ToastController
  ) {}



  toggleActive(user: iUser) {
    user.Equip = !user.Equip;
    const index = this.userList.findIndex(u => u.id === user.id);
    if (index !== -1) {
        this.userList[index].Equip = user.Equip;
    }
}
save() {

  this.user.dateOb = new Date();

  if (this.user.id) {
      this.homeService.tryUpdate(this.user);
      this.presentAlert('Update', 'Equipment Updated');
  } else {
      this.homeService.tryAdd(this.user);
      this.presentAlert('Success', 'Equipment Added');
  }
  this.user = new User();
  this.users();
}
  async users(){
    this.isLoading = true;
    this.userList = await this.homeService.getUsers();
    this.isLoading = false;
  }




  edit(user: iUser){
    this.user = user;
  }
  async delete(user: User){
    this.isLoading = true;
    await this.homeService.tryDelete(user);
    this.presentAlert('Delete', 'Equipment Deleted');
    this.users();
    this.user = new User();
    this.isLoading = false;
  }





logOut(){
  this.auth.lemail = "";
  this.auth.lpass = "";
  this.auth.isLoggedIn = false;
  this.router.navigate(['signin']);
}
async presentAlert(header: string, message: string){
  const alert = await this. alertController.create({
    header: header,
    message: message,
    buttons: ['Ok']
  });
  await alert.present();
}
}
