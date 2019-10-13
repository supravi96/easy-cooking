import { EventEmitter, Injectable } from "@angular/core";

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

import { ShoppinglistService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe(
            'French toast',
            'tastiest breakfast ever ',
            'https://upload.wikimedia.org/wikipedia/commons/e/ed/French-toast.jpg',
            [
                new Ingredient('Eggs', 2),
                new Ingredient('Milk', 1),
                new Ingredient('mapel syrup', 1)
            ]),
        new Recipe(
            'French fries',
            'Heart of junk',
            'https://upload.wikimedia.org/wikipedia/commons/d/d2/French_fries_14122012.jpg',
            [
                new Ingredient('Potato', 10),
                new Ingredient('Salt', 1),
                new Ingredient('Oil', 1)
            ])
    ];

    recipeSelected = new EventEmitter<Recipe>();

    constructor(private shoppinglistService: ShoppinglistService) {
    }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppinglistService.addIngredients(ingredients);
    }
}