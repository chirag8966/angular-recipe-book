import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe [] = [
    new Recipe ('A test recipe' , 'This is simply a test' , 'https://pixnio.com/free-images/2017/05/23/2017-05-23-17-26-29-900x428.jpg'),
    new Recipe ('A test recipe' , 'This is simply a test' , 'https://pixnio.com/free-images/2017/05/23/2017-05-23-17-26-29-900x428.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}