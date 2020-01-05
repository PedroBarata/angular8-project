import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  name: string;
  description: string;
  imagePath: string;
  ingredients: Ingredient[];

  constructor(name: string, description: string, imgPath: string, ingredients: Ingredient[]) {
    this.name = name;
    this.description = description;
    this.imagePath = imgPath;
    this.ingredients = ingredients;
  }
}
