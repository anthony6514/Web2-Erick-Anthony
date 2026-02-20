import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SectionHeaderComponent } from '../../share/section-header';

@Component({
    selector: 'app-contacto',
    standalone: true,
    imports: [CommonModule, FormsModule, SectionHeaderComponent],
    templateUrl: './contacto.html',
    styleUrl: './contacto.css'
})
export class ContactoComponent {
    contacto = {
        nombre: '',
        email: '',
        mensaje: ''
    };

    enviarFormulario() {
        console.log('Formulario enviado:', this.contacto);
        alert('¡Gracias por contactarnos! Te responderemos pronto.');
        this.contacto = { nombre: '', email: '', mensaje: '' };
    }
}
