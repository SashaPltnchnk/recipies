import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('test recipy',
      'this is simply a test',
      'https://media.voltron.voanews.com/Drupal/01live-166/styles/sourced/s3/2019-04/CF6AC768-3D66-4311-AF16-38BE8A4A7528.jpg?itok=7oLp0Gt-'),
    ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
