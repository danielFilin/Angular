import { Component, OnInit } from '@angular/core';
import { CarService } from './cars.service';
import { Car } from '../shared/car.model';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {
 selectedCar: Car;
  constructor(private carService: CarService) { }

  ngOnInit() {
   this.carService.selectedCar
   .subscribe(
     (car: Car) => {
       this.selectedCar = car;
     }
   );
  }

}
