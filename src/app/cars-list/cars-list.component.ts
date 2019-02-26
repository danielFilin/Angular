import { Component, OnInit } from '@angular/core';
import { CarService } from './cars.service';
import { Car } from '../shared/car.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {
 selectedCar: Car;
  constructor(private carService: CarService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  
  }

  onAddNew(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
