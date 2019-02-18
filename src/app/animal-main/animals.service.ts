import { Animal } from "./animals.model";
import { EventEmitter } from "@angular/core";


export class AnimalsService {
    selectedAnimal = new EventEmitter<Animal>();

    private animals: Animal[] = [
       new Animal ("Cow", "Cattle", "Big Animal", 12000000000, "https://i.ytimg.com/vi/uuSfrFigcAU/maxresdefault.jpg" ),
       new Animal ("Dog", "House-animal","from very small to average", 100000000000, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbbzJBnrh07mumwfeWsuQdYF9bb0JT0tReANcx0TOMoolCXvGN" )
    ] 


    getAnimals(){
        return this.animals.slice();
    }

    addAnimal(newAnimal: Animal){
        this.animals.push(newAnimal);
    }

}