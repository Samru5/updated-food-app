import { Component, OnInit } from '@angular/core';
import { Cart } from './cart';
import { Router } from '@angular/router';
import { CartService } from './cart/cart.service';

@Component({
    templateUrl:"./cart.component.html"  
})
export class CartComponent implements OnInit{
    cart: Cart;

    constructor(private cartService: CartService, private router: Router) { }

    ngOnInit() {
        // If cart is not in sessionStorage, we will fetch it from database.
        if(sessionStorage.getItem("mycart") == null) {
            if(sessionStorage.getItem("customer") == null) {
                alert("Please login...");
                this.router.navigate(["/customer/login"]);
            }
            else {
                let customer = JSON.parse(sessionStorage.getItem("customer"));
                console.log(customer);
                this.cartService.findCartByEmail(customer.email).subscribe((data) => {
                    console.log(data);
                    this.cart = data;
                    sessionStorage.setItem("mycart", JSON.stringify(data));
                })
            }              
        }
        else {
            this.cart = JSON.parse(sessionStorage.getItem("mycart"));
        }
    }

}