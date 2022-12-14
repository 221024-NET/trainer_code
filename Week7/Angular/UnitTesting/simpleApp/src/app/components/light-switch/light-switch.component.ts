// light-switch.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-light-switch',
  templateUrl: './light-switch.component.html',
  styleUrls: ['./light-switch.component.css']
})
export class LightSwitchComponent implements OnInit {

  isOn = false;
  
  clicked() {
    this.isOn = !this.isOn;
  }
 
  get message() {
    return `The light is ${this.isOn ? 'On' : 'Off'}`;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
