import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  onIngredientsChanged = new EventEmitter<Ingredient[]>();
  private _ingredients: Ingredient[] =[
    new Ingredient('Tomatoes', 5),
    new Ingredient('Apples', 3),

  ]
  constructor() { }

  getIngredients() {
    return this._ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this._ingredients.push(ingredient);
    this.onIngredientsChanged.emit(this._ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[] ) {
    this._ingredients.push(...ingredients);
    this.onIngredientsChanged.emit(this._ingredients.slice());
  }
}
