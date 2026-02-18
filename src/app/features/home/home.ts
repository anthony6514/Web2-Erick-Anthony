import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from '../../share/hero/hero';
import { CarritoComponent } from '../../share/carrito/carrito.component';
import { ProductosMasVendidosComponent } from '../../share/productos-mas-vendidos/productos-mas-vendidos';


<<<<<<< HEAD
@Component({
  selector: 'app-home',
  standalone: true,

=======
import { SectionHeaderComponent } from '../../share/section-header';
import { FeatureItemComponent } from '../../share/feature-item';
import { StatusBadgeComponent } from '../../share/status-badge';

@Component({
  selector: 'app-home',
  standalone: true,
>>>>>>> f97593bb23978f6336a652ca057a0e40d5eb3b49
  imports: [
    CommonModule,
    HeroComponent,
    CarritoComponent,
<<<<<<< HEAD
    ProductosMasVendidosComponent
=======
    ProductosMasVendidosComponent,
    SectionHeaderComponent,
    FeatureItemComponent,
    StatusBadgeComponent
>>>>>>> f97593bb23978f6336a652ca057a0e40d5eb3b49
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
}