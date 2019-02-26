import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/shared/car.model';
import { CarService } from '../cars.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
car: Car;
id: number;
  constructor(private carService: CarService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
     this.route.params
     .subscribe(
       (params: Params) => {
         this.id = +params['id']; 
         this.car = this.carService.getCar(this.id);
       }
     )

  }

  onAddToCarsList(){
    this.carService.addExtraToList(this.car.adds);
  }

  toEditMode(){
      this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDelete(index: number){
    this.carService.onDelete(index);
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
