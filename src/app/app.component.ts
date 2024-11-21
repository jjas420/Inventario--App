import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor( private authService: AuthService) {
  }
  ngOnInit(): void {
    if(this.authService.isAuthenticated()) {
      this.authService.autoRefreshToken()
     }

  }
  title = 'Inventario--App';
  autor: string='Jonathan Ayona';
  
  
}
