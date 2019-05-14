import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.route';
import { WelcomeComponent } from './welcome.component';
import { OrderModule } from './order/order.module';
import { CustomerModule } from './customer/customer.module';
import { DeliveryboyModule } from './deliveryboy/deliveryboy.module';
import { WelcomeService } from './welcome.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
  ],

  imports: [
    BrowserModule,
    OrderModule,
    CustomerModule,
    FormsModule,
    DeliveryboyModule,
    RouterModule.forRoot(appRoutes)

  ],

  providers: [WelcomeService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
