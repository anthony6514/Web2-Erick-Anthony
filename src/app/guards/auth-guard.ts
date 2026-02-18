import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service/auth-service';

/**
 * EXPLICACIÓN AUTODIDACTA:
 * 
 * ¿Qué es un Guard? 🛡️
 * Es un "portero" que decide si un usuario puede entrar a una ruta o no.
 * 
 * 1. CanActivate: Protege la ruta principal donde se aplica.
 * 2. CanActivateChild: Protege TODAS las rutas hijas de una ruta padre. 
 *    ¡Es más eficiente que poner un guard en cada hija!
 */

// Este es el Guard principal para rutas individuales
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Si la sesión está iniciada, lo dejamos pasar
  if (authService.sesionIniciada()) {
    console.log('✅ Acceso permitido por authGuard');
    return true;
  }

  // Si no, lo mandamos al login
  console.warn('🚫 Acceso denegado, redirigiendo a login...');
  router.navigate(['/login']);
  return false;
};

/**
 * Este es el Guard para rutas HIJAS (Child Routes)
 * Se activa automáticamente cuando intentas entrar a cualquier sub-ruta
 * de un componente que tenga este guard asignado.
 */
export const authChildGuard: CanActivateChildFn = (childRoute, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  console.log('🔍 Verificando acceso a ruta hija:', childRoute.url);

  if (authService.sesionIniciada()) {
    return true;
  }

  router.navigate(['/login']);
  return false;
};
