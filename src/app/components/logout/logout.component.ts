import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.router.navigate(['']);
  

  }
}