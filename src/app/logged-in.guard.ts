import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticationService} from './service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {

  constructor(private service: AuthenticationService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const isLoggedIn = this.service.isLoggedIn();
    console.log('canActivate:', isLoggedIn);
    return isLoggedIn;
  }
}
