import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('form', {static: false}) form : NgForm
  ingredient: Ingredient;
  editedItemIndex: number;
  editedItem: Ingredient;
  subscription: Subscription
  editMode = false;
  constructor(private sLService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.sLService.editingStarted
      .subscribe((index) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.sLService.getIngredient(index);
        this.form.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      });
  }
  addRecipe(form: NgForm) {
    const value = form.value;
    const ingredient = new Ingredient(value.name, value.amount)
    if(this.editMode) {
      this.sLService.updateIngredient(this.editedItemIndex, ingredient)
    } else {
      this.sLService.addIngredients(ingredient);
    }
    // console.log(this.ingredient);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
