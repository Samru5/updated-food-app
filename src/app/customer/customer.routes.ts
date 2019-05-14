import {  Routes } from '@angular/router';
import { Component } from '@angular/core';
// import { CustomerLoginComponent } from './customer-login.component';
//import { WelcomeComponent } from '../welcome.component';
import { ProfileDetailsComponent } from './profile-details.component';
import { CustomerSettingComponent } from './customer-setting.component';
import { TrackOrderComponent } from './track-order.component';
import { FeedbackComponent } from './feedback.component';
// import { CustomerSignUpComponent } from './customer-signup.component';

export const CustomerRoutes:Routes=[
    //{path:"login",component:CustomerLoginComponent},
    //{path:"home/login",component:CustomerLoginComponent},
    {path:"profile",component:ProfileDetailsComponent},
    {path:"home/profile",component:ProfileDetailsComponent},
    {path:"setting",component:CustomerSettingComponent},
    {path:"track",component:TrackOrderComponent},
    {path:"profile/feedback",component:FeedbackComponent}

   // {path:"logout",component:WelcomeComponent},
   // {path:"profile/logout",component:WelcomeComponent},
    //{path:"signup",component:CustomerSignUpComponent},
    // {path:"login/home",component:WelcomeComponent},
    // {path:"home/login",component:WelcomeComponent}


]