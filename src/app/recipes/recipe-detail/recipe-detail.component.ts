import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  public recipe: Recipe;
  public id: number;
  constructor(private _recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
      //Não precisamos dar unsubscribe nisso, pois o Angular já trata dessa questao!
      this.route.params.subscribe((params: Params) => {
        this.id = +params['id'];
        this.recipe = this._recipeService.getRecipe(this.id);
      })
  }

  onPutShoppingList() {
    this._recipeService.addOnShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    //this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route}); Apenas uma forma mais complexa de fazer o mesmo
  }

}
