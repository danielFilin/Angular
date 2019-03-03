import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductsService } from '../products.service';
import { Product } from '../product.model';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-new-products-edit',
  templateUrl: './new-products-edit.component.html',
  styleUrls: ['./new-products-edit.component.css']
})
export class NewProductsEditComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  editMode = false;
  id: number;
  product: Product;
  mode = "You are in edit mode!";
 
  
  constructor(private productsService: ProductsService, private route: ActivatedRoute) { }

  ngOnInit() {
    if(this.route.snapshot.params['id'] === "edit"){
      this.mode = "You are entering a new value!";
      this.editMode = true;
    }else {
      this.id = this.route.snapshot.params['id'];
      console.log(this.id)
      this.product = this.productsService.getProduct(this.id);
    
        this.route.params
        .subscribe(
          (params: Params) => {
            this.id = +params['id'];
            console.log(this.id)
            this.product = this.productsService.getProduct(this.id);
             setTimeout( ()=> {
               this.onPatch()
             }, 0)
          }
        )
    }
 
    
    
  }

  onPatch(){
    this.signupForm.form.patchValue({
      userData: {
        name: this.product.name,
        description: this.product.description,
        picture: this.product.picture,
        price: this.product.price
      }  
  })
  }

  onClear(){
    this.signupForm.form.reset();
    this.editMode = false; 
  }

  // newProduct(){
  //   this.signupForm.setValue({
  //     userData: {
  //       name: "this.product.name",
  //       description: "this.product.description",
  //       picture: "this.product.picture",
  //       price: 0
  //     }  
  // })
  // }


  onSubmit(){
    
    const value = this.signupForm.value.userData; 
    console.log(this.signupForm);
    const newItem = new Product (value.name, value.description, value.picture, value.price)
    if(this.editMode){
      this.productsService.addItem(newItem);
    } else (
      this.productsService.editItem(this.id, newItem)
    )
   
    console.log(newItem);
    this.signupForm.form.reset();
   
  } 


}
