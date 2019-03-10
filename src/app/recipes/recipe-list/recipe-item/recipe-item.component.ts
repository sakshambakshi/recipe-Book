import { Component, OnInit , Input, Output , EventEmitter} from '@angular/core';
import { Recipe } from '../../recipe.model'
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  // @Output() sendRecipe: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  // dataSend(x: Recipe){
  //   console.log(x);
  //   this.sendRecipe.emit(x);
  // }

  // @Output() recipeSelected = new EventEmitter<void>()

  // onSelected(){
  //   this.recipeSelected.emit()
  // }
  @Input() index: number ;

  constructor() { }

  ngOnInit() {
  }

}
