import { Component, OnInit, Input, Output } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  // Recipe = [];
  @Output() selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
