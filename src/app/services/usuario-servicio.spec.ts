import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

// 👇 AQUÍ ESTÁ LA CLAVE: Importamos 'UsuarioServicio' (Singular, tal como lo definiste)
import { UsuarioServicio } from './usuario-servicio'; 

describe('UsuarioServicio', () => {
  let service: UsuarioServicio;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [UsuarioServicio] // Usamos el nombre singular aquí también
    });
    service = TestBed.inject(UsuarioServicio); // Y aquí
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});