import { Recipe } from './recipe.model';
import { Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    @Output() recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Noodles',
            'Topped with chilli sauce',
            'https://upload.wikimedia.org/wikipedia/commons/4/46/Shaxian_noodles_%2820170119120759%29.jpg',
            [new Ingredient('Cabbage', 5), new Ingredient('Capsicum', 10)]),
        new Recipe(
            'Spicy Noodles',
            'Topped with chilli sauce',
            'https://upload.wikimedia.org/wikipedia/commons/4/46/Shaxian_noodles_%2820170119120759%29.jpg',
            [new Ingredient('Chili', 5), new Ingredient('Brocolli', 10)])
    ]

    getRecipe() {
        return [...this.recipes];
    }
    getSelectedRecipe(index: number) {
        return this.recipes[index];
    }
}