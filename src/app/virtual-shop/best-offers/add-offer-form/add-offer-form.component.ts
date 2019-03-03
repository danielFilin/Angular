import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BestOffersService } from '../bestOffers.service';

@Component({
  selector: 'app-add-offer-form',
  templateUrl: './add-offer-form.component.html',
  styleUrls: ['./add-offer-form.component.css']
})
export class AddOfferFormComponent implements OnInit {
  newOfferForm: FormGroup;
  constructor(private bestOffersService: BestOffersService) { }

  ngOnInit() {
    this.newOfferForm = new FormGroup({
       'name': new FormControl('Couch', Validators.required),
       'description': new FormControl("High quality and very good looking", Validators.required),
       'conditions': new FormControl('', Validators.required),
       'image': new FormControl('Insert image here', Validators.required)
  })
}

  onSubmit(){
    this.bestOffersService.addNewOffer(this.newOfferForm.value)
  }

}
