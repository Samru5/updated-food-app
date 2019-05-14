import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from '../cart';

@Injectable()
export class CartService{

    baseUrl = "http://localhost:8087/";

    constructor(private http: HttpClient) { }

    findCartByEmail(email: string): Observable<Cart> {
        return this.http.get<Cart>(this.baseUrl + "carts/" + email);
    }

    updateCart(cart: Cart): Observable<Cart> {
        return this.http.post<Cart>(this.baseUrl + "carts", cart);
    }

}