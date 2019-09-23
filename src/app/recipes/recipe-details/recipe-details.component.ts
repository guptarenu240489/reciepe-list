import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { ActivatedRoute, Data, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(
    private sLService: ShoppingListService,
    private route:ActivatedRoute,
    private recipeService: RecipeService) { }

  ngOnInit() {
    // this.route.data.subscribe((data: Data) => {
    //   this.recipe = data['recipe'];
    // })
    // this.recipe = this.recipeService.getSelectedRecipe(+this.route.params['id']);
    this.route.params.subscribe((param: Params) => {
      this.id = param['id'];
      this.recipe = this.recipeService.getSelectedRecipe(this.id);

    })
  }

  addIngredients(ingList: Ingredient[]) {
    ingList.map(ing => {
      this.sLService.addIngredients(ing);
    })
  }

}
