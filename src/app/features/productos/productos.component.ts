import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, MOCK_API_PRODUCTS } from '../../models/product.model';
import { ProductosMasVendidosComponent } from '../../share/productos-mas-vendidos/productos-mas-vendidos';
import { SectionHeaderComponent } from '../../share/section-header';
import { StatusBadgeComponent } from '../../share/status-badge';
import { FeatureItemComponent } from '../../share/feature-item';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, ProductosMasVendidosComponent, SectionHeaderComponent, StatusBadgeComponent, FeatureItemComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})

export class ProductosComponent implements OnInit {

  productos = signal<Product[]>([]);

  ngOnInit(): void {
    console.log('Cargando productos...');
    this.productos.set(MOCK_API_PRODUCTS.data);
  }

  agregarAlCarrito(nombre: string) {
    alert(`¡${nombre} ha sido añadido al carrito!`);
  }
}