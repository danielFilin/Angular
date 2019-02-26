import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/shared/car.model';
import { CarService } from '../cars.service';

@Component({
  selector: 'app-cars-central',
  templateUrl: './cars-central.component.html',
  styleUrls: ['./cars-central.component.css']
})
export class CarsCentralComponent implements OnInit {
cars: Car[];
  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.selectedCar
.subscribe(
  (car: Car[]) => {
    this.cars = car;
  }
);
    this.cars = this.carService.getCars();
  }

}


