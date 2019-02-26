import { Component, OnInit } from '@angular/core';
import { AnimalsService } from 'src/app/animal-main/animals.service';
import { AnimalFood } from '../food-list/AnimalFood.service';
import { Food } from '../food-list/food.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-animal-input',
  templateUrl: './animal-input.component.html',
  styleUrls: ['./animal-input.component.css']
})
export class AnimalInputComponent implements OnInit {
id: number;
editedfood: Food;
editMode = false;
animalForm: FormGroup;


  constructor(private animalsService: AnimalsService, private foodService: AnimalFood,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.editMode = this.id != null; 
        this.initForm();
      }
    )
    }

    onSubmit(){
      if(this.editMode){
        this.animalsService.editAnimal(this.id, this.animalForm.value)
        console.log("edit")
      }else {
        this.animalsService.addAnimal(this.animalForm.value);
        console.log("else")
      }
      this.onCancel();
    }

    onAddFood(){
      (<FormArray>this.animalForm.get('food')).push(
        new FormGroup({
          'name': new FormControl(null, Validators.required),
          'amount': new FormControl(null, [Validators.required, Validators.pattern('^[1-9]+[0+9]*$')])
        })
      )
    }

    onCancel(){
      this.router.navigate(['../'], {relativeTo: this.route});
    }

    deleteItem(index: number){
      (<FormArray>this.animalForm.get('food')).removeAt(index);
    }

    private initForm() {
      let animalSpecie = "";
      let animalFamily = "";
      let animalSize = "";
      let animalPopulation: number;
      let animalPicture = "";
      let animalFood = new FormArray([]);

      if(this.editMode){
        const animal = this.animalsService.getAnimal(this.id);
        animalSpecie = animal.specie,
        animalFamily = animal.family,
        animalSize = animal.size,
        animalPopulation = animal.population,
        animalPicture = animal.picture

        if(animal['food']){
          for(let food of animal.food){
            animalFood.push(
              new FormGroup({
                'name': new FormControl(food.name, Validators.required),
                'amount': new FormControl(food.amount, [Validators.required, Validators.pattern('^[1-9]+[0+9]*$')])
              })
            )
          }
        }

      }

      this.animalForm = new FormGroup({
        'specie': new FormControl(animalSpecie, Validators.required),
        'family': new FormControl(animalFamily, Validators.required),
        'size': new FormControl(animalSize, Validators.required),
        'population': new FormControl(animalPopulation, [Validators.required, Validators.pattern('^[1-9]+[0+9]*$')]),
        'picture': new FormControl(animalPicture, Validators.required),
        'food': animalFood

      })

    }


     
  }



  




    // onAddAnimal(specie, family, size, population, picture, food){
    //   const newAnimal = new Animal(specie.value, family.value,size.value, population.value, picture.value, food );
    //   this.animalsService.addAnimal(newAnimal);
    // }

 


