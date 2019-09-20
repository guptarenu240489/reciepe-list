import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Noodles', 'Topped with chilli sauce','https://upload.wikimedia.org/wikipedia/commons/4/46/Shaxian_noodles_%2820170119120759%29.jpg'),
    new Recipe('Spicy Noodles', 'Topped with chilli sauce','https://upload.wikimedia.org/wikipedia/commons/4/46/Shaxian_noodles_%2820170119120759%29.jpg')
  ]
  @Output() passRecipe = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }
  passSelectedRecipe($event) {
    this.passRecipe.emit($event);
  }

}
