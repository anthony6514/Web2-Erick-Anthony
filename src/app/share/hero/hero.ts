import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
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
})
export class HeroComponent {
  @Input() titulo: string = '';
  @Input() subtitulo: string = '';
  @Input() descripcion: string = '';
  @Input() imagen: string = '';
  @Input() button: string = '';
  @Input() mostrarBoton: boolean = true;
  @Input() colorFondo: string = '';
}