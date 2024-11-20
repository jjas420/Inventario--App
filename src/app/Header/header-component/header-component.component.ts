import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header-component.component.html',
  styleUrl: './header-component.component.css'


})
export class HeaderComponent implements OnInit{
  title = 'Inventario';
  
  constructor(private tokenService: AuthService, private router: Router){

  }

  isLogged = false;


  ngOnInit() {

    if (this.tokenService.getToken()) {

      this.isLogged = true;
    } else {

      this.isLogged = false;
    }
  }

  onLogOut(): void {
    window.location.reload();


    this.tokenService.logout();
  }

}
