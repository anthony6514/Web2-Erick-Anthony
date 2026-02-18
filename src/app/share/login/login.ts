import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth-service/auth-service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email: string = "";
  password: string = "";

  private authService = inject(AuthService);

  login() {
    this.authService.login(this.email, this.password);
    alert("Bienvenido al sistema ");
  }
  cerrarSesion() {
    this.authService.logout();
    alert("Hasta luego");
  }
}