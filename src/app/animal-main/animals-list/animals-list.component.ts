import { Component, OnInit } from '@angular/core';
import { Animal } from '../animals.model';
import { AnimalsService } from '../animals.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.css']
})
export class AnimalsListComponent implements OnInit {
 animals: Animal[];
private subscription: Subscription;

  constructor(private animalsService: AnimalsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.animalsService.animalsChanged
    .subscribe(
      (animals: Animal[]) => {
        this.animals = animals;
      }
    )
    this.animals = this.animalsService.getAnimals();
    
  }

  addAnimal(){
      this.router.navigate(['new'], {relativeTo: this.route});
      
  }


}
