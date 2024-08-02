import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { SingleComponent } from './pages/single/single.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"contactus",component:ContactusComponent},
    {path:"products",component:ProductsComponent},
    {path:"aboutus",component:AboutusComponent},
    {path:"products/:id",component:SingleComponent}
];
