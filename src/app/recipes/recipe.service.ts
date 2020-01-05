import { Injectable, EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: "root"
})
export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();
  private recipes = [
    new Recipe(
      "New recipe",
      "Description of Recipe",
      "https://www.inspiredtaste.net/wp-content/uploads/2018/12/Sauteed-Zucchini-Recipe-1-1200.jpg",
      [new Ingredient("test ing", 1), new Ingredient("test 2", 5)]
    )
  ];
  constructor(private _shoppingListService: ShoppingListService) {}

  getRecipes() {
    //Apenas para retornar um novo array e não editar diretamente os recipes
    return this.recipes.slice();
  }

  addOnShoppingList(ingredients: Ingredient[]) {
     this._shoppingListService.addIngredients(ingredients);
  }
}
