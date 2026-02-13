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

    // Reglas básicas
    formCuenta = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required]]
    }, { validators: this.validarClaves });

    // Método para validar que las claves sean iguales
    validarClaves(control: any) {
        const password = control.get('password')?.value;
        const confirmPassword = control.get('confirmPassword')?.value;
        return password === confirmPassword ? null : { noCoinciden: true };
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



