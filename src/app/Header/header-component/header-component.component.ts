import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header-component.component.html',
  styleUrl: './header-component.component.css'


})
export class HeaderComponent implements OnInit {
  logout_url = environment.logout_url;

  authorize_uri = environment.authorize_uri;
  isLogged: boolean;
  isAdmin: boolean;

  params: any = {
    client_id: environment.client_id,
    redirect_uri: environment.redirect_uri,
    scope: environment.scope,
    response_type: environment.response_type,
    response_mode: environment.response_mode,
    code_challenge_method: environment.code_challenge_method,
    code_challenge: environment.code_challenge,
  }
  title = 'Inventario';
  constructor(
    private router: Router, private tokenService: TokenService
  ) { }
  ngOnInit(): void {
    this.getLogged();
  }
  getLogged(): void {
    this.isLogged = this.tokenService.isLogged();
    this.isAdmin = this.tokenService.isAdmin();
  }
  onLogin(): void {
    const httpParams = new HttpParams({ fromObject: this.params });
    const codeUrl = this.authorize_uri + httpParams.toString();
    location.href = codeUrl;
  }
  onLogout(): void {
    this.tokenService.clear();

    location.href = this.logout_url;
  }


}
