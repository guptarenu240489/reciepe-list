import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private rgChangeSub: Subscription;
  constructor(private shopingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shopingListService.getIngredients();
    this.rgChangeSub = this.shopingListService.ingredientsChanges
      .subscribe(ig => {
        this.ingredients = ig;
      });
  }
  ngOnDestroy() {
    this.rgChangeSub.unsubscribe();
  }

}
