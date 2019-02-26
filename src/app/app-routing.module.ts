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
    {path: 'virtual-shop', component: VirtualShopComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}