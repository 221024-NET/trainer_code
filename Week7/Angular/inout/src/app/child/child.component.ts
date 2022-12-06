import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  private _title: string = "";
  public clickCount: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  public set title(title: string) {
    this._title = title;

  }
  public get title() {
    return this._title;
  }

  @Output()
  onChanged = new EventEmitter<number>();
  
  countChange(count: number) {
    count++;
    this.clickCount = count;
    this.onChanged.emit(this.clickCount)
  }

}
