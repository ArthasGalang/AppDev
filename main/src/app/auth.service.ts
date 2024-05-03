import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  lemail = '';
  lpass = '';
  isLoggedIn = false;
  constructor(private router: Router, private alertController: AlertController, private toastController: ToastController) { }

  canActivate() 
  {
    if (this.isLoggedIn) {
      return true;
    }
    this.router.navigate(['signin']);
    return false
  }

  setAuthentication(auth: boolean) 
  {
    if (auth == true) 
    {
      localStorage.setItem("loggedIn", "true");
    } else 
    (
      localStorage.setItem("loggedIn", "false")
    )
  }
  
  async signup(semail: string, spass: string, confpass: string) 
  {
    if (!semail || !spass || !confpass)
    {
      this.presentAlert('Error', 'Incomplete information');
      return; 
    }

    if (spass !== confpass) 
    {
      this.presentAlert('Error', "Passwords don't match");
      return;
    }

    if (!semail.includes('@')) 
    {
      this.presentToast('Incorrect email format');
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, semail, spass).then
    (
      (userCredential) => 
      {
      const user = userCredential.user;
      this.presentAlert('Success', 'Sign up success');
      this.router.navigate(['signin']);
      }
    )
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorMessage.includes("Error (auth/email-already-in-use)")) 
      {
        this.presentAlert('Error', 'Email already in-use');
      } 
      else if (errorMessage.includes("Error (auth/invalid-email).")) 
      {
        this.presentAlert('Error', 'Incorrect email format');
      }
    })
  }

  async login() 
  {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.lemail, this.lpass).then
    (
      (userCredential) => 
       {
      const user = userCredential.user;
      this.isLoggedIn = true
      this.presentToast('Logged in');
      
      this.router.navigate(['home']);
       }
    )
    .catch(
      (error) => 
        {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
      if (errorMessage.includes("Error (auth/invalid-credential)")) 
      {
        this.presentAlert('Error', 'Unknown Account');
      } 
      else if (errorMessage.includes("Error (auth/invalid-email).")) 
      {
        this.presentAlert('Error', 'Unknown Email');
      }
      }
    )
  }

  async presentAlert(header: string, message: string){
    const alert = await this. alertController.create({
      header: header,
      message: message,
      buttons: ['Ok']
    });
    await alert.present();
  }
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
  
}
