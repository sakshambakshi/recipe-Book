import { Component, OnInit , EventEmitter , Output } from '@angular/core';
import {Recipe} from '../recipe.model'
import { RecipeService } from '../recipe.service'
import { ActivatedRoute, Router } from '@angular/router';
// import { EventEmitter } from 'events';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] 
  //   new Recipe('Combo pack ' , 'Get crispy Burger  and other items like snacks (French fries , cold Drink etc)' , 'https://i.kinja-img.com/gawker-media/image/upload/s--vHt6tbFa--/c_scale,f_auto,fl_progressive,q_80,w_800/xjmx1csashjww8j8jwyh.jpg'),
  //   new Recipe('Pizza  ' , 'Get crispy Burger  and other items like snacks (French fries , cold Drink etc)' , 'https://www.cicis.com/media/1138/pizza_trad_pepperoni.png'),
  //   new Recipe('Steak ' , 'Get crispy Burger  and other items like snacks (French fries , cold Drink etc)' , 'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto,w_600,h_750,c_fit,fl_strip_profile/https://s3.amazonaws.com/pixtruder/original_images/e3ce4eb1741bd76cc083424453c0e3f39d147f9b'),
  //   new Recipe('Sandwich' , 'Get crispy Burger  and other items like snacks (French fries , cold Drink etc)' , 'https://www.seriouseats.com/recipes/images/2016/06/20160623-cubano-roast-pork-sandwich-recipe-19-1500x1125.jpg'),
  // ] ;
  
  constructor(private recipeService: RecipeService , private router: Router ,  private route: ActivatedRoute) { }
  ngOnInit(){
    this.recipeService.recipesChanged.subscribe((recipes: Recipe[] )=>{
      this.recipes = recipes ;
    })

    this.recipes = this.recipeService.getRecipes();
    console.log( this.recipeService.getRecipes());

    
  }
  onNew(){
    this.router.navigate(['new'], {relativeTo: this.route})
  }
  onRecipeSelected(recipe: Recipe ){
    this.recipeWasSelected.emit(recipe)
  }
  

  

}
