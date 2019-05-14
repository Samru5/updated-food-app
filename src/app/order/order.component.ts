import { Component } from '@angular/core';
import { Restaurant } from './restaurant';
import { RestaurantService } from './restaurant.service';
import { ActivatedRoute } from '@angular/router';

@Component({
templateUrl:"./order.component.html",
styleUrls:["./order.component.css"]
})
export class OrderComponent{
    
    restaurants: Restaurant[];
    constructor(
        private restaurantService: RestaurantService,
        private route: ActivatedRoute) { }




    ngOnInit() {

    }

 
    getData() {
        this.restaurantService.findAllRestaurants().subscribe((data) => {
            this.restaurants=data;
            console.log(data);
           
        })
    }
   
    
}
