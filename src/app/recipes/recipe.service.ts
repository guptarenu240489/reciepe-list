import { Recipe } from './recipe.model';
import { Output, EventEmitter } from '@angular/core';

export class RecipeService {
    @Output() recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Noodles', 'Topped with chilli sauce','https://upload.wikimedia.org/wikipedia/commons/4/46/Shaxian_noodles_%2820170119120759%29.jpg'),
        new Recipe('Spicy Noodles', 'Topped with chilli sauce','https://upload.wikimedia.org/wikipedia/commons/4/46/Shaxian_noodles_%2820170119120759%29.jpg')
    ]

    getRecipe() {
        return [...this.recipes];
    }
}