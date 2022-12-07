import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  API_URL: string = "/api/";
  // API_URL: string = "https://jsonplaceholder.typicode.com/";
  
  constructor(private http: HttpClient) { }

  getContacts(): Observable<any[]> {    
    return this.http.get<any[]>(this.API_URL + 'contacts')
  }
  
  getContact(contactId: any){
    return this.http.get<any>(`${this.API_URL + 'contacts'}/${contactId}`) 
  }

  // getContacts(): Observable<User[]> {
  //   return this.http
  //     .get<User[]>(this.API_URL + 'users')
  //     .pipe(map( (users: User[]) => users.map(user => new User(user))))
  // }

  // getContact(contactId: number): Observable<User> {
  //   return this.http.get<User>(`${this.API_URL + 'users'}/${contactId}`) 
  // }
}
