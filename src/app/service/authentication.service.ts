import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  /**
   * @param user: check if user matches
   * @param password: check if password matches
   */
  login(user: string, password: string): boolean {
    if (user === 'user' && password === 'password') {
      localStorage.setItem('username', user);
      return true;
    }
    return false;
  }

  /**
   * Clear username
   */
  logout(): any {
    localStorage.removeItem('username');
  }

  /**
   * Returns username or null
   */
  getUser(): any {
    return localStorage.getItem('username');
  }

  /**
   * Returns true if there is a valid user
   */
  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }
}

export const AUTH_PROVIDERS: Array<any> = [
  { provide: AuthenticationService, useClass: AuthenticationService }
];
