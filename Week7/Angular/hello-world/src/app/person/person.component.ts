import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  fullname = "Mary Jane";
  public topic = "Data Binding";
  public imagePath = "/assets/Angular_logo.png";
  public random = "<Enter something here>";

  constructor() { }

  ngOnInit(): void {
  }

  demo() {
    console.log("Demo button was clicked!");
    this.random = "Changed from demo()";
  }
}
