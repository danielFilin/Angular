import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

id: number;
product: Product;

  constructor(private productsService: ProductsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.product = this.productsService.getProduct(this.id);
      }
    );
  }


  toEditMode(){
    this.router.navigate(['../../new-products-edit/', this.id], {relativeTo: this.route});
    
  }

  addToCart(){
    this.productsService.toShoppingCart(this.id, this.product);
    this.router.navigate(["../../shopping-cart"], {relativeTo: this.route})
  }


  onDelete(){
    this.productsService.deleteItem(this.id);
    this.router.navigate(['../', {relativeTo: this.route}])
  }

}
