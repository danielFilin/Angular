import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-new-products-list',
  templateUrl: './new-products-list.component.html',
  styleUrls: ['./new-products-list.component.css']
})
export class NewProductsListComponent implements OnInit {
products: Product[];
subscription: Subscription;

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.subscription = this.productService.productsChanged
    .subscribe(
      (products: Product[]) => {
        this.products = products;
      }
      
    )
   this.products = this.productService.getProducts();
  }

}
