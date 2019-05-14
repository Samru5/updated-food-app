

export class Orders{

    orderId:number;
    dish:string;
    price:number;
    quantity:number;
    total:number;
    status:string;
    // rating:number;
    email:string;
    imgUrl:string;
}

// export class Address{
//     addressLine:string;
//     city:string;
// }

// export class Users{
//     name:string;
//     gender:string;
//     password:string;
//     contact:number;
//     email:string;
//     address:Address;
//     date:Date;
// }

export class Feedback{
    rating:number;
    comments:string;
    email:string;
    orderId:number;

}