import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  id: number;
  name: string;
  description: string;
  imagePath: string;
  ingredients: Ingredient[];

  constructor(id: number, name: string, description: string, imgPath: string, ingredients: Ingredient[]) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.imagePath = imgPath;
    this.ingredients = ingredients;
  }
}
