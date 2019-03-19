import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { RecipeService } from "../recipes/recipe.service";

import { Recipe } from "../recipes/recipe.model";
import { Car } from "./car.model";
import { CarService } from "../cars-list/cars.service";
import { Animal } from "../animal-main/animals.model";
import { AnimalsService } from "../animal-main/animals.service";
import { Product } from "../virtual-shop/new-products/product.model";
import { ProductsService } from "../virtual-shop/new-products/products.service";
import { AuthService } from "../auth/auth.service";

@Injectable()

export class DataStorageService {
    constructor(private http: Http, private recipeService: RecipeService, private carService: CarService, private animalsService: AnimalsService, private productsService: ProductsService, private authService: AuthService) {}

    storeRecipes(address, fun) {

        return this.http.put(address, fun);
    }

    getRecipes() {
        const token = this.authService.getToken()
        
        return this.http.get('https://training-project-a5eab.firebaseio.com/recipes.json?auth=' + token)
         .map(
             (response: Response) => {
                 const recipes: Recipe[] = response.json();
                 for (let recipe of recipes) {
                     if (!recipe['ingredients']) {
                        recipe['ingredients'] = [];
                     }
                 }
                 return recipes;
             }
         )    
         .subscribe(
            (recipes: Recipe[]) => {
            this.recipeService.setRecipes(recipes);
                 }
             )
              }

    getCarsfromServer(){
        return this.http.get('https://training-project-a5eab.firebaseio.com/Cars.json')
        .map(
            (response: Response) => {
                const cars: Car[] = response.json();
                for (let car of cars){
                    if(!car['adds']){
                        car['adds'] = [];
                    }
                }
                return cars;
            }  
            )
            .subscribe(
                (cars: Car[]) => {
                    this.carService.setCars(cars);
                }
            )
                }


                fetchAnimals(){
                    return this.http.get('https://training-project-a5eab.firebaseio.com/Animals.json')
                    .map(
                        (response: Response) => {
                            const animals: Animal[] = response.json();
                            for(let animal of animals) {
                                if(!animal['food']){
                                    animal['food'] = [];
                                }
                            }
                            return animals; 
                        }
                    )
                    .subscribe(
                        (animals: Animal[]) => {
                            this.animalsService.setAnimals(animals);
                        }
                    )
                }

                storeProducts(){
                    return this.http.get('https://training-project-a5eab.firebaseio.com/products.json')
                    .map(
                        (response: Response) => {
                            const products: Product[] = response.json();
                            return products;
                        }
                      
                    )
                    .subscribe(
                        (products: Product[]) => {
                            this.productsService.setProducts(products)
                        }
                    )
                }


}
    

