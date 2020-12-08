import { MealdbApiService } from './../service/mealdb-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.page.html',
  styleUrls: ['./meal.page.scss'],
})
export class MealPage implements OnInit {

  constructor(private route: ActivatedRoute, private mealdb: MealdbApiService) { }

  ngOnInit() {
    // tslint:disable-next-line: radix
    let mealId: string = this.route.snapshot.paramMap.get('id');
    this.mealdb.findById(mealId)
      .subscribe(meal => console.log(meal));
  }

}
