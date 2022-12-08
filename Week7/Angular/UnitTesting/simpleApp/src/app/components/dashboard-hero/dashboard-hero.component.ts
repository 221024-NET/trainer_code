// dashboard-hero.component
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from 'src/app/classes/hero';

@Component({
  selector: 'app-dashboard-hero',
  templateUrl: './dashboard-hero.component.html',
  styleUrls: ['./dashboard-hero.component.css']
})
export class DashboardHeroComponent implements OnInit {

  @Input() hero!: Hero;
  @Output() selected = new EventEmitter<Hero>();

  click() { 
    this.selected.emit(this.hero); 
  }

  constructor() { }

  ngOnInit(): void {
  }

}
