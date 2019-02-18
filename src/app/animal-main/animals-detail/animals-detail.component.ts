import { Component, OnInit, Input } from '@angular/core';
import { Animal } from '../animals.model';

@Component({
  selector: 'app-animals-detail',
  templateUrl: './animals-detail.component.html',
  styleUrls: ['./animals-detail.component.css']
})
export class AnimalsDetailComponent implements OnInit {
@Input() animal: Animal;
  constructor() { }

  ngOnInit() {
  }

}
