import { BestOffer } from "./best-offer.model";
import { Subject } from "rxjs";

     export class BestOffersService {
      offersChanged = new Subject<BestOffer[]>()

        public bestOffers: BestOffer[] = [
          new BestOffer (
              "Leather Jacket!", "A very popular brand and all year popular", "get 50% discount on the second jacket", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo9eEpvflZrRABcJSE9CJ6scWVw0NfP6HC6qDrBC-TdGTIk5lS"
          )
        ]

        getBestOffers(){
            return this.bestOffers; 
        }

        addNewOffer(offer: BestOffer){
          this.bestOffers.push(offer);
          console.log(offer);
        }

     }