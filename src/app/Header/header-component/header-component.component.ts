import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header-component.component.html',
  styleUrl: './header-component.component.css'


})
export class HeaderComponent implements OnInit
 {
 
  authorize_uri = environment.authorize_uri;

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
    private router: Router
  ) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  onLogin(): void {
    const httpParams = new HttpParams({fromObject: this.params});
    const codeUrl = this.authorize_uri + httpParams.toString();
    location.href = codeUrl;
  }
  

}
