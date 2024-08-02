import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactusComponent } from '../pages/contactus/contactus.component';
import { ProductsComponent } from '../pages/products/products.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,ContactusComponent,ProductsComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
