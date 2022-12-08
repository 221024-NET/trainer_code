import { Component, OnInit } from '@angular/core';
import { HttpClientBackendService } from 'angular-in-memory-web-api';
import { Hero } from 'src/app/classes/hero';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  powers = ["Really Smart", "Super Flexible", "Super Hot", "Weather Changer"];
  model = new Hero(18, "Dr. IQ", "", "Chuck Overstreet");
  submitted = false;

  user = new User("Ajay");
  cityname = "Reston";

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.user.firstname)
    console.log(this.cityname)
  }

  newHero() {
    this.model = new Hero(42, "", "");
    //this.model = new User("Ajay");
  }

}
