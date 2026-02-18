import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuarioServicio, Usuario } from '../../services/usuario-servicio';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class Formulario implements OnInit {

  private servicioUsuario = inject(UsuarioServicio);

  listaUsuarios = signal<Usuario[]>([]);

  nuevoUsuario: Usuario = {
    name: '',
    email: '',
    phone: '',
    password: ''
  };


  ngOnInit(): void {
    this.obtenerUsuarios();
  }


  obtenerUsuarios() {
    this.servicioUsuario.getUsuarios().subscribe(usuarios => {
      this.listaUsuarios.set(usuarios);
    });
  }

  editando = false;

  // Método para limpiar el formulario
  limpiarFormulario() {
    this.nuevoUsuario = {
      name: '',
      email: '',
      phone: '',
      password: ''
    };
    this.editando = false;
  }

  // Método para validar campos del formulario
  validarFormulario(): boolean {
    return !!(this.nuevoUsuario.name?.trim() &&
      this.nuevoUsuario.email?.trim() &&
      this.nuevoUsuario.phone?.trim() &&
      (this.editando || this.nuevoUsuario.password?.trim()));
  }

  // Método Eliminar
  eliminarUsuario(id: number) {
    if (confirm('¿Desea eliminar el registro?')) {
      this.servicioUsuario.deleteUsuario(id).subscribe(() => {
        this.obtenerUsuarios();
      });
    }
  }

  //metodo poner datos seleccionados en el formulario para editar
  seleccionarParaEditar(usuario: Usuario) {
    this.editando = true;
    this.nuevoUsuario = { ...usuario };
  }

  guardarUsuario() {
    if (this.validarFormulario()) {
      if (this.editando && this.nuevoUsuario.id) {

        // Lógica para actualizar usuario existente
        this.servicioUsuario.putUsuario(this.nuevoUsuario.id, this.nuevoUsuario)
          .subscribe(() => {
            this.obtenerUsuarios();
            this.limpiarFormulario();
            alert('¡Usuario actualizado con éxito!');
          });
      } else {

        // Lógica para crear un nuevo usuario
        this.servicioUsuario.postUsuario(this.nuevoUsuario)
          .subscribe(() => {
            this.obtenerUsuarios();
            this.limpiarFormulario();
            alert('¡Usuario creado con éxito!');
          });
      }
    } else {
      alert('Por favor completa los campos del formulario');
    }
  }
  //resetear el formulario
  resetear() {
    this.nuevoUsuario = { name: '', email: '', phone: '', password: '' };
    this.editando = false;
  }
}
