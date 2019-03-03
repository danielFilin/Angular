import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-new-products-item',
  templateUrl: './new-products-item.component.html',
  styleUrls: ['./new-products-item.component.css']
})
export class NewProductsItemComponent implements OnInit {

@Input() product: Product; 
@Input() index: number;
  id: number; 
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  
  }

  showDetails(){
   this.router.navigate([this.index], {relativeTo: this.route})
    
  }
   
      
    

}
