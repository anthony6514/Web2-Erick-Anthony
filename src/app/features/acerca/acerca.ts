import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../share/hero/hero';
import { SectionHeaderComponent } from '../../share/section-header';
import { StatusBadgeComponent } from '../../share/status-badge';

@Component({
  selector: 'app-acerca',
  standalone: true,
  imports: [CommonModule, HeroComponent, SectionHeaderComponent, StatusBadgeComponent],
  templateUrl: './acerca.html',
  styleUrl: './acerca.css'
})
export class AcercaComponent {
}