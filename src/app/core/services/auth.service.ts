import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private LOGIN_URL = 'http://localhost:8081/api/v1/auth/login';
  private tokenKey = 'authToken';
  private REFRESH_URL = 'http://localhost:8081/api/v1/auth/refresh';
  private refreshTokenKey = 'refreshToken';

  constructor(private httpClient: HttpClient, private router: Router) { }

  login(user: string, password: string): Observable<any> {
    return this.httpClient.post<any>(this.LOGIN_URL, { user, password }).pipe(
      tap(response => {
        if (response.token) {
          console.log(response.token);
          this.setToken(response.token);
          this.setRefreshToken(response.refreshToken)
          this.autoRefreshToken();

        }
      })
    )
  }


  private setRefreshToken(token: string): void {
    localStorage.setItem(this.refreshTokenKey, token);
  }

  private getRefreshToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(this.refreshTokenKey);
    } else {
      return null;
    }
  }

  refreshToken(): Observable<any> {
    const refreshToken = this.getRefreshToken()
    return this.httpClient.post<any>(this.REFRESH_URL, { refreshToken }).pipe(
      tap(response => {
        if (response.token) {
          console.log(response.token);
          this.setToken(response.token);
          this.setRefreshToken(response.refreshToken)
          this.autoRefreshToken()
        }
      })
    )
  }

  isAdmin():boolean{ 
    const token= this.getToken();
    if (!token){
      return false
    }
    const payload = JSON.parse(atob(token.split('.')[1]));
        const role = payload.role;
        if(role === 'Admin') {
          return true;
        }else {
          return false;
        }
  }

  autoRefreshToken(): void {
    const token = this.getToken();
    if (!token) {
      return;
    }
    const payload = JSON.parse(atob(token.split('.')[1]));
    const exp = payload.exp * 1000;

    const timeout = exp - Date.now() - (60 * 1000);

    setTimeout(() => {
      this.refreshToken().subscribe()
    }, timeout);

  }
  private setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);

  }

  getToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(this.tokenKey);
    } else {
      return null;
    }
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    if (!token) {
      return false;
    }
    const payload = JSON.parse(atob(token.split('.')[1]));
    const exp = payload.exp * 1000;
    return Date.now() < exp;
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.refreshTokenKey);
    window.location.reload();
    this.router.navigate(['login']);

  }
}

