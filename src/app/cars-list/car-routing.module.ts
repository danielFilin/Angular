import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CarsListComponent } from "./cars-list.component";
import { CarStartComponent } from "./car-start/car-start.component";
import { AuthGuard } from "../auth/auth-guard.service";
import { CarEditComponent } from "../cars/car-edit/car-edit.component";
import { CarDetailComponent } from "./car-detail/car-detail.component";

const carsRoutes: Routes = [
    { path: 'cars-list', component: CarsListComponent, children: [
        { path: '', component: CarStartComponent},
        { path: 'new', component: CarEditComponent, canActivate: [AuthGuard]},
        { path: ':id', component: CarDetailComponent},
        { path: ':id/edit', component: CarEditComponent, canActivate: [AuthGuard]}
    ]},
];
    
@NgModule({
    imports: [
        RouterModule.forChild(carsRoutes)
    ],
    exports: [RouterModule]
})

export class CarsRoutingModule{}