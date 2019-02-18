import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    AnimalInputComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ShoppingListService, CarService, carAddsService, AnimalsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
