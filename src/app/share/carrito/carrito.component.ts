import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, FormsModule],
=======
import { StatusBadgeComponent } from '../../share/status-badge';
import { SectionHeaderComponent } from '../../share/section-header';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, FormsModule, StatusBadgeComponent, SectionHeaderComponent],
>>>>>>> f97593bb23978f6336a652ca057a0e40d5eb3b49
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {

  busqueda: string = '';


  items = [
    {
<<<<<<< HEAD
      nombre: 'Laptop Profesional',
      producto: 'Electrónica',
=======
      nombre: 'Chaqueta Impermeable',
      producto: 'Ropa',
>>>>>>> f97593bb23978f6336a652ca057a0e40d5eb3b49
      prioridad: 'Enviado',
      progreso: 90
    },
    {
<<<<<<< HEAD
      nombre: 'Auriculares Inalámbricos',
      producto: 'Audio',
=======
      nombre: 'Zapatillas Urbanas',
      producto: 'Calzado',
>>>>>>> f97593bb23978f6336a652ca057a0e40d5eb3b49
      prioridad: 'En Tránsito',
      progreso: 75
    },
    {
<<<<<<< HEAD
      nombre: 'Monitor 4K',
      producto: 'Pantallas',
=======
      nombre: 'Lámpara de Diseño',
      producto: 'Hogar',
>>>>>>> f97593bb23978f6336a652ca057a0e40d5eb3b49
      prioridad: 'Preparando',
      progreso: 100
    },
    {
<<<<<<< HEAD
      nombre: 'Teclado Mecánico',
      producto: 'Periféricos',
=======
      nombre: 'Skateboard Pro',
      producto: 'Deportes',
>>>>>>> f97593bb23978f6336a652ca057a0e40d5eb3b49
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