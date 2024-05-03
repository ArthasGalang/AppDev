export class User {
    id: string;
    firstName: string;
    middleName: string;
    lastName: string;
    // ratings: number;
    // isCompleted: boolean = false;
    // released: Date;
    // genres: string[] = [];
  
    constructor(id: string = '', firstName: string = '', middleName: string = '', lastName: string =''
    // ratings: number = 0, released: Date = new Date(), isCompleted: boolean = false, genres: string[] = []
    ) {
        this.id = id;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        // this.ratings = ratings;
        // this.isCompleted = isCompleted;
        // this.released = released;
        // this.genres = genres;
    }
  }
  
  
  export interface iUser {
      id: string;
      firstName: string;
      middleName: string;
      lastName: string;
    //   ratings: number;
    //   isCompleted: boolean;
    //   released: Date;
    //   genres: string[]
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