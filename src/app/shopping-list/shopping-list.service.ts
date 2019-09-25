import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingListService {
    ingredientsChanges = new Subject<Ingredient[]>();
    editingStarted = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 10),
        new Ingredient('Cheese', 5)
    ];

    getIngredients() {
        return [...this.ingredients];
    }
    addIngredients(ing: Ingredient) {
        this.ingredients.push(ing);
        this.ingredientsChanges.next([...this.ingredients]);
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }
    updateIngredient(index: number, newIng: Ingredient) {
        this.ingredients[index] = newIng;
        this.ingredientsChanges.next(this.ingredients.slice());
    }
}