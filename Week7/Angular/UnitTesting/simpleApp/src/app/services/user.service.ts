// user.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLoggedIn = true;
  user = {name: 'Ajay Singala'};

  constructor() { }
}
