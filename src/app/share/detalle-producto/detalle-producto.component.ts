import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-producto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-producto.component.html',
})
export class DetalleProductoComponent {

  @Input() producto: any;


  @Output() avisar = new EventEmitter<string>();


  avisarCompra() {
    if (this.producto) {

      this.avisar.emit(`${this.producto.name} ha sido añadido al carrito.`);
    }
  }

}