import { Component } from '@angular/core';
import { Carosel2Component } from '../../unit/carosel2/carosel2.component';
import { AccordianComponent } from '../../unit/accordian/accordian.component';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [Carosel2Component,AccordianComponent],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {

}
