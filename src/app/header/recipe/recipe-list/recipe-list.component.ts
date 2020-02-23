import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'A test Recipe', 'https://thumbs.dreamstime.com/b/indian-rajasthani-thali-plate-tasty-north-jaipur-rajasthan-111728067.jpg'),
    new Recipe('Test Recipe', 'A test Recipe', 'https://thumbs.dreamstime.com/b/indian-rajasthani-thali-plate-tasty-north-jaipur-rajasthan-111728067.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
