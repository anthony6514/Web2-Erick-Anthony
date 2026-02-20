import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { AuthService } from '../services/auth-service/auth-service';

export const canMatchAdminGuard: CanMatchFn = (route, segments) => {
  const authService = inject(AuthService);

  if (!authService.sesionIniciada()) {
    return true;
  }

  return authService.rolActual()?.trim().toLowerCase() === 'admin';
};
