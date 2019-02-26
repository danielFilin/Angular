import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { CarsComponent } from './cars/cars.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { SingleCarComponent } from './cars-list/single-car/single-car.component';
import { CarService } from './cars-list/cars.service';
import { CarDetailComponent } from './cars-list/car-detail/car-detail.component';
import { CarsCentralComponent } from './cars-list/cars-central/cars-central.component';
import { carAddsService } from './cars/carAdds.service';
import { CarAddsComponent } from './cars/car-adds/car-adds.component';
import { AnimalsDetailComponent } from './animal-main/animals-detail/animals-detail.component';
import { AnimalsItemComponent } from './animal-main/animals-item/animals-item.component';
import { AnimalsListComponent } from './animal-main/animals-list/animals-list.component';
import { AnimalMainComponent } from './animal-main/animal-main.component';
import { AnimalsService } from './animal-main/animals.service';
import { AnimalEditComponent } from './animal-edit/animal-edit.component';
import { AnimalInputComponent } from './animal-edit/animal-input/animal-input.component';
import { AnimalFoodComponent } from './animal-edit/animal-food/animal-food.component';
import { FoodListComponent } from './animal-edit/food-list/food-list.component';
import { AnimalFood } from './animal-edit/food-list/AnimalFood.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { AnimalStartComponent } from './animal-main/animal-start/animal-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { CarStartComponent } from './cars-list/car-start/car-start.component';
import { CarEditComponent } from './cars/car-edit/car-edit.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RecipeService } from './recipes/recipe.service';
import { VirtualShopComponent } from './virtual-shop/virtual-shop.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    CarsComponent,
    CarsListComponent,
    SingleCarComponent,
    CarDetailComponent,
    CarsCentralComponent,
    CarAddsComponent,
    AnimalsDetailComponent,
    AnimalsItemComponent,
    AnimalsListComponent,
    AnimalMainComponent,
    AnimalEditComponent,
    AnimalInputComponent,
    AnimalFoodComponent,
    FoodListComponent,
    RecipeStartComponent,
    AnimalStartComponent,
    RecipeEditComponent,
    CarStartComponent,
    CarEditComponent,
    FormComponent,
    ReactiveFormComponent,
    VirtualShopComponent,
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule, 
    ReactiveFormsModule
  ],
  providers: [ShoppingListService, CarService, carAddsService, AnimalsService, AnimalFood, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
