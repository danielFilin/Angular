import { Component, OnInit } from '@angular/core';
import { Animal } from '../animals.model';
import { AnimalsService } from '../animals.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-animals-detail',
  templateUrl: './animals-detail.component.html',
  styleUrls: ['./animals-detail.component.css']
})
export class AnimalsDetailComponent implements OnInit {
animal: Animal;
id: number;
  constructor(private animalsService: AnimalsService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
      this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.animal = this.animalsService.getAnimal(this.id);
          
        }
      )
  }

  toFoodList(){
    this.animalsService.addFoodToList(this.animal.food);
  }

  toEditMode(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDelete(index: number){
    this.animalsService.deleteAnimal(index);
    this.router.navigate(['../'], {relativeTo: this.route});
  }
  

}
