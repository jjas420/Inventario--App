import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { TokenService } from '../../services/token.service';
import * as CryptoJS from 'crypto-js'; 
const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

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
    const code_verifier = this.generateCodeVerifier();
    this.tokenService.setVerifier(code_verifier);
    this.params.code_challenge = this.generateCodeChallenge(code_verifier);
    const httpParams = new HttpParams({fromObject: this.params});
    const codeUrl = this.authorize_uri + httpParams.toString();
    location.href = codeUrl;
  }
  onLogout(): void {

    location.href = this.logout_url;
  }


  generateCodeVerifier(): string {
    let result = '';
    const char_length = CHARACTERS.length;
    for(let i =0; i < 44; i++) {
      result += CHARACTERS.charAt(Math.floor(Math.random() * char_length));
    }
    return result;
  }

  generateCodeChallenge(code_verifier: string): string {
    const codeverifierHash = CryptoJS.SHA256(code_verifier).toString(CryptoJS.enc.Base64);
    const code_challenge = codeverifierHash
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
    return code_challenge;
  }


}
