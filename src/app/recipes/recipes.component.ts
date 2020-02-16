import { Component, OnInit, OnDestroy } from "@angular/core";
import { Recipe } from "./recipe.model";
import { RecipeService } from "./recipe.service";
import { Subscription } from 'rxjs';

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.scss"]
})
export class RecipesComponent implements OnInit, OnDestroy {
  recipe: Recipe;
  private recipeSubscription: Subscription
  constructor(private _recipeService: RecipeService) { }

  ngOnInit() {
    //Precisamos limpar o subscription pois este não é manuseado pelo Angular
    this.recipeSubscription = this._recipeService.selectedRecipe.subscribe(
      (recipe: Recipe) => (this.recipe = recipe)
    );
  }

  ngOnDestroy() {
    this.recipeSubscription.unsubscribe();
  }
}
