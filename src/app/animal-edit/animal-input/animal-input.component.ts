import { Component, OnInit } from '@angular/core';
import { AnimalsService } from 'src/app/animal-main/animals.service';
import { Animal } from 'src/app/animal-main/animals.model';

@Component({
  selector: 'app-animal-input',
  templateUrl: './animal-input.component.html',
  styleUrls: ['./animal-input.component.css']
})
export class AnimalInputComponent implements OnInit {


  constructor(private animalsService: AnimalsService) { }

  ngOnInit() {
  }

    onAddAnimal(specie, family, size, population, picture){
      const newAnimal = new Animal(specie.value, family.value,size.value, population.value, picture.value );
      this.animalsService.addAnimal(newAnimal);
    }

}
