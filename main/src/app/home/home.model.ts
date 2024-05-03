import { DatePipe } from '@angular/common';


export class User {
    id: string;
    Type: string;
    Name: string;
    Level: number;
    dateOb: Date;
    Equip: boolean;
  
    constructor(id: string = '', 
    Type: string = '', 
    Name: string = '', 
    Level: number = 0, 
    dateOb: Date = new Date(), // Initialize dateOb with current date
    Equip: boolean = false,
    ) {
        this.id = id;
        this.Type = Type;
        this.Name = Name;
        this.Level = Level;
        this.dateOb = dateOb; // Assign the initialized dateOb
        this.Equip = Equip;
    }
}
  
  
  export interface iUser {
      id: string;
      Type: string;
      Name: string;
      Level: number;
      dateOb: Date;
      Equip: boolean;
  }




//   export class User {
//     id: string;
//     Type: string;
//     Name: string;
//     Level: number;
//     dateOb: Date;
//     Equipped: boolean;

  
//     constructor(id: string = '0', 
//                 Type: string = '', 
//                 Name: string = '', 
//                 Level: number = 0, 
//                 dateOb: Date    = new Date("1990/12/31"), 
//                 Equipped: boolean = false
//     ) {
//         this.id = id;
//         this.Type = Type;
//         this.Name = Name;
//         this.Level = Level;
//         this.dateOb = dateOb;
//         this.Equipped = Equipped;

//     }
//   }
  
  
//   export interface iUser {
//       id: string;
//       Type: string;
//       Name: string;
//       Level: number;
//       dateOb: Date;
//       Equipped: boolean;
  
//   }