import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    ingredientsChanges = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 10),
        new Ingredient('Cheese', 5)
    ];

    getIngredients() {
        return [...this.ingredients];
    }
    addIngredients(ing: Ingredient) {
        this.ingredients.push(ing);
        this.ingredientsChanges.emit([...this.ingredients]);
    }

}