import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API = {
  ROOT: 'https://www.themealdb.com/api/json/v1/1/',
  get FILTER() {
    return this.ROOT + 'filter.php?c=';
  }
};

@Injectable({
  providedIn: 'root'
})
export class MealdbApiService {

  constructor(private http: HttpClient) { }

  findBuCategory(name: string): Observable<> {
    /*
     * Renvoie la concatenation du morceau de l'URL
     * https://www.themealdb.com/api/json/v1/1/ + filter.php?c=
    */
    return this.http.get(API.FILTER + name);
  }
}
