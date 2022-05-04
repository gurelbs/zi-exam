import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({providedIn: 'root'})
export class LoginGuard implements CanActivate {
  constructor(public readonly auth: AuthService,
              public readonly router: Router) {
  }

  canActivate(): boolean | UrlTree {
    if (this.auth.status.getValue()) {
      return true;
    }
    return this.router.createUrlTree(['login']);
  }
}
