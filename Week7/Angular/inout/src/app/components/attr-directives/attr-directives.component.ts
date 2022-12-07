import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-attr-directives',
  templateUrl: './attr-directives.component.html',
  styleUrls: ['./attr-directives.component.css']
})
export class AttrDirectivesComponent implements OnInit {
  users: User[] = [ 
    { 
       "userId": 1, 
       "userName": 'User1' 
    }, 
    { 
       "userId": 2, 
       "userName": 'User2' 
    }, 
    { 
       "userId": 3, 
       "userName": 'User3' 
    } 
  ];

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
}
