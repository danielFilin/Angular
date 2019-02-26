import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { carAddsService } from '../carAdds.service';
import { CarAdds } from 'src/app/shared/car-adds.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-car-adds',
  templateUrl: './car-adds.component.html',
  styleUrls: ['./car-adds.component.css']
})
export class CarAddsComponent implements OnInit, OnDestroy {
@ViewChild('f') carForm: NgForm;

editMode = false;
editedItemIndex: number;
subscription: Subscription;
editedItem: CarAdds;



  constructor(private carAddsSrvc: carAddsService) { }

  ngOnInit() {
    this.subscription = this.carAddsSrvc.editedCarIndex
    .subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.carAddsSrvc.getSingleAdd(index);
        this.carForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount, 
          picture: this.editedItem.picture
          
        }) 
      }
    )
  }



  onAddExtra(form: NgForm){
    
    const value = form.value;
    const newExtra = new CarAdds(value.name, value.amount, value.picture);
    if(this.editMode){
      this.carAddsSrvc.addUpdated(this.editedItemIndex, newExtra);
      this.editMode = false; 
      this.carForm.reset();
    } else (
      this.carAddsSrvc.addnewExtra(newExtra)
    )
   
  }

  onDelete(){
      this.carAddsSrvc.deleteItem(this.editedItemIndex);
  }

  onClear(){
    this.carForm.reset();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
