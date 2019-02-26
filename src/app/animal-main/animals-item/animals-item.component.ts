import { Component, OnInit, Input } from '@angular/core';
import { Animal } from '../animals.model';


@Component({
  selector: 'app-animals-item',
  templateUrl: './animals-item.component.html',
  styleUrls: ['./animals-item.component.css']
})
export class AnimalsItemComponent implements OnInit {
 @Input() singleAnimal : Animal;
 @Input() id: number;

  ngOnInit() {
  }



}
