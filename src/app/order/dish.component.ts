import { Component, OnInit } from '@angular/core';
import { Dish } from './dish';
import { DishService } from './dish.service';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from './restaurant.service';
import { Restaurant } from './restaurant';
import { Item } from './item';

@Component({
    templateUrl: "./dish.component.html"
})
export class DishComponent implements OnInit {

    dishes: Dish[];
   

    constructor(private dishService: DishService,
        private route: ActivatedRoute) { }




    ngOnInit() {

        // this.route.paramMap.subscribe((map) => {
        //     let category = map.get("category");
        //     console.log(category);
 
            this.dishService.findAllDishes().subscribe((data) => {
                this.dishes = data;
                console.log(data);
            })
 
        // })
 

    }

//  addDish(){
//     console.log(this.dishes);
//         this.dishService.addIntoCart(this).subscribe((data)=>{
//             console.log("success");
//             if(data!=null){
//                 alert("Registration is successful!");
//             }
//         })
    
//     }
}

