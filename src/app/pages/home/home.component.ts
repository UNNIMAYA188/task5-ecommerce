import { Component } from '@angular/core';
import { CarosalComponent } from '../../unit/carosal/carosal.component';
import { Carosel2Component } from '../../unit/carosel2/carosel2.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarosalComponent,Carosel2Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
