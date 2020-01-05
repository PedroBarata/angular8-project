import { Component, OnInit } from "@angular/core";
import { Recipe } from "./recipe.model";
import { RecipeService } from "./recipe.service";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.scss"]
})
export class RecipesComponent implements OnInit {
  recipe: Recipe;
  constructor(private _recipeService: RecipeService) {}

  ngOnInit() {
    this._recipeService.selectedRecipe.subscribe(
      (recipe: Recipe) => (this.recipe = recipe)
    );
  }
}
