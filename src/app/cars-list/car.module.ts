import { NgModule } from "@angular/core";

import { CarStartComponent } from "./car-start/car-start.component";
import { CarsCentralComponent } from "./cars-central/cars-central.component";
import { SingleCarComponent } from "./single-car/single-car.component";
import { CarsListComponent } from "./cars-list.component";
import { CommonModule } from "@angular/common";
import { CarsRoutingModule } from "./car-routing.module";

@NgModule({
    declarations: [
  
       CarStartComponent,
       CarsCentralComponent,
       SingleCarComponent,
       CarsListComponent
    ],
    imports: [
        CommonModule,
        CarsRoutingModule
    ]
})

export class CarsModule {}