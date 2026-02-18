import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from '../../share/hero/hero';
import { CarritoComponent } from '../../share/carrito/carrito.component';
import { ProductosMasVendidosComponent } from '../../share/productos-mas-vendidos/productos-mas-vendidos';


import { SectionHeaderComponent } from '../../share/section-header';
import { FeatureItemComponent } from '../../share/feature-item';
import { StatusBadgeComponent } from '../../share/status-badge';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    CarritoComponent,
    ProductosMasVendidosComponent,
    SectionHeaderComponent,
    FeatureItemComponent,
    StatusBadgeComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
}