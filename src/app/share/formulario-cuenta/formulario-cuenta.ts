import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, Validators, FormBuilder, AbstractControl, ValidationErrors } from '@angular/forms';
import { UsuarioServicio, Usuario } from '../../services/usuario-servicio';

@Component({
    selector: 'app-formulario-cuenta',
    standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    templateUrl: './formulario-cuenta.html',
})
export class FormularioCuenta {
    private fb = inject(FormBuilder);
    private usuarioServicio = inject(UsuarioServicio);

    mostrarPassword = false;
    mostrarPassword2 = false;

    //validacion
    reglaEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
    reglaPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    formCuenta = this.fb.group({
        email: ['', [Validators.required, Validators.pattern(this.reglaEmail)]],
        password: ['', [Validators.required, Validators.pattern(this.reglaPassword)]],
        confirmPassword: ['', [Validators.required, Validators.pattern(this.reglaPassword)]]
    }, { validators: this.validarClaves });

    //metodo validar que las claves coincidan
    validarClaves(group: AbstractControl): ValidationErrors | null {
        const clave = group.get('password')?.value;
        const clave2 = group.get('confirmPassword')?.value;

        // Si no hay confirmPassword, no validamos aun
        if (!clave2) return null;

        return clave === clave2 ? null : { noCoinciden: true };
    }

    //metodo mostrar errores personalizados
    mostrarError(campo: string, tipoError: string) {
        const input = this.formCuenta.get(campo);
        if (input && input.invalid && input.touched) {
            return input.hasError(tipoError);
        }
        return false;
    }

    //METODO REGISTRAR
    registrar() {
        if (this.formCuenta.invalid) {
            this.formCuenta.markAllAsTouched();
            return;
        }

        const datosForm = this.formCuenta.value;

        const nuevoUsuario: Usuario = {
            name: 'Usuario Nuevo', // Valor por defecto ya que el form no lo tiene
            email: datosForm.email!,
            phone: 'Not provided'
        };

}
}



