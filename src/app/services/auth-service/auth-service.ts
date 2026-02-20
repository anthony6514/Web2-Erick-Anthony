import { Injectable, signal, inject } from '@angular/core';
import { UsuarioServicio } from '../usuario-servicio';
import { Usuario } from '../../models/usuario';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private servicioUsuario = inject(UsuarioServicio);

  sesionIniciada = signal<boolean>(localStorage.getItem('sesion') === 'true');

  rolActual = signal<string | null>(localStorage.getItem('rol'));

  login(email: string, password: string): Observable<boolean> {
    return this.servicioUsuario.getUsuarios().pipe(
      map(usuarios => {
        const usuarioCoincide = usuarios.find(u => u.email === email && u.password === password);
        if (usuarioCoincide) {
          localStorage.setItem('sesion', 'true');
          localStorage.setItem('rol', usuarioCoincide.rol);
          localStorage.setItem('user', JSON.stringify(usuarioCoincide));

          this.sesionIniciada.set(true);
          this.rolActual.set(usuarioCoincide.rol);
          return true;
        }
        return false;
      })
    );
  }

  logout() {
    localStorage.removeItem('sesion');
    localStorage.removeItem('user');
    localStorage.removeItem('rol');
    this.sesionIniciada.set(false);
    this.rolActual.set(null);
  }
}
