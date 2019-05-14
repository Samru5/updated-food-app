import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DeliveryboyLoginComponent } from './deliveryboy-login.component';
import { DeliveryboyRegistrationComponent } from './deliveryboy-registration.component';
import { RouterModule } from '@angular/router';
import { deliveryboyRoutes } from './deliveryboy.routes';
import { DeliveryboyOrderComponent } from './deliveryboy-order.component';
@NgModule({
    declarations:[DeliveryboyLoginComponent, DeliveryboyRegistrationComponent,DeliveryboyOrderComponent],
    imports:[BrowserModule,RouterModule.forChild( deliveryboyRoutes)],
    exports:[DeliveryboyLoginComponent,DeliveryboyRegistrationComponent,RouterModule,DeliveryboyOrderComponent]
})
export class DeliveryboyModule {

}