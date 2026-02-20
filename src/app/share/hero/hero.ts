import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="relative h-[85vh] min-h-[600px] w-full overflow-hidden bg-[#0a0a0c]">
      <!-- Slides Container -->
      <div class="relative h-full w-full">
        @for (slide of slides; track $index) {
          <div 
            class="absolute inset-0 z-0 h-full w-full transition-all duration-1000 ease-in-out"
            [class.opacity-100]="indexActual === $index"
            [class.opacity-0]="indexActual !== $index"
            [class.scale-105]="indexActual === $index"
            [class.scale-100]="indexActual !== $index">
            
            <!-- Image with Overlay -->
            <div class="absolute inset-0 bg-gradient-to-r from-[#0a0a0c] via-[#0a0a0c]/80 to-transparent z-10"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent z-10"></div>
            <img [src]="slide.imagen" [alt]="slide.tituloPart1 + ' ' + slide.tituloPart2" class="h-full w-full object-cover grayscale-[20%] brightness-75">
            
            <!-- Content -->
            <div class="relative z-20 flex h-full items-center px-6 lg:px-24">
              <div class="max-w-3xl space-y-8">
                <div class="inline-flex items-center space-x-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
                   <span class="relative flex h-2 w-2">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-500 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
                  </span>
                  <p class="text-[10px] font-black uppercase tracking-[0.3em] text-accent-500">{{ slide.subtitulo }}</p>
                </div>
                
                <h1 class="text-6xl md:text-8xl font-black italic tracking-tighter text-white leading-[0.9]">
                  {{ slide.tituloPart1 }}<br>
                  <span class="text-gradient">{{ slide.tituloPart2 }}</span>
                </h1>

                <p class="max-w-xl text-lg text-gray-400 font-medium leading-relaxed">
                  {{ slide.descripcion }}
                </p>

                <div class="flex flex-wrap gap-4 pt-4">
                  <a routerLink="/productos" 
                    class="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-accent-500 px-8 py-4 font-black uppercase tracking-widest text-primary-950 transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] active:scale-95">
                    <span class="relative z-10">{{ button }}</span>
                    <div class="absolute inset-0 -translate-x-full bg-white/20 transition-transform group-hover:translate-x-0"></div>
                  </a>
                  
                  <button class="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-black uppercase tracking-widest text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20 active:scale-95">
                    Catálogo 2024
                  </button>
                </div>
              </div>
            </div>
          </div>
        }
      </div>

      <!-- Navigation Indicators -->
      <div class="absolute bottom-12 left-6 lg:left-24 z-30 flex items-center space-x-4">
        @for (slide of slides; track $index) {
          <button 
            (click)="setSlide($index)"
            class="group relative h-1 transition-all duration-500"
            [style.width]="indexActual === $index ? '80px' : '40px'">
            <div class="h-full w-full rounded-full bg-white/10 transition-colors group-hover:bg-white/20"></div>
            <div 
              class="absolute inset-0 h-full rounded-full bg-accent-500 transition-all duration-500"
              [style.width]="indexActual === $index ? '100.1%' : '0%'"></div>
          </button>
        }
      </div>

      <!-- Arrow Controls (Hidden on Mobile) -->
      <div class="absolute bottom-12 right-12 z-30 hidden md:flex items-center space-x-4">
        <button (click)="anterior()" class="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition-all hover:bg-accent-500 hover:text-primary-950 hover:border-accent-500 active:scale-90">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"></path></svg>
        </button>
        <button (click)="siguiente()" class="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition-all hover:bg-accent-500 hover:text-primary-950 hover:border-accent-500 active:scale-90">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path></svg>
        </button>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class HeroComponent implements OnInit, OnDestroy {
  @Input() button: string = 'Comprar Ahora';

  indexActual = 0;
  private autoPlayInterval: any;

  slides = [
    {
      tituloPart1: 'Tecnología de',
      tituloPart2: 'Nueva Era',
      subtitulo: 'Marketplace de Élite',
      descripcion: 'Hardware de alto rendimiento y gadgets de última generación. Optimiza tu vida digital con lo mejor de Trato.',
      imagen: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop'
    },
    {
      tituloPart1: 'Moda que',
      tituloPart2: 'Define',
      subtitulo: 'Tendencias Exclusivas',
      descripcion: 'Viste con actitud. Descubre colecciones que fusionan estilo y modernidad para marcar la diferencia en cada paso.',
      imagen: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e12?q=80&w=2070&auto=format&fit=crop'
    },
    {
      tituloPart1: 'Espacios que',
      tituloPart2: 'Inspiran',
      subtitulo: 'Hogar y Confort',
      descripcion: 'Tu hogar merece lo mejor. Mobiliario vanguardista y decoración de autor para crear ambientes únicos y llenos de estilo.',
      imagen: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  private startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.siguiente();
    }, 6000);
  }

  private stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  siguiente() {
    this.indexActual = (this.indexActual + 1) % this.slides.length;
  }

  anterior() {
    this.indexActual = (this.indexActual - 1 + this.slides.length) % this.slides.length;
  }

  setSlide(index: number) {
    this.indexActual = index;
    this.stopAutoPlay();
    this.startAutoPlay();
  }
}