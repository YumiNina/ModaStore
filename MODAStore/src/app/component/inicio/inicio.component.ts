import { Component } from '@angular/core';
import { NavBar1Component } from '../nav-bar1/nav-bar1.component';
import {FooterComponent} from '../footer/footer.component';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})



export class InicioComponent {
  title = 'MODAStore';
}
