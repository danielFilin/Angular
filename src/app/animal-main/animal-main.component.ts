import { Component, OnInit } from '@angular/core';
import { AnimalsService } from './animals.service';
import { Animal } from './animals.model';

@Component({
  selector: 'app-animal-main',
  templateUrl: './animal-main.component.html',
  styleUrls: ['./animal-main.component.css']
})
export class AnimalMainComponent implements OnInit {
selectedAnimal: Animal;

  constructor(private animalsService: AnimalsService) { }

  ngOnInit() {
    this.animalsService.selectedAnimal
    .subscribe(
      (animal: Animal) => {
        this.selectedAnimal = animal; 
      }
    )

  }

}
