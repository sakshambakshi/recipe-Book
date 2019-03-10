import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient [] 
  private subscription: Subscription
  // onIngredientAdded(ingredient: Ingredient){
    
  //   this.ingredients.push(ingredient)
  //   // console.log(y+"" +this.ingredients)
  // }
  

  constructor( private slService: ShoppingListService ) {

   }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    console.log(this.ingredients);
    this.subscription =  this.slService.ingredientsChanged
                  .subscribe(
                    (ingredients: Ingredient[]) =>{
                      this.ingredients = ingredients
                    }
                  );
  }

  onEditItem(index: number){
    this.slService.startedEditing.next(index)

  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
