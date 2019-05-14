import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dish } from './dish';
import { Cart } from './cart';

@Injectable()
export class DishService {
    // baseUrl = "api/dishes/dish.json";
    baseUrl="http://localhost:8087/";
    baseUrl2="http://localhost:8087/carts";


    constructor(private http: HttpClient) { }
    
    // findDishById(dishId: number): Observable<Dish> {
    //     return this.http.get<Dish>(this.baseUrl + "dish/" + dishId);
    // }


    findAllDishes():Observable<Dish[]>{
        return this.http.get<Dish[]>(this.baseUrl+"dish");

    }

    addIntoCart(cart:Cart){
        return this.http.post(this.baseUrl2,cart);
    }
    
} 