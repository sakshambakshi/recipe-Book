import { NgForm } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { Component, OnInit , EventEmitter , Output, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import { ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit , OnDestroy {
  // ing: Ingredient
  editMode =  false;
  subscription: Subscription;
  editedItemIndex: number ;
  editedItem: Ingredient;
@ViewChild('f') slForm: NgForm
  // addValue(name: string  , amount: number){
  //   this.ing.name = name ;
  //   this.ing.amount = amount ;
  //   console.log(this.ing)
  // }
// adding (name: string , amount: number){
//   console.log(name+" "+amount)
// }

  // @ViewChild('nameInput') nameInputRef: ElementRef
  // @ViewChild('amountInput') nameAmountRef: ElementRef

  // @Output() ingredientAdded = new EventEmitter<Ingredient>();

  // onAddItem( ){
  //   if(this.nameInputRef.nativeElement.value === '' || this.nameAmountRef.nativeElement.value ===''  ){
  //     alert("Don't Leave input Tag Blank")
  //   }
  //   else{
  //     const ingName = this.nameInputRef.nativeElement.value;
  //     const ingAmount = this.nameAmountRef.nativeElement.value;
      
  //     const newIngredient = new Ingredient(ingName , ingAmount);
  //     this.nameInputRef.nativeElement.value = '';
  //     this.nameAmountRef.nativeElement.value = '';
  //     console.log(ingName+" "+ingAmount);
  //     this.slService.addIngredient(newIngredient);
  //     console.log(ingName+" "+ingAmount);

  //   }
  // }
  
  onAddItem(form: NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name , value.amount);
    if(this.editMode){
      this.slService.updateIngredient(this.editedItemIndex , newIngredient)
      //to update the ingredient
    }
    else{
      this.slService.addIngredient(newIngredient);
    }
    this.editMode = false
    form.reset()
  }

  constructor(private slService:  ShoppingListService ) { }
  
  ngOnInit() {
    this.subscription =  this.slService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        console.log(this.editMode);
        this.editedItemIndex = index; 
        this.editedItem = this.slService.getIngredient(this.editedItemIndex)
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    );
  }
  onClear(){
    this.slForm.reset();
    this.editMode = false ;
  }

  onDelete(){
    this.slService.deleteIngredient(this.editedItemIndex)
    this.onClear();
  }


  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
}
