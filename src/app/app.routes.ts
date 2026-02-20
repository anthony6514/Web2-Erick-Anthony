import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home';
import { AcercaComponent } from './features/acerca/acerca';
import { ProductosComponent } from './features/productos/productos.component';
import { Formulario } from './share/formulario/formulario';
import { FormularioCuenta } from './share/formulario-cuenta/formulario-cuenta';
import { Login } from './share/login/login';
import { NotFoundComponent } from './features/not-found/not-found';
import { ContactoComponent } from './features/contacto/contacto';
import { authGuard } from './guards/auth-guard';
import { adminGuard } from './guards/admin-guard';
import { canMatchAdminGuard } from './guards/can-match-admin-guard';
import { adminChildGuard } from './guards/admin-child-guard';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'acerca', component: AcercaComponent },
    {
        path: 'usuarios',
        component: Formulario,
        canActivate: [authGuard, adminGuard],
        canMatch: [canMatchAdminGuard]
    },
    { path: 'registro', component: FormularioCuenta },
    { path: 'login', component: Login },
    { path: 'contacto', component: ContactoComponent },
    { path: '404', component: NotFoundComponent },

    { path: '**', component: NotFoundComponent }
];
