import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { CarService } from 'src/app/cars-list/cars.service';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {
  id: number;
  editMode = false;
  carForm: FormGroup;

  constructor(private route: ActivatedRoute, private carService: CarService, private router: Router) { }

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
      this.carService.carEdit(this.id, this.carForm.value);
      console.log("edit mode")
    }else {
      this.carService.addCar(this.carForm.value);
    }
    this.onCancel();
  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }
  
  onDelete(index: number){
    (<FormArray>this.carForm.get('adds')).removeAt(index);
  }


  onAddExtra(){
      (<FormArray>this.carForm.get('adds')).push(
        new FormGroup({
          'name': new FormControl(null, Validators.required),
          'amount': new FormControl(null, [Validators.required, Validators.pattern('^[1-9]+[0+9]*$')]),
          'picture': new FormControl(null, Validators.required)
        })
      )

  }


  private initForm(){
    let carBrand = '';
    let carHP: number;
    let carPrice: number; 
    let carPicture = "";
    let carAdds = new FormArray([]);



    if(this.editMode){
     
      const car = this.carService.getCar(this.id);
      carBrand = car.brand,
      carHP = car.hp,
      carPrice = car.price,
      carPicture = car.picture
      
      if(car['adds']) {
        
        for (let add of car.adds) {
          carAdds.push(
            new FormGroup({
              'name': new FormControl(add.name, Validators.required),
              'amount': new FormControl(add.amount, [Validators.required, Validators.pattern('^[1-9]+[0+9]*$')]),
              'picture': new FormControl(add.picture, Validators.required)
            })
          )
        }
      }
    }
 
    this.carForm = new FormGroup({
      'brand': new FormControl(carBrand, Validators.required),
      'hp': new FormControl(carHP, [Validators.required,
      Validators.pattern('^[1-9]+[0+9]*$')]),
      'price': new FormControl(carPrice, [Validators.required, Validators.pattern('^[1-9]+[0+9]*$')]),
      'picture': new FormControl(carPicture, Validators.required),
      'adds': carAdds
    })
  }

}
