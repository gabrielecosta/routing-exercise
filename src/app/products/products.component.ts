import { Component, OnInit } from '@angular/core';
import { Product } from "./products";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }

 products: Product[] = [
   { id: 1, name: "Computer", price: 250 },
   { id: 2, name: "Smartphone", price: 899.99 },
   { id: 3, name: "Cover", price: 29.99}
 ];


}
