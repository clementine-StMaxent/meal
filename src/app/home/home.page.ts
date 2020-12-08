import { MealdbApiService } from './../service/mealdb-api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private mealdb: MealdbApiService) {
    this.mealdb.findBuCategory("SeaFood").subscribe(res => console.log(res));
  }

}
