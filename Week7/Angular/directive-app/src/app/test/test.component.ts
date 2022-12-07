import { Component, OnInit } from '@angular/core';

import { User } from '../user'; 

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  isLogIn : boolean = false;
  isLogOut : boolean = true; 
  list = [1,2,3,4,5];

  studentArr: any[] = [
    {
      "id": 1, 
      "name": "student1" 
    }, 
    { 
      "id": 2,
      "name": "student2" 
    }, 
    { 
      "id": 3, "name": "student3"
    },
    { 
      "id": 4, 
      "name": "student4" 
    } 
  ];
  
  logInName = 'admin';
  
  users: User[] = [ 
    { 
       "userId": 1, 
       "userName": 'User1' 
    }, 
    { 
       "userId": 2, 
       "userName": 'User2' 
    }, 
  ];

  Fruits = ["mango","apple","orange","grapes"]; 
  
  serverID: number = 10;  
  serverStatus: string = 'Offline';
  constructor() { 
    this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';  
  }

  ngOnInit(): void {
  }

  getServerStatus() {  
    return this.serverStatus;  
  }  
  getColor() {  
    return this.serverStatus === 'Online' ? 'green' : 'red';  
  }

  trackByData(index:number, studentArr:any): number { 
    return studentArr.id; 
 }
}
