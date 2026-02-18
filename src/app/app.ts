import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavBarComponent } from './share/nav-bar/nav-bar';
import { FooterComponent } from './share/footer/footer'; 

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [
    RouterOutlet,
    NavBarComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'Trato - Tu tienda online';
}