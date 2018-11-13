import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onCreateNewRecipe(){
    this.recipes.push(new Recipe('Testing', 'Another desc', 'https://images.media-allrecipes.com/userphotos/600x600/1060867.jpg', 
      [new Ingredient('Tilapia', 123)]));
  }
}
