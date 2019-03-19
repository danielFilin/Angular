import { Component} from '@angular/core';

import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
 
  constructor(private dataStorageService: DataStorageService, private recipeService: RecipeService, private authService: AuthService){}

  onSaveData(){
    const token = this.authService.getToken();
    this.dataStorageService.storeRecipes('https://training-project-a5eab.firebaseio.com/recipes.json?auth='+token, this.recipeService.getRecipes() )
    .subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

  onGetData(){
    this.dataStorageService.getRecipes()
  }
  
  onLogout(){
    this.authService.logout();
  }

}
