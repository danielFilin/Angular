import { Component, OnInit } from '@angular/core';
import { Animal } from '../animals.model';
import { AnimalsService } from '../animals.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Response } from '@angular/http';




@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.css']
})
export class AnimalsListComponent implements OnInit {
 animals: Animal[];
private subscription: Subscription;

  constructor(private animalsService: AnimalsService, private route: ActivatedRoute, private router: Router, private dataStorageService: DataStorageService) { }

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

  sendToServer(){
    this.dataStorageService.storeRecipes('https://training-project-a5eab.firebaseio.com/Animals.json', this.animalsService.getAnimals())
    .subscribe(
      (response: Response) => {
        console.log(response);
      }
    )
  }

  fetchFromServer(){
    this.dataStorageService.fetchAnimals();
  }


}
