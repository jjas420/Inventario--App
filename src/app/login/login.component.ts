import { Component } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user: string = 'j';
  password: string = '';

  constructor(private authService: AuthService, private router: Router){

  }
  login(): void {
    this.authService.login(this.user, this.password).subscribe({
      next: (response)=> {
        window.location.reload();

     
          this.router.navigate(['/clientes'])

       
      },
      error: (err) => console.error('Login failed', err)
    })
  }



}
