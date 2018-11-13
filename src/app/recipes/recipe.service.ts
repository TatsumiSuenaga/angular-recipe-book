import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopplng-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Test Recipe', 'Test description', 'https://images.media-allrecipes.com/userphotos/600x600/1060867.jpg', 
            [new Ingredient('Onion', 1), new Ingredient('Potato', 3)]),
        new Recipe('Test Recipe 2', 'Test description 2', 'https://images.media-allrecipes.com/userphotos/600x600/1060867.jpg', 
            [new Ingredient('Yolk', 100000000), new Ingredient('Lettuce', 999)]),
      ];

      constructor(private shoppingListService: ShoppingListService){}

      getRecipes() {
        return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
      }
}
