import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  presentDate = new Date();

  // For Async pipe.
  timeChange = new Observable<string>( (observer: Observer<string>) => {
    setInterval( () => observer.next(new Date().toString()), 1000);
  });

  // For currency pipe.
  price: number = 20000;

  // For Slice pipe.
  Fruits = ["apple", "Orange", "Grapes", "Mango", "Kiwi", "Watermelon"];

  // For Decimal pipe.
  decimalNum1: number = 8.7589623; 
  decimalNum2: number = 5.43;
  decimal_value: number = 5.123456789;

  // For Percent pipe.
  percentNum: number = 0.8178; 

  // For Json Pipe
  jsonData = { id: 'one', name: { username: 'user1' }};

  // For custom pipe: DigitCount.
  digits : number = 100;

  constructor() { }

  ngOnInit(): void {
  }

}
