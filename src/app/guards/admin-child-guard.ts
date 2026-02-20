import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service/auth-service';

export const adminChildGuard: CanActivateChildFn = (childRoute, state) => {
    const authService = inject(AuthService);
    const router = inject(Router);

    const role = authService.rolActual()?.trim().toLowerCase();
    const isLoggedIn = authService.sesionIniciada();

    if (isLoggedIn && role === 'admin') {
        return true;
    }

    router.navigate(['/home']);
    return false;
};
