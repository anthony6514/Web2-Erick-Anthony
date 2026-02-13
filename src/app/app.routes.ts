import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home';
import { AcercaComponent } from './features/acerca/acerca';
import { ProductosComponent } from './features/productos/productos.component';
import { Formulario } from './share/formulario/formulario';
import { FormularioCuenta } from './share/formulario-cuenta/formulario-cuenta';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'acerca', component: AcercaComponent },
    { path: 'usuarios', component: Formulario },
    { path: 'registro', component: FormularioCuenta },

    { path: '**', redirectTo: 'home' }
];