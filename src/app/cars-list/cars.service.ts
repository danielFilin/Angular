import { Car } from "../shared/car.model";
import { EventEmitter, Injectable } from "@angular/core";
import { CarAdds } from "../shared/car-adds.model";
import { carAddsService } from "../cars/carAdds.service";

@Injectable()

export class CarService{
    selectedCar = new EventEmitter<Car>();

    private cars: Car[] = [
        new Car("BMW", 125, 33000, "https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/vdat/submodels/bmw_m8-gran-coupe_bmw-concept-m8-gran-coupe_2018-1532968589970.jpg",
        [
            new CarAdds("Super comfortable wheel", 1, "Wheel")
        ]
        ),
        new Car("Ford", 95, 19000, "https://hips.hearstapps.com/hmg-prod/images/2017-ford-fiesta-1544714508.jpg",
        [
            new CarAdds("Roof connector", 1, "picture")
        ]
        )
    ];

    constructor(private addService: carAddsService){
     
    }

    getCars() {
        return this.cars.slice();
    }

    addExtraToList(adds: CarAdds[]){
        this.addService.addExtraFeatures(adds);
    }

}

