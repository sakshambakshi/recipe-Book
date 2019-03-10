import { Ingredient } from '../shared/ingredient.model';
// import{ EventEmitter } from '@angular/core'
import { Subject } from 'rxjs';

export class ShoppingListService{
    // ingredientsChanged  = new EventEmitter<Ingredient []>();
    ingredientsChanged  = new Subject<Ingredient []>();
    startedEditing = new Subject<number>(); 
    private ingredients: Ingredient [] = [
        new Ingredient('Apples' , 5),
        new Ingredient('Tomatoes' , 10),
        new Ingredient('Milk' , 100),
        new Ingredient('Ginger' , 10),
      ];

      // delete(){
      //   this.ingredients.splice(0 , this.ingredients.length);
      //   console.log(this.ingredients)
      // }

      deleteIngredient(index: number){
        this.ingredients.splice(index , 1);
        this.ingredientsChanged.next(this.ingredients.slice());
      }

      getIngredients(){
          return this.ingredients;  
      }

      getIngredient(index: number){
        console.log(this.ingredients[index])
        return this.ingredients[index];
      }

      addIngredient(ingredient: Ingredient){
          this.ingredients.push(ingredient);
          this.ingredientsChanged.next(this.ingredients.slice())
          console.log("Pushed "+ingredient)
      }

      updateIngredient(index: number , newIngredient: Ingredient){
        console.log(index + " " + newIngredient);
        this.ingredients[index] = newIngredient; 
        this.ingredientsChanged.next(this.ingredients.slice())
      }

      addIngredients(ingredients: Ingredient[]){
        // for(let ingredient of ingredients){
        //     this.addIngredient(ingredient)
        // }
        this.ingredients.push(...ingredients)
        this.ingredientsChanged.next(this.ingredients.slice())
      }

   
}