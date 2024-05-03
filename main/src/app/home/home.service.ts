import { Injectable } from '@angular/core';
import { addDoc, collection, getFirestore, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore"
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { User, iUser } from './home.model'
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  async getUsers(): Promise<iUser[]>{
    const app = initializeApp(environment.firebaseConfig);
    const firestore = getFirestore(app);

    const users: User[] = [];

    //RETRIEVE  
    const querySnapshot = await getDocs(collection(firestore, "users"));
    querySnapshot.forEach((doc) =>{
      const user = doc.data() as User;
      user.id = doc.id;
      users.push(user);
      // console.log('${doc.id} => #{doc.date()}');
      // console.log(doc.data());

    });
    return users;
  }


  async tryAdd(user: User){
    const app = initializeApp (environment.firebaseConfig);
    const firestore= getFirestore(app);

    try {

      const docRefM1= await addDoc(collection(firestore,"users"),{
        Type: user.Type,
        Name: user.Name,
        Level: user.Level,
        dateOb: user.dateOb,
      });
      console.log("Document written with ID: ", docRefM1.id)
    } catch (e){
      console.error("error adding document: ", e);
    }
  }

  async tryUpdate(user: User){
    const app = initializeApp(environment.firebaseConfig);
    const firestore = getFirestore(app);

    try{
      const docRef = doc(firestore, "users", user.id);
      await updateDoc(docRef, {Type: user.Type, Name: user.Name, Level: user.Level, dateOb: user.dateOb});
    } catch (e){
      console.error ("Error adding document: ", e);
    }
  }


  async tryDelete(user: User){
    const app = initializeApp(environment.firebaseConfig);
    const firestore = getFirestore(app);

    try{
      const docRef = doc(firestore, "users", user.id);
      await deleteDoc(docRef);
    } catch (e){
      console.error ("Error adding document: ", e);
    }
  }


}


// import { Injectable, Type } from '@angular/core';
// import { addDoc, collection, getFirestore, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore"
// import { initializeApp } from 'firebase/app';
// import { environment } from 'src/environments/environment';
// import { User, iUser } from './home.model'

// @Injectable({
//   providedIn: 'root'
// })
// export class HomeService {

//   constructor() { }

//   async getUsers(): Promise<iUser[]>{
//     const app = initializeApp(environment.firebaseConfig);
//     const firestore = getFirestore(app);

//     const users: User[] = [];

//     //RETRIEVE  
//     const querySnapshot = await getDocs(collection(firestore, "users"));
//     querySnapshot.forEach((doc) =>{
//       const user = doc.data() as User;
//       user.id = doc.id;
//       users.push(user);
//       // console.log('${doc.id} => #{doc.date()}');
//       // console.log(doc.data());

//     });
//     return users;
//   }


//   async tryAdd(user: User){
//     const app = initializeApp (environment.firebaseConfig);
//     const firestore= getFirestore(app);

//     try {

//       const docRefM1= await addDoc(collection(firestore,"users"),{
//         Type: user.Type,
//         Name: user.Name,
//         Level: user.Level,
//         dateOb: user.dateOb,
//         equipped: user.Equipped,
//       });
//       console.log("Document written with ID: ", docRefM1.id)
//     } catch (e){
//       console.error("error adding document: ", e);
//     }
//   }

//   async tryUpdate(user: User){
//     const app = initializeApp(environment.firebaseConfig);
//     const firestore = getFirestore(app);

//     try{
//       const docRef = doc(firestore, "users", user.id);
//       await updateDoc(docRef, { 
//         Type: user.Type,
//         Name: user.Name,
//         Level: user.Level,
//         dateOb: user.dateOb,
//         equipped: user.Equipped,});
//     } catch (e){
//       console.error ("Error adding document: ", e);
//     }
//   }


//   async tryDelete(user: User){
//     const app = initializeApp(environment.firebaseConfig);
//     const firestore = getFirestore(app);

//     try{
//       const docRef = doc(firestore, "users", user.id);
//       await deleteDoc(docRef);
//     } catch (e){
//       console.error ("Error adding document: ", e);
//     }
//   }


  
// }
