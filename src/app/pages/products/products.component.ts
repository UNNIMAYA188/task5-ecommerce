import { Component } from '@angular/core';
import { CardsComponent } from '../../unit/cards/cards.component';
import { ApiService } from '../../api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
constructor(private api:ApiService){}
products:any=""
ngOnInit()
{
  this.api.getProducts().subscribe((data:any)=>{this.products=data})
}

}
