import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contact: any;

  constructor(private contactService: ContactService,
    private route: ActivatedRoute) { 

    }

  ngOnInit(): void {
    this.route.paramMap.subscribe( (params: any) => {
      console.log("ID: " + params.get("id"));
      this.contactService.getContact(params.get("id")).subscribe( (c :any) => {
        console.log("Contact details:", c)
        this.contact = c;
      })
    })
  }

}
