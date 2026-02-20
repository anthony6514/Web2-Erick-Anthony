import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-status-badge',
    standalone: true,
    imports: [CommonModule],
    template: `
    <span [ngClass]="getClase()" class="px-3 py-1 rounded-full text-xs font-bold border">
      {{ label }}
    </span>
  `,
    styles: []
})
export class StatusBadgeComponent {
    @Input() label: string = '';
    @Input() type: string = 'info';

    // Lógica simple con if/else para que sea fácil de leer
    getClase() {
        if (this.type === 'success') {
            return 'bg-accent-500/10 text-accent-500 border-accent-500/30';
        } else if (this.type === 'warning') {
            return 'bg-yellow-900/20 text-yellow-400 border-yellow-500/30';
        } else if (this.type === 'error') {
            return 'bg-red-900/20 text-red-400 border-red-500/30';
        } else {
            return 'bg-blue-900/20 text-blue-400 border-blue-500/30';
        }
    }
}
