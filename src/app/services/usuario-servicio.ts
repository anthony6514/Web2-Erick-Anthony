import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioServicio {

  private http = inject(HttpClient);
  private API_URL = 'https://ea-store-fa5cb-default-rtdb.firebaseio.com';

  //Método Get
  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<{ [key: string]: Usuario }>(`${this.API_URL}/usuarios.json`).pipe(
      map(respuesta => {
        if (!respuesta) {
          return [];
        }
        return Object.keys(respuesta).map(key => {
          // El ID en Firebase es la clave (string)
          const usuario: Usuario = { ...respuesta[key], id: key };
          return usuario;
        });
      })
    )
  }

  // 3. GET: Devuelve UN solo Usuario
  getUsuario(id: string | number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.API_URL}/usuarios/${id}.json`);
  }

  // 4. POST: Recibe un Usuario estricto y devuelve el Usuario creado
  postUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.API_URL}/usuarios.json`, usuario);
  }

  // metodo buscar Por ID
  getUsuarioById(id: string | number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.API_URL}/usuarios/${id}.json`);
  }

  // METODO PUT
  putUsuario(id: string | number, usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.API_URL}/usuarios/${id}.json`, usuario);
  }

  // METODO DELETE
  deleteUsuario(id: string | number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/usuarios/${id}.json`);
  }

  // LOGIN: Simulación simple
  login(email: string, password: string): Observable<Usuario | null> {
    return this.getUsuarios().pipe(
      map(usuarios => {
        const usuario = usuarios.find(u => u.email === email && u.password === password);
        return usuario || null;
      })
    );
  }
}
