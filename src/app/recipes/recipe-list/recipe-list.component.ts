import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Test description', 'https://images.media-allrecipes.com/userphotos/600x600/1060867.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onCreateNewRecipe(){
    this.recipes.push(new Recipe('Testing', 'Another desc', 'https://images.media-allrecipes.com/userphotos/600x600/1060867.jpg'));
  }

  onSelectedRecipeDetail(selectedRecipe: Recipe) {
    this.selectedRecipe.emit(selectedRecipe);
  }

}
