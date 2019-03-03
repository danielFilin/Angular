import { Component} from '@angular/core';

import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';
import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
 
  constructor(private dataStorageService: DataStorageService){}

  onSaveData(){
    this.dataStorageService.storeRecipes()
    .subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

  onGetData(){
    this.dataStorageService.getRecipes()
    
  }


 

}
