import { OrderComponent } from './order.component';
import { Routes } from '@angular/router';
import { DishComponent } from './dish.component';
import { CartComponent } from './cart.component';
import { CheckoutComponent } from './checkout.component';
import { PaymentComponent } from './payment.component';

export const orderRoutes:Routes=[
    {path:"order",component:OrderComponent},
    {path:"order/menu",component:OrderComponent},
    {path:"order/dish",component:DishComponent},
    {path:"order/dish/:dishId",component:DishComponent},
    {path:"order/dish/cartdetails",component:DishComponent},
    {path:"checkout",component:CheckoutComponent},
    {path:"payment",component:PaymentComponent},
    {path:"address",component:CheckoutComponent}
    //{path:"restaurants",component:OrderComponent}







]
