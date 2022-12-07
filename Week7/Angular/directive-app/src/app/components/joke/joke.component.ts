import { Component, Input, OnInit } from '@angular/core';
import { Joke } from 'src/app/classes/joke';

@Component({
  selector: 'joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  @Input('joke') data!: Joke;
  
  constructor() { }

  ngOnInit(): void {
  }

}
