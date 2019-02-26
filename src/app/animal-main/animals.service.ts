import { Animal } from "./animals.model";
import { Injectable } from "@angular/core";
import { Food } from "../animal-edit/food-list/food.model";
import { AnimalFood } from "../animal-edit/food-list/AnimalFood.service";
import { Subject } from "rxjs/Subject";

@Injectable()

export class AnimalsService {
    selectedAnimal = new Subject<Animal>();
    animalsChanged = new Subject<Animal[]>();


    private animals: Animal[] = [
       new Animal ("Cow", "Cattle", "Big Animal", 12000000000, "https://i.ytimg.com/vi/uuSfrFigcAU/maxresdefault.jpg",
       [
        new Food("straw", 200),
        new Food ("Hay", 300)
       ]),
       new Animal ("Dog", "House-animal","from very small to average", 100000000000, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbbzJBnrh07mumwfeWsuQdYF9bb0JT0tReANcx0TOMoolCXvGN",
       [
           new Food ("bones", 50),
           new Food ("pig ears", 35)
       ])
    ];

      constructor(private animalFood: AnimalFood) {}

    getAnimals(){
        return this.animals.slice();
    }

    getAnimal(index: number){
        return this.animals[index]
    }

    addAnimal(newAnimal: Animal){
        this.animals.push(newAnimal);
    }

    editAnimal(index: number, newAnimal: Animal){
        console.log("inside Service")
        this.animals[index] = newAnimal;
        this.animalsChanged.next(this.animals);
    }

    addFoodToList(food: Food[]){
        this.animalFood.addFoodpeaces(food);
        this.animalsChanged.next(this.animals);
    }

    deleteAnimal(index: number){
        this.animals.splice(index,1);
        this.animalsChanged.next(this.animals);
    }



}