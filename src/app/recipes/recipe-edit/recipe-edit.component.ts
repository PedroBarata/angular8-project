import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  public id: number;
  public recipe: Recipe;
  private editMode = false;
  constructor(private route: ActivatedRoute, private _recipeService: RecipeService) { }

  ngOnInit() {
    //Não precisamos dar unsubscribe nisso, pois o Angular já trata dessa questao!
    this.route.params.subscribe((params: Params) => {
      this.editMode = params['id'] !== null;

      if(this.editMode) {
        this.id = +params['id'];
        this.recipe = this._recipeService.getRecipe(this.id);
      } else {
        this.recipe = new Recipe(null, null, null, null, null);
      }
    });
  }

}
