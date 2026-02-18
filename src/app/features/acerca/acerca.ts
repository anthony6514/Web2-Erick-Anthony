import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../share/hero/hero';
<<<<<<< HEAD
=======
import { SectionHeaderComponent } from '../../share/section-header';
import { FeatureItemComponent } from '../../share/feature-item';
import { StatusBadgeComponent } from '../../share/status-badge';
>>>>>>> f97593bb23978f6336a652ca057a0e40d5eb3b49

@Component({
  selector: 'app-acerca',
  standalone: true,
<<<<<<< HEAD
  imports: [CommonModule, HeroComponent],
=======
  imports: [CommonModule, HeroComponent, SectionHeaderComponent, FeatureItemComponent, StatusBadgeComponent],
>>>>>>> f97593bb23978f6336a652ca057a0e40d5eb3b49
  templateUrl: './acerca.html',
  styleUrl: './acerca.css'
})
export class AcercaComponent {
<<<<<<< HEAD
 
=======
>>>>>>> f97593bb23978f6336a652ca057a0e40d5eb3b49
}