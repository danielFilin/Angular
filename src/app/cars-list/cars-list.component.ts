import { Component, OnInit } from '@angular/core';
import { CarService } from './cars.service';
import { Car } from '../shared/car.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {
 selectedCar: Car;
  constructor(private carService: CarService, private route: ActivatedRoute, private router: Router, private dataStorageService: DataStorageService) { }

  ngOnInit() {
  
  }

  onAddNew(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onSave(){
    this.dataStorageService.storeRecipes('https://training-project-a5eab.firebaseio.com/Cars.json', this.carService.getCars())
    .subscribe(
      (response: Response) => {
        console.log(response);
      }
    )
  }

  onFetch(){
    this.dataStorageService.getCarsfromServer();
  }

}
