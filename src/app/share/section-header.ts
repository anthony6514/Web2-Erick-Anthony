import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-section-header',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="mb-10 text-center">
      <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl text-gradient mb-4">
        {{ title }}
      </h2>
      <p class="max-w-2xl mx-auto text-lg text-gray-400">
        {{ subtitle }}
      </p>
      <div class="mt-4 flex justify-center">
        <div class="h-1 w-20 bg-accent-600 rounded-full"></div>
      </div>
    </div>
  `,
    styles: []
})
export class SectionHeaderComponent {
    @Input() title: string = '';
    @Input() subtitle: string = '';
}
