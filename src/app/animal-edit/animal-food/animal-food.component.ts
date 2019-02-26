import { Component, OnInit, ViewChild } from '@angular/core';
import { Food } from '../food-list/food.model';
import { AnimalFood } from '../food-list/AnimalFood.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-animal-food',
  templateUrl: './animal-food.component.html',
  styleUrls: ['./animal-food.component.css']
})
export class AnimalFoodComponent implements OnInit {
  @ViewChild('f') foodForm: NgForm;
  foodItems: Food[];
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedFood: Food;

  constructor(private foodService: AnimalFood) { }
 

  ngOnInit() {
    this.foodItems = this.foodService.getFood();
    this.subscription = this.foodService.startedEditing
    .subscribe(
      (index: number) => {
      this.editMode = true;
      this.editedItemIndex = index;
      this.editedFood = this.foodService.getSingleFood(index);
      this.foodForm.setValue({
          food: this.editedFood.name,
          amount: this.editedFood.amount
      })
      }
    )
  }

  toCart(form: NgForm){
    const value = form.value;
    const newFood = new Food (value.food, value.amount);
    if(this.editMode) {
      this.foodService.updateFood(this.editedItemIndex, newFood)
      this.editMode = false; 
      this.foodForm.reset();
    } else {
      this.foodService.addFood(newFood)
    }
  }

  delete(){
    this.foodService.onDelete(this.editedItemIndex);
  }

    onClear(){
      this.foodForm.reset();
    }

  editAnimal(index: number){
    this.foodService.startedEditing.next(index);
  }

  

 

}
