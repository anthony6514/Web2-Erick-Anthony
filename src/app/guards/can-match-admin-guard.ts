import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { AuthService } from '../services/auth-service/auth-service';

export const canMatchAdminGuard: CanMatchFn = (route, segments) => {
  const authService = inject(AuthService);

  return authService.sesionIniciada() && authService.rolActual() === 'admin';
};
