import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: '<h3>This is the hello component</h3>',
  styles: [`
    h3 {
      color: blue;
    }
  `]
})
export class HelloComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
