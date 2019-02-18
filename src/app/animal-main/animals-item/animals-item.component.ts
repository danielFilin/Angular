import { Component, OnInit, Input } from '@angular/core';
import { Animal } from '../animals.model';
import { AnimalsService } from '../animals.service';

@Component({
  selector: 'app-animals-item',
  templateUrl: './animals-item.component.html',
  styleUrls: ['./animals-item.component.css']
})
export class AnimalsItemComponent implements OnInit {
 @Input() singleAnimal : Animal;
  constructor(private animalsService: AnimalsService) { }

  ngOnInit() {
  }

  onSelect(){
    this.animalsService.selectedAnimal.emit(this.singleAnimal);
  }

}
