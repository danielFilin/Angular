import { Food } from "./food.model";
import { Subject } from "rxjs";

export class AnimalFood {

startedEditing = new Subject<number>();

    food: Food[] = [
        new Food("Straw", 250),
        new Food("Bones", 55)
    ]

    addFood(food: Food){
        this.food.push(food);
        console.log(food);
    }

    getSingleFood(index: number) {
        return this.food[index];
    }

    getFood(){
        return this.food; 
    }

    onDelete(index: number){
        this.food.splice(index, 1);
    }

    addFoodpeaces(food: Food[]){
        this.food.push(...food);
    }

    updateFood(index:number, newFood: Food) {
        this.food[index] = newFood; 
        
    }

} 