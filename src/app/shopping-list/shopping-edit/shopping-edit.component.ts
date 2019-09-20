import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: false}) name: ElementRef;
  @ViewChild('amountInput', {static: false}) amount: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  ingredient: Ingredient;
  constructor() { }

  ngOnInit() {
  }
  addRecipe() {
    this.ingredientAdded.emit(new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value));
    // console.log(this.ingredient);
  }
}
