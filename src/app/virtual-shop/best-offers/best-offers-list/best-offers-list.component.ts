import { Component, OnInit } from '@angular/core';
import { BestOffer } from '../best-offer.model';
import { BestOffersService } from '../bestOffers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-best-offers-list',
  templateUrl: './best-offers-list.component.html',
  styleUrls: ['./best-offers-list.component.css']
})
export class BestOffersListComponent implements OnInit {

bestOffers: BestOffer[];

  constructor(private bestOffersService: BestOffersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.bestOffers = this.bestOffersService.getBestOffers();
    //console.log(this.bestOffers)
    this.bestOffersService.offersChanged
    .subscribe()
  }

  addNew(){
    this.router.navigate(['add-offer-form'], {relativeTo: this.route})
  }

}
