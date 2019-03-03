import { Component, OnInit, Input } from '@angular/core';
import { BestOffer } from '../best-offer.model';

@Component({
  selector: 'app-best-offers-single',
  templateUrl: './best-offers-single.component.html',
  styleUrls: ['./best-offers-single.component.css']
})
export class BestOffersSingleComponent implements OnInit {
@Input() newOffer: BestOffer;
@Input() index: number; 

  constructor() { }

  ngOnInit() {
    console.log(this.newOffer);
  }



}
