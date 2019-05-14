import { Component } from '@angular/core';
import { DishService } from './dish.service';
import { ActivatedRoute } from '@angular/router';
import { Dish } from './dish';

@Component({
    templateUrl:"./checkout.component.html"  
})
export class CheckoutComponent{
    dishes:Dish[];

    constructor(private dishService: DishService,
        private route: ActivatedRoute) { }

      
 



        ngOnInit(): void {
  
           

            this.dishService.findAllDishes().subscribe(data=>{
                console.log(data);
                this.dishes=data;

            },err=>{
                console.log(err);
            })
        
   
   
   }
}