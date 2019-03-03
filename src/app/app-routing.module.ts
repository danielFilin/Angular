import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { CarsListComponent } from "./cars-list/cars-list.component";
import { CarsComponent } from "./cars/cars.component";
import { AnimalEditComponent } from "./animal-edit/animal-edit.component";
import { AnimalMainComponent } from "./animal-main/animal-main.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { AnimalStartComponent } from "./animal-main/animal-start/animal-start.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { CarDetailComponent } from "./cars-list/car-detail/car-detail.component";
import { AnimalsDetailComponent } from "./animal-main/animals-detail/animals-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { CarStartComponent } from "./cars-list/car-start/car-start.component";
import { FormComponent } from "./form/form.component";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { CarEditComponent } from "./cars/car-edit/car-edit.component";
import { VirtualShopComponent } from "./virtual-shop/virtual-shop.component";
import { NewsComponent } from "./virtual-shop/news/news.component";
import { BestOffersComponent } from "./virtual-shop/best-offers/best-offers.component";
import { NewProductsComponent } from "./virtual-shop/new-products/new-products.component";
import { NewProductsEditComponent } from "./virtual-shop/new-products/new-products-edit/new-products-edit.component";

import { NewProductsItemComponent } from "./virtual-shop/new-products/new-products-item/new-products-item.component";
import { ProductDetailsComponent } from "./virtual-shop/new-products/product-details/product-details.component";
import { NewProductsListComponent } from "./virtual-shop/new-products/new-products-list/new-products-list.component";
import { ShoppingCartComponent } from "./virtual-shop/shopping-cart/shopping-cart.component";
import { AddOfferFormComponent } from "./virtual-shop/best-offers/add-offer-form/add-offer-form.component";
import { HttpComponent } from "./http/http.component";




const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full'},
    { path: 'recipes', component: RecipesComponent, children: [
        { path: '', component: RecipeStartComponent },
        { path: 'new', component: RecipeEditComponent},
        { path: ':id', component: RecipeDetailComponent},
        { path: ':id/edit', component: RecipeEditComponent}
    ] },
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: 'cars-list', component: CarsListComponent, children: [
        { path: '', component: CarStartComponent},
        { path: 'new', component: CarEditComponent},
        { path: ':id', component: CarDetailComponent},
        { path: ':id/edit', component: CarEditComponent}
    ]},
    { path: 'cars', component: CarsComponent, children: [
        
    ]},
    { path: 'animals-edit', component: AnimalEditComponent},
    { path: 'animals-main', component: AnimalMainComponent , children: [
        { path: '', component: AnimalStartComponent },
        { path: 'new', component: AnimalEditComponent},
        { path: ':id', component: AnimalsDetailComponent},
        { path: ':id/edit', component: AnimalEditComponent }
    ]},
    {path: 'form', component: FormComponent}, 
    {path: 'reactive-form', component: ReactiveFormComponent},
    {path: 'virtual-shop/new-products', component: NewProductsComponent, children: [
        {path: ':id', component: ProductDetailsComponent}
    ]},
    {path: 'virtual-shop/new-products-item', component: NewProductsItemComponent}, 
    {path: 'virtual-shop', component: VirtualShopComponent, children: [
        {path: 'news', component: NewsComponent},
        {path: 'new-products-edit/:id', component: NewProductsEditComponent},
        {path: 'new-products-edit/edit', component: NewProductsEditComponent},
        {path: 'shopping-cart', component: ShoppingCartComponent}
        
    ]},
    {path: 'virtual-shop/best-offers', component: BestOffersComponent},
    {path: 'virtual-shop/new-products-list/', component: NewProductsListComponent},{path: 'virtual-shop/best-offers/add-offer-form', component: AddOfferFormComponent},
    {path: 'http', component: HttpComponent}

]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}