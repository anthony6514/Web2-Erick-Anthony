import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from '../../share/hero/hero';
import { CarritoComponent } from '../../share/carrito/carrito.component';
import { ProductosMasVendidosComponent } from '../../share/productos-mas-vendidos/productos-mas-vendidos';


@Component({
  selector: 'app-home',
  standalone: true,

  imports: [
    CommonModule,
    HeroComponent,
    CarritoComponent,
    ProductosMasVendidosComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
}