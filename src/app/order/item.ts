import { Dish } from './dish';

export class Item{

    dish:Dish;
    quantity:number;

    constructor(dish:Dish,quantity:number){
        this .dish=dish;
        this.quantity=quantity;
    }
}