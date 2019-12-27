import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] =[
    new Ingredient('Tomatoes', 5),
    new Ingredient('Apples', 3),

  ]
  constructor() { }

  ngOnInit() {
  }

  ingredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}
