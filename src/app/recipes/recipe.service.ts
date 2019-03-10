import { Subject } from 'rxjs';
import {Recipe} from './recipe.model'
import {Ingredient} from '../shared/ingredient.model'
import { Injectable } from '@angular/core';
import {ShoppingListService} from '../shopping-list/shopping-list.service'
@Injectable()

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>()
    private recipes: Recipe[] = [
        new Recipe('Combo pack ' , 'Get crispy Burger  and other items like snacks (French fries , cold Drink etc)' , 'https://i.kinja-img.com/gawker-media/image/upload/s--vHt6tbFa--/c_scale,f_auto,fl_progressive,q_80,w_800/xjmx1csashjww8j8jwyh.jpg' , [
          new Ingredient('Meat' ,1),
          new Ingredient('French Fies' ,1),
          new Ingredient('Coca-Cola' ,1)
        ] ),
        new Recipe('Pizza  ' , 'Get crispy Burger  and other items like snacks (French fries , cold Drink etc)' , 'https://www.cicis.com/media/1138/pizza_trad_pepperoni.png' , [
          new Ingredient('Cheese Cube' ,1),
          new Ingredient('Onions' ,1)
        ]  ),
        new Recipe('Steak ' , 'Get crispy Burger  and other items like snacks (French fries , cold Drink etc)' , 'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto,w_600,h_750,c_fit,fl_strip_profile/https://s3.amazonaws.com/pixtruder/original_images/e3ce4eb1741bd76cc083424453c0e3f39d147f9b', [
          new Ingredient('Meat' ,1)
        ] ),
        new Recipe('Sandwich' , 'Get crispy Burger  and other items like snacks (French fries , cold Drink etc)' , 'https://www.seriouseats.com/recipes/images/2016/06/20160623-cubano-roast-pork-sandwich-recipe-19-1500x1125.jpg' , [
          new Ingredient('Meat' ,1)
        ] ),
      ] ;
      constructor(private slService: ShoppingListService){}
      getRecipes(){
          return this.recipes.slice();
        //We are using splice because we wnat to send a copy but not the reference
      }
      addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice())
      }
    
      updateRecipe(index: number , newRecipe: Recipe){
          this.recipes[index] = newRecipe;
          this.recipesChanged.next(this.recipes.slice())
      }

      deleteRecipe(index: number){
        this.recipes.splice(index , 1 );
        this.recipesChanged.next(this.recipes.slice())
      }

      getRecipe(index: number){
        console.log("At recipe service => "+index);
        console.log(this.recipes.slice()[index])
        return this.recipes.slice()[index];

      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients)
      }

}