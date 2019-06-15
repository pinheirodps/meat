import {Restaurant} from './restaurant/restaurant.model'
import {Injectable} from '@angular/core';
import {Http} from '@angular/http'
import {MEAT_API} from '../../app.api';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map'
import "rxjs/add/operator/catch"
import {ErrorHandler} from "../app.error-handler"

@Injectable()
export class RestaurantsService {



  rests: Restaurant[]= [

    {
      id: "bread-bakery",
      name: "Bread & Bakery",
      category: "Bakery",
      deliveryEstimate: "25m",
      rating: 4.9,
      imagePath: "assets/img/restaurants/breadbakery.png",
    },
    {
      id: "burger-house",
      name: "Burger House",
      category: "Hamburgers",
      deliveryEstimate: "100m",
      rating: 3.5,
      imagePath: "assets/img/restaurants/burgerhouse.png",
    }

  ]

  constructor(private http: Http) {}

  restaurants(): Observable<Restaurant[]> {
    return this.http.get(`${MEAT_API}/restaurants`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }

  restaurantById(id: string): Observable<Restaurant>{
    return this.http.get(`${MEAT_API}/restaurants/${id}`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }
}
