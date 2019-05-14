
export class Address{
    addressLine1:string;
    state:string;
    city:string;
    postalCode:number;
}
export class Customer{
    name:string;
    gender:string;
    password:string;
    contact:number;
    email:string;
    address:Address;
}