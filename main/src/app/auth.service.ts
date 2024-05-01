import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  lemail = '';
  lpass = '';
  isLoggedIn = false;
  constructor(private alertController: AlertController, private router: Router, private toastController: ToastController) { }

  canActivate() {
    if (this.isLoggedIn) {
      return true;
    }
    this.router.navigate(['signin']);
    return false
  }

  setAuthentication(auth: boolean) {
    if (auth == true) {
      localStorage.setItem("loggedIn", "true");
    } else (
      localStorage.setItem("loggedIn", "false")
    )
  }
  
  async signup(email: string, password: string, confirmPassword: string) {
    if (!email || !password || !confirmPassword) {
      this.presentAlert('Error', 'Incomplete information');
      return; 
    }

    if (password !== confirmPassword) {
      this.presentAlert('Error', "Passwords don't match");
      return;
    }

    if (!email.includes('@')) {
      this.presentToast('Incorrect email format', 3000);
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user;
      this.presentAlert('Success', 'Sign up success');
      this.router.navigate(['signin']);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorMessage.includes("Error (auth/email-already-in-use)")) {
        this.presentAlert('Error', 'Email already in-use');
      } else if (errorMessage.includes("Error (auth/invalid-email).")) {
        this.presentAlert('Error', 'Incorrect email format');
      }
    })
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentToast(message: string, duration: number){
    const toast = await this.toastController.create({
      message: message,
      duration: duration
    });
    toast.present();
  }

  async login() {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.lemail, this.lpass).then((userCredential) => {
      const user = userCredential.user;
      //this.setAuthentication(true);
      this.isLoggedIn = true
      this.presentAlert('Success', 'Login Success');
      
      this.router.navigate(['home']);
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
      if (errorMessage.includes("Error (auth/invalid-credential)")) {
        this.presentAlert('Error', 'Unknown Account');
      } else if (errorMessage.includes("Error (auth/invalid-email).")) {
        this.presentAlert('Error', 'Unknown Email');
      }
    })
  }



  
}
