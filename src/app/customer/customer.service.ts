import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../user';
import { Observable } from 'rxjs';
import { Orders } from './profile-order';

@Injectable()
export class CustomerService{

    baseUrl="http://localhost:8090/api/users";
    baseUrl2="http://localhost:8091";
    constructor(private http:HttpClient) { }
    
    findAddressByEmail(email:String): Observable<Users> {
        return this.http.get<Users>(this.baseUrl + "/" + "aks@gmail.com");
    }

    findOrderDetailsByEmail(email:String):Observable<Orders[]>{
        return this.http.get<Orders[]>(this.baseUrl2 + "/profile/aks@gmail.com");

    }
    

}