// import { Component, OnInit ,Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService }  from '../recipe.service';
import {Ingredient} from '../../shared/ingredient.model';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
// @Input() recipe: Recipe;
 recipe: Recipe;
 id: number ; 
  constructor( private recipeService: RecipeService ,
               private route: ActivatedRoute ,
               private router: Router ) { 

   }
   onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id)
    this.router.navigate(['../'],{relativeTo: this.route})
  }


  ngOnInit() {
    // const id = this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (params: Params) =>{
        this.id = +params['id'];
        console.log(this.id);
        console.log(this.recipeService.getRecipe(this.id));
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    );
  }
  onEditRecipe(){
    this.router.navigate(['edit'] , {relativeTo: this.route} )
    console.log('onEditRecipe()')
  }


  onAddShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)
  }

}
