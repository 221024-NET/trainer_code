import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/classes/character';

@Component({
  selector: 'app-ngfordemo',
  templateUrl: './ngfordemo.component.html',
  styleUrls: ['./ngfordemo.component.css']
})
export class NgfordemoComponent implements OnInit {
  characters: Character[] = [
    {
      actor_name: 'Peter Dinklage',
      character_name: 'Tyrion Lannister',
      gender: 'Male',
      status: 'Alive'
    },
    {
      actor_name: 'Sean Bean',
      character_name: 'Ned Stark',
      gender: 'Male',
      status: 'Dead'
    },
    {
      actor_name: 'Emilia Clark',
      character_name: 'Khaleesi',
      gender: 'Female',
      status: 'Alive'
    },
    {
      actor_name: 'Catelyn Stark',
      character_name: 'Michelle Fairley',
      gender: 'Female',
      status: 'Dead'
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
