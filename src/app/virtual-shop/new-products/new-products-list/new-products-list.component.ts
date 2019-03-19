import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product.model';
import { Subscription } from 'rxjs/Subscription';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-new-products-list',
  templateUrl: './new-products-list.component.html',
  styleUrls: ['./new-products-list.component.css']
})
export class NewProductsListComponent implements OnInit {
products: Product[];
subscription: Subscription;

  constructor(private productService: ProductsService, private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.subscription = this.productService.productsChanged
    .subscribe(
      (products: Product[]) => {
        this.products = products;
      }
      
    )
   this.products = this.productService.getProducts();
  }

  toServer(){
      this.dataStorageService.storeRecipes('https://training-project-a5eab.firebaseio.com/products.json', this.productService.getProducts())
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      )
    }

    fetchFromServer(){
      this.dataStorageService.storeProducts();
    }
  

}
