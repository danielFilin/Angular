import { NgModule } from "@angular/core";
import { CarDetailComponent } from "./car-detail/car-detail.component";
import { CarStartComponent } from "./car-start/car-start.component";
import { CarsCentralComponent } from "./cars-central/cars-central.component";
import { SingleCarComponent } from "./single-car/single-car.component";
import { CarsListComponent } from "./cars-list.component";

@NgModule({
    declarations: [
       CarDetailComponent,
       CarStartComponent,
       CarsCentralComponent,
       SingleCarComponent,
       CarsListComponent
    ]
})

export class CarsModule {}