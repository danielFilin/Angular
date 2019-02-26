import { Component, OnInit, OnDestroy } from '@angular/core';
import { carAddsService } from './carAdds.service';
import { CarAdds } from '../shared/car-adds.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit, OnDestroy {
  adds: CarAdds[];
  private subscription: Subscription;

  constructor(private carAddsService: carAddsService) { }

  ngOnInit() {
    this.adds = this.carAddsService.getAdds();
    this.subscription = this.carAddsService.addsChanged
    .subscribe( 
      (adds: CarAdds[]) => {
        this.adds = adds;
      }
    )
  }

  onEditCar(index: number){
    this.carAddsService.editedCarIndex.next(index);
  }


ngOnDestroy(){
  this.subscription.unsubscribe();
}

}
