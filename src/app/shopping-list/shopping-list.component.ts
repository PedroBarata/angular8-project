import { Component, OnInit, OnDestroy } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";
import { Subscription } from 'rxjs';

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.scss"]
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private ingSubscription: Subscription;
  constructor(private _shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this._shoppingListService.getIngredients();
    this._shoppingListService.onIngredientsChanged.subscribe(
      (ings: Ingredient[]) => (this.ingredients = ings)
    );
  }

  ngOnDestroy() {
    this.ingSubscription.unsubscribe();
  }
}
