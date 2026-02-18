import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class FooterComponent {

  anio: number = new Date().getFullYear();


  enlaces = [
    { texto: 'Home', link: '#' },
    { texto: 'Acerca', link: '#' },
    { texto: 'Productos', link: '#' },
    { texto: 'Contacto', link: '#' },
    { texto: 'Registro', link: '#' },
  ];
}