import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StatusBadgeComponent } from '../../share/status-badge';

@Component({
      selector: 'app-carrito',
      standalone: true,
      imports: [CommonModule, FormsModule, StatusBadgeComponent],
      templateUrl: './carrito.component.html',
      styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {

      busqueda: string = '';


      items = [
            {
                  nombre: 'Chaqueta Impermeable',
                  producto: 'Ropa',
                  prioridad: 'Enviado',
                  progreso: 90
            },
            {
                  nombre: 'Zapatillas Urbanas',
                  producto: 'Calzado',
                  prioridad: 'En Tránsito',
                  progreso: 75
            },
            {
                  nombre: 'Lámpara de Diseño',
                  producto: 'Hogar',
                  prioridad: 'Preparando',
                  progreso: 100
            },
            {
                  nombre: 'Skateboard Pro',
                  producto: 'Deportes',
                  prioridad: 'Pendiente',
                  progreso: 40
            }
      ];

      get itemsFiltrados() {
            return this.items.filter(i =>
                  i.nombre.toLowerCase().includes(this.busqueda.toLowerCase())
            );
      }
}