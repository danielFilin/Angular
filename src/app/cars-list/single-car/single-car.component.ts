import { Component, OnInit, Input } from '@angular/core';
import { Car } from 'src/app/shared/car.model';
import { CarService } from '../cars.service';

@Component({
  selector: 'app-single-car',
  templateUrl: './single-car.component.html',
  styleUrls: ['./single-car.component.css']
})
export class SingleCarComponent implements OnInit {
@Input() car: Car;
  constructor(private carService: CarService) { }

  ngOnInit() {
  }

  onSelect(){
  this.carService.selectedCar.emit(this.car);
  }

}
