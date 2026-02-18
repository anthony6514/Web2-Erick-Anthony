import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, MOCK_API_PRODUCTS } from '../../models/product.model';

@Component({
    selector: 'app-productos-mas-vendidos',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './productos-mas-vendidos.html',
    styleUrl: './productos-mas-vendidos.css'
})
export class ProductosMasVendidosComponent {
    productos: Product[] = MOCK_API_PRODUCTS.data.slice(0, 4);
}
