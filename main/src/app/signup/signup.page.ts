import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  semail: string = '';
  spass: string = '';
  confpass: string = '';
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  Signup() {
    this.auth.signup(this.semail, this.spass, this.confpass);
    this.semail = '';
    this.spass = '';
    this.confpass = '';
  }
}


















// import { Component, OnInit } from '@angular/core';
// import { AlertController } from '@ionic/angular';
// import { Router } from '@angular/router';
// import { getAuth, createUserWithEmailAndpassword } from "firebase/auth";

// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.page.html',
//   styleUrls: ['./signup.page.scss'],
// })
// export class SignupPage implements OnInit {
//   semail:string ="";
//   spass:string ="";
//   confpass:string="";
//   constructor(private alertController: AlertController, private router: Router) { }

//   ngOnInit() {
//   }
//   async signUp(){
//     if (!this.semail || !this.spass || !this.confpass){
//       this.presentAlert('Error', 'Incomplete information.');
//       return
//     }
//     if (this.spass !== this.confpass){
//       this.presentAlert('Error', 'Passwords do not match.');
//       return;
//     }

//     const auth = getAuth();

//     createUserWithEmailAndpassword(auth, this.semail, this.spass)
//     .then((userCredential) => {
//       const user = userCredential.user;
//     })
// .catch((error)=> {
//   const errorCode = error.code;
//   const errorMessage = error.message;
//   console.error(error)
// })

//     this.semail = "";
//     this.spass = "";
//     this.confpass="";


//     this.presentAlert('Success', 'Sign up successful!');
//     this.router.navigate(['signin']);
//   }

//   async presentAlert(header: string, messsage: string){
//     const alert = await this.alertController.create({
//       header: header,
//       message: 'message',
//       buttons: ['OK']
//     });
//     await alert.present();
//   }
// }

