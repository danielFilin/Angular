import { Component, OnInit } from '@angular/core';
import { Animal } from '../animals.model';
import { AnimalsService } from '../animals.service';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.css']
})
export class AnimalsListComponent implements OnInit {
 animals: Animal[];
  constructor(private animalsService: AnimalsService) { }

  ngOnInit() {
    this.animals = this.animalsService.getAnimals();
  }

}
