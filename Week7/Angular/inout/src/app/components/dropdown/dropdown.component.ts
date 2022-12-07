import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/classes/product';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  public products: Product[] = [
    { id: 1, name: "Table" },
    { id: 2, name: "Chair" },
    { id: 3, name: "Light" }
  ];
  
  public selectedProduct: Product = this.products[0];
  
  onSelect(event: Event) {
    // this.selectedProduct = null;
    let evt = event.target as HTMLInputElement;
    let productId = Number(evt.value);
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].id == productId) {
        this.selectedProduct = this.products[i];
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
