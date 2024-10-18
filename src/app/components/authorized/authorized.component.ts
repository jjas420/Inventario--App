import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-authorized',
  templateUrl: './authorized.component.html',
  styleUrl: './authorized.component.css'
})
export class AuthorizedComponent implements OnInit {


  code = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private tokenService:TokenService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe( data => {
      this.code = data['code'];
      this.getToken();
    });
  }

  getToken(): void {
    this.authService.getToken(this.code).subscribe(
      data => {
       this.tokenService.setTokens(data.access_token, data.refresh_token);
       this.router.navigate(['']);
      },
      err => {
        console.log(err);
      }
    );
  }
  
}