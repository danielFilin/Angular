import { Component, OnInit } from '@angular/core';
import { AnimalFood } from './AnimalFood.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  

  constructor(private animalFood: AnimalFood) { }

  ngOnInit() {
  }

}
