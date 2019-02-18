import { Component, OnInit, Input } from '@angular/core';
import { Car } from 'src/app/shared/car.model';
import { CarService } from '../cars.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
@Input() car: Car;
  constructor(private carService: CarService) { }

  ngOnInit() {
  }

  onAddToCarsList(){
    this.carService.addExtraToList(this.car.adds)
  }

}
