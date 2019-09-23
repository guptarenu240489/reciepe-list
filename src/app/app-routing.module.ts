import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';


const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children: [
    { path: 'new', component: RecipeEditComponent },
    { path: ':id', component: RecipeDetailsComponent },
    { path: ':id/edit', component: RecipeEditComponent }
  ]},
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: '**', component: RecipesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
