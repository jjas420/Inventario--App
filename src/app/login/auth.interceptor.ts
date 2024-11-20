import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../core/services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('authToken');  // Obtén el token del almacenamiento
    
        if (token) {
          const cloned = req.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`  // Agrega el token al header de la solicitud
            }
          });
          return next.handle(cloned);  // Pasa la solicitud clonada con los headers
        }
    
        return next.handle(req);  // Si no hay token, pasa la solicitud original sin cambios
      }
    }