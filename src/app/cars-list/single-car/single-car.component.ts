import { Component, OnInit, Input } from '@angular/core';
import { Car } from 'src/app/shared/car.model';


@Component({
  selector: 'app-single-car',
  templateUrl: './single-car.component.html',
  styleUrls: ['./single-car.component.css']
})
export class SingleCarComponent implements OnInit {
@Input() car: Car;
@Input() index: number; 
 

  ngOnInit() {
  }


}
