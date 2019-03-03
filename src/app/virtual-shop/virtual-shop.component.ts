import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-virtual-shop',
  templateUrl: './virtual-shop.component.html',
  styleUrls: ['./virtual-shop.component.css']
})
export class VirtualShopComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  onNavigate(){
    this.router.navigate(['new-products-edit', 'edit'], {relativeTo: this.route})
  }

}
