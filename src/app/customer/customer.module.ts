import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CustomerRoutes } from './customer.routes';
import { ProfileDetailsComponent } from './profile-details.component';
import { CustomerSettingComponent } from './customer-setting.component';
import { TrackOrderComponent } from './track-order.component';
import { CustomerService } from './customer.service';
import { FeedbackComponent } from './feedback.component';

@NgModule({

    declarations:[
        // CustomerLoginComponent,
        ProfileDetailsComponent,
        CustomerSettingComponent,
        TrackOrderComponent,
        FeedbackComponent
    ],
    exports:[
        // CustomerLoginComponent,
        ProfileDetailsComponent,
        CustomerSettingComponent,
        TrackOrderComponent,
        FeedbackComponent
        // CustomerSignUpComponent
    ],
    imports:[
        BrowserModule,
        RouterModule.forChild(CustomerRoutes),

    ],
    providers:[CustomerService]
})
export class CustomerModule{

}