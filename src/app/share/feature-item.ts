import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feature-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="group relative overflow-hidden rounded-[2.5rem] bg-primary-800 border border-accent-500/10 p-2 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_-20px_rgba(212,175,55,0.2)]">
      <!-- Image Container -->
      <div class="relative aspect-[16/10] w-full overflow-hidden rounded-[2.2rem]">
        <div class="absolute inset-0 bg-gradient-to-t from-primary-950 via-transparent to-transparent z-10 opacity-60"></div>
        <img [src]="imagenUrl" [alt]="title" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110">
        
        <!-- Icon Overlay (Optional) -->
        <div class="absolute top-4 left-4 z-20">
          <div class="bg-accent-500 p-2.5 rounded-xl shadow-lg shadow-accent-500/20 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500">
            <ng-content select="[icon]"></ng-content>
          </div>
        </div>
      </div>

      <!-- Content -->
      <div class="p-6">
        <h3 class="text-xl font-black text-white group-hover:text-accent-500 transition-colors leading-tight uppercase italic mb-3">
          {{ title }}
        </h3>
        <p class="text-gray-400 text-xs font-medium leading-relaxed uppercase tracking-wider opacity-60 group-hover:opacity-100 transition-opacity">
          {{ description }}
        </p>
      </div>

      <!-- Bottom Accent -->
      <div class="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-accent-500 to-transparent w-full opacity-0 group-hover:opacity-40 transition-opacity"></div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class FeatureItemComponent {
  @Input() imagenUrl: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
}
