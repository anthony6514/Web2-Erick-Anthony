import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
<<<<<<< HEAD
  // SOLUCIÓN: Usamos 'template' directo (con comillas invertidas `)
  // en lugar de buscar un archivo externo. ¡Esto elimina el error NG2001!
  template: `
    <div class="relative isolate overflow-hidden bg-slate-900 py-16 sm:py-24">
      
      <img [src]="imagen" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover opacity-30 blur-sm">
      
      <div class="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div class="mx-auto max-w-2xl lg:mx-0">
          
          <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            {{ titulo }}
          </h2>
          
          <p class="mt-4 text-xl text-indigo-300 font-semibold">
            {{ subtitulo }}
          </p>
          
          <p class="mt-6 text-lg leading-8 text-slate-300">
            {{ descripcion }}
          </p>
          
          <div class="mt-10 flex items-center gap-x-6" *ngIf="mostrarBoton">
            <button class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors">
              {{ button }}
            </button>
          </div>

        </div>
      </div>
    </div>
  `,
  styles: [] 
=======
  template: `
    <div class="relative min-h-[500px] flex items-center overflow-hidden bg-black text-white">
      
      <!-- Contenedor del Slide Actual -->
      <div class="absolute inset-0">
        <img [src]="slides[indexActual].imagen" class="w-full h-full object-cover opacity-40">
        <div class="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
      </div>

      <!-- Contenido de Texto -->
      <div class="relative mx-auto max-w-7xl px-8 z-10">
        <div class="max-w-xl">
          <h2 class="text-5xl font-bold mb-6 italic">{{ slides[indexActual].titulo }}</h2>
          <p class="text-xl text-blue-400 font-bold mb-4">{{ slides[indexActual].subtitulo }}</p>
          <p class="text-lg text-gray-300 mb-8">{{ slides[indexActual].descripcion }}</p>
          
          <button *ngIf="mostrarBoton" class="bg-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-500 transition-colors">
            {{ button }}
          </button>
        </div>
      </div>

      <!-- Botones para cambiar (Lógica Simple) -->
      <div class="absolute bottom-10 right-10 flex gap-4 z-20">
        <button (click)="anterior()" class="bg-white/10 p-3 rounded-full hover:bg-white/20"> ⬅️ </button>
        <button (click)="siguiente()" class="bg-white/10 p-3 rounded-full hover:bg-white/20"> ➡️ </button>
      </div>

    </div>
  `,
  styles: []
>>>>>>> f97593bb23978f6336a652ca057a0e40d5eb3b49
})
export class HeroComponent {
  @Input() titulo: string = '';
  @Input() subtitulo: string = '';
  @Input() descripcion: string = '';
  @Input() imagen: string = '';
<<<<<<< HEAD
  @Input() button: string = '';
  @Input() mostrarBoton: boolean = true;
  @Input() colorFondo: string = '';
=======
  @Input() button: string = 'Ver más';
  @Input() mostrarBoton: boolean = true;

  // Lista de fotos para el carrusel (Ahora como mercado general)
  slides = [
    {
      titulo: 'Tu Hogar, Tu Estilo',
      subtitulo: 'Diseño y Confort',
      descripcion: 'Encuentra muebles, decoración y lo mejor para tu casa.',
      imagen: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1600&q=80'
    },
    {
      titulo: 'Moda que Inspira',
      subtitulo: 'Tendencias 2024',
      descripcion: 'Viste con las mejores marcas y estilos exclusivos.',
      imagen: 'https://img.freepik.com/foto-gratis/concepto-moda-rapida-tienda-ropa-completa_23-2150871300.jpg?semt=ais_wordcount_boost&w=740&q=80'
    },
    {
      titulo: 'Todo lo que Buscas',
      subtitulo: 'El Mejor Trato Online',
      descripcion: 'Desde tecnología hasta deportes, lo tenemos todo.',
      imagen: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80'
    }
  ];

  indexActual = 0;

  siguiente() {
    this.indexActual = (this.indexActual + 1) % this.slides.length;
  }

  anterior() {
    this.indexActual = (this.indexActual - 1 + this.slides.length) % this.slides.length;
  }
>>>>>>> f97593bb23978f6336a652ca057a0e40d5eb3b49
}