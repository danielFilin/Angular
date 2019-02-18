import { Component, OnInit } from '@angular/core';
import { CarAdds } from '../shared/car-adds.model';
import { carAddsService } from './carAdds.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
adds: CarAdds[];

  constructor(private carsAdds: carAddsService) { }

  ngOnInit() {
     this.adds = this.carsAdds.getAdds();
    this.carsAdds.addsChanged
    .subscribe(
      (adds: CarAdds[]) => {
        this.adds = adds; 
      }
    )
   
  }
}
