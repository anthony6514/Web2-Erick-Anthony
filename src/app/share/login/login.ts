import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
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
  private router = inject(Router);

  login() {
    this.authService.login(this.email, this.password).subscribe((success) => {
      if (success) {
        alert("Bienvenidos al sistema");
        if (this.authService.rolActual()?.trim().toLowerCase() === 'admin') {
          this.router.navigate(['/usuarios']);
        } else {
          this.router.navigate(['/home']);
        }
      } else {
        alert("Error: usuario no autenticado");
      }
    });
  }

  cerrarSesion() {
    this.authService.logout();
    alert("Hasta luego");
  }
}