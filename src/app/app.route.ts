import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome.component';

export const appRoutes:Routes=[
    {path:"home" ,component:WelcomeComponent},
    {path:"",component:WelcomeComponent}
]
