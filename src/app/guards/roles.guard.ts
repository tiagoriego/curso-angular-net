import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { LoginService } from '../services/login.service';
import { Observable } from 'rxjs';

export const rolesGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const loginService = inject(LoginService);
  const router = inject(Router)
  return new Observable<boolean>((subscribe) => {
    const roles = loginService.getRoles();
    if (!roles) subscribe.next(false);
    roles?.subscribe({
      next: (data: string[]) => {
        for (const role of route.data['roles']) {
          if (data.includes(role)) {
            subscribe.next(true);
            return
          }
        }
        subscribe.next(false)
        router.navigate(['/401'])
      },
    });
  });
};
