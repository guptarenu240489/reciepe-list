import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: false}) name: ElementRef;
  @ViewChild('amountInput', {static: false}) amount: ElementRef;
  ingredient: Ingredient;
  constructor(private sLService: ShoppingListService) { }

  ngOnInit() {
  }
  addRecipe() {
    this.sLService.addIngredients(new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value));
    // console.log(this.ingredient);
  }
}
