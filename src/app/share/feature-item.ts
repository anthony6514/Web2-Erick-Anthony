import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feature-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-gray-900 border border-gray-800 p-8 rounded-2xl hover:border-blue-500 transition-all duration-300 group shadow-lg">
      <div class="w-full h-40 bg-black rounded-xl mb-6 overflow-hidden">
        <img [src]="imagenUrl" [alt]="title" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100">
      </div>
      <h3 class="text-xl font-bold text-white mb-2 group-hover:text-blue-500 transition-colors uppercase tracking-tight">
        {{ title }}
      </h3>
      <p class="text-gray-400 text-sm leading-relaxed">{{ description }}</p>
    </div>
  `,
  styles: []
})
export class FeatureItemComponent {
  @Input() imagenUrl: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
}
