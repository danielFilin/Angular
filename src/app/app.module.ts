import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
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

import { AnimalStartComponent } from './animal-main/animal-start/animal-start.component';
import { CarStartComponent } from './cars-list/car-start/car-start.component';
import { CarEditComponent } from './cars/car-edit/car-edit.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RecipeService } from './recipes/recipe.service';
import { VirtualShopComponent } from './virtual-shop/virtual-shop.component';
import { NewProductsComponent } from './virtual-shop/new-products/new-products.component';
import { BestOffersComponent } from './virtual-shop/best-offers/best-offers.component';
import { NewsComponent } from './virtual-shop/news/news.component';
import { NewProductsListComponent } from './virtual-shop/new-products/new-products-list/new-products-list.component';
import { NewProductsItemComponent } from './virtual-shop/new-products/new-products-item/new-products-item.component';
import { NewProductsEditComponent } from './virtual-shop/new-products/new-products-edit/new-products-edit.component';
import { ProductsService } from './virtual-shop/new-products/products.service';
import { ProductDetailsComponent } from './virtual-shop/new-products/product-details/product-details.component';
import { ShoppingCartComponent } from './virtual-shop/shopping-cart/shopping-cart.component';
import { BestOffersListComponent } from './virtual-shop/best-offers/best-offers-list/best-offers-list.component';
import { BestOffersSingleComponent } from './virtual-shop/best-offers/best-offers-single/best-offers-single.component';
import { BestOffersService } from './virtual-shop/best-offers/bestOffers.service';
import { AddOfferFormComponent } from './virtual-shop/best-offers/add-offer-form/add-offer-form.component';
import { HttpComponent } from './http/http.component';
import { ServersService } from './http/servers.service';
import { DataStorageService } from './shared/data-storage.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
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
    AnimalStartComponent,
    CarStartComponent,
    CarEditComponent,
    FormComponent,
    ReactiveFormComponent,
    VirtualShopComponent,
    NewProductsComponent,
    BestOffersComponent,
    NewsComponent,
    NewProductsListComponent,
    NewProductsItemComponent,
    NewProductsEditComponent,
    ProductDetailsComponent,
    ShoppingCartComponent,
    BestOffersListComponent,
    BestOffersSingleComponent,
    AddOfferFormComponent,
    HttpComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    SharedModule,
    ShoppingListModule,
    AuthModule
  ],
  providers: [ShoppingListService, CarService, carAddsService, AnimalsService, AnimalFood, RecipeService, ProductsService, BestOffersService, ServersService, DataStorageService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
