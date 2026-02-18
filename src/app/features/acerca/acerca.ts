import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../share/hero/hero';

@Component({
  selector: 'app-acerca',
  standalone: true,
  imports: [CommonModule, HeroComponent],
  templateUrl: './acerca.html',
  styleUrl: './acerca.css'
})
export class AcercaComponent {
 
}