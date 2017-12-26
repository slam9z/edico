import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './index';

import { Observable } from 'rxjs/Observable';
import { map, take, tap } from 'rxjs/operators';
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate() {
    if (this.authService.isLoggedIn()) {

      return true;

    }
    this.router.navigate(['/']);
    return false;
  }
}
