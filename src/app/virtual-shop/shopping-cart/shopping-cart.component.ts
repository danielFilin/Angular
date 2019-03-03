import { Component, OnInit } from '@angular/core';
import { Product } from '../new-products/product.model';
import { ProductsService } from '../new-products/products.service';
import { Subscription } from 'rxjs/Subscription';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
subscription: Subscription;
items: Product[];
totalPrice: number;
someList = [ {
  name: "Daniel",
  number: 123
},{
  name: "Bob",
  number: 122
}
]

newList = [
  {
    name: "Daniel",
    number: 233
  }
]

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.items = this.productsService.getCart();
   
    this.productsService.productsChanged
    .subscribe(
      (newItem: Product[]) => {
        this.items = newItem;
      }
    )
  }


}
