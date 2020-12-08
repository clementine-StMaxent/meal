import { MealdbApiService } from './../service/mealdb-api.service';
import { Component } from '@angular/core';
import { MEALDB_ListItem } from '../model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  meals: MEALDB_ListItem[] | null = null ;
  constructor(private mealdb: MealdbApiService) {
    this.mealdb.findByCategory('SeaFood')
    .subscribe(meals => this.meals = meals);
  }

}
