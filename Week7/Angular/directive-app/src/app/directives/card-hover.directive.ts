import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[ccCardHover]'
})
export class CardHoverDirective {

  constructor(private el: ElementRef) {
    // this.el.nativeElement.classList.add(this.ttClass)
    this.el.nativeElement.style.backgroundColor = "gray"
    }

}
