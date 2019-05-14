import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class RestaurantService {
    // baseUrl = "api/dishes/dish.json";
      baseUrl="http://localhost:8087"
    //baseUrl="http://10.246.93.58:8087";
    // headers = new HttpHeaders({'Access-Control-Allow-Origin' : '*'})

    constructor(private http: HttpClient) { }
    
    findAllRestaurants():Observable<Restaurant[]> {
        return this.http.get<Restaurant[]>(this.baseUrl+"/order");
    }
}