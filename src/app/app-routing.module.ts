import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { CarsListComponent } from "./cars-list/cars-list.component";
import { CarsComponent } from "./cars/cars.component";
import { AnimalEditComponent } from "./animal-edit/animal-edit.component";
import { AnimalMainComponent } from "./animal-main/animal-main.component";
import { AnimalStartComponent } from "./animal-main/animal-start/animal-start.component";
import { CarDetailComponent } from "./cars-list/car-detail/car-detail.component";
import { AnimalsDetailComponent } from "./animal-main/animals-detail/animals-detail.component";
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
import { AuthGuard } from "./auth/auth-guard.service";
import { HomeComponent } from "./home/home.component";




const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},
    { path: 'shopping-list', component: ShoppingListComponent },
    
    { path: 'cars', component: CarsComponent},
    { path: 'animals-edit', component: AnimalEditComponent, canActivate: [AuthGuard]},
    { path: 'animals-main', component: AnimalMainComponent , children: [
        { path: '', component: AnimalStartComponent },
        { path: 'new', component: AnimalEditComponent, canActivate: [AuthGuard]},
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
        {path: 'new-products-edit/edit', component: NewProductsEditComponent, canActivate: [AuthGuard]},
        {path: 'shopping-cart', component: ShoppingCartComponent}
    ]},
    {path: 'virtual-shop/best-offers', component: BestOffersComponent},
    {path: 'virtual-shop/new-products-list/', component: NewProductsListComponent},{path: 'virtual-shop/best-offers/add-offer-form', component: AddOfferFormComponent},
    {path: 'http', component: HttpComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}