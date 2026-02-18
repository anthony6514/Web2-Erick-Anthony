import { Injectable, signal, inject } from '@angular/core';
import { getAuth, signOut, User as FirebaseUser } from 'firebase/auth';
import { UsuarioServicio, Usuario } from '../usuario-servicio';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private servicioUsuario = inject(UsuarioServicio);
  private auth = getAuth();

  sesionIniciada = signal<boolean>(localStorage.getItem('sesion') === 'true');
  usuario = signal<Usuario | null>(JSON.parse(localStorage.getItem('user') || 'null'));

  login(email: string, password: string): Observable<boolean> {
    return this.servicioUsuario.getUsuarios().pipe(
      map(usuarios => {
        const usuarioEncontrado = usuarios.find(u => u.email === email && u.password === password);
        if (usuarioEncontrado) {
          localStorage.setItem('sesion', 'true');
          localStorage.setItem('user', JSON.stringify(usuarioEncontrado));
          this.sesionIniciada.set(true);
          this.usuario.set(usuarioEncontrado);
          return true;
        }
        return false;
      })
    );
  }

  logout() {
    localStorage.removeItem('sesion');
    localStorage.removeItem('user');
    this.sesionIniciada.set(false);
    this.usuario.set(null);
    signOut(this.auth);
  }
}
