import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { carAddsService } from '../carAdds.service';
import { CarAdds } from 'src/app/shared/car-adds.model';

@Component({
  selector: 'app-car-adds',
  templateUrl: './car-adds.component.html',
  styleUrls: ['./car-adds.component.css']
})
export class CarAddsComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @ViewChild('pictureInput') pictureInputRef: ElementRef;

  constructor(private carAddsSrvc: carAddsService) { }

  ngOnInit() {
  }

  onAddExtra(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const ingPicture = this.pictureInputRef.nativeElement.value;
    const newExtra = new CarAdds(ingName, ingAmount, ingPicture);
    this.carAddsSrvc.addnewExtra(newExtra);
  }


}
