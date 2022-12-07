import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: any[] = [];

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.getContacts().subscribe((data : any[])=>{
        console.log(data);
        this.contacts = data;
    })
  }

  // ngOnInit(): void {
  //   this.contactService.getContacts().subscribe(
  //     (resp: User[]) => { console.log(resp); })
  // }

}
