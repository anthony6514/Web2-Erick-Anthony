import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {

  busqueda: string = '';


  items = [
    {
      nombre: 'Laptop Profesional',
      producto: 'Electrónica',
      prioridad: 'Enviado',
      progreso: 90
    },
    {
      nombre: 'Auriculares Inalámbricos',
      producto: 'Audio',
      prioridad: 'En Tránsito',
      progreso: 75
    },
    {
      nombre: 'Monitor 4K',
      producto: 'Pantallas',
      prioridad: 'Preparando',
      progreso: 100
    },
    {
      nombre: 'Teclado Mecánico',
      producto: 'Periféricos',
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