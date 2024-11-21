import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header-component/header-component.component';
import { FooterComponent } from './Footer/footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteService } from './clientes/cliente.service';
import { RouterModule,Routes } from '@angular/router';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { FormComponent } from './clientes/form.component';
import { FormsModule } from '@angular/forms';
import { PdfComponent } from './Prueba/pdf/pdf.component';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './login/auth.interceptor';
import { AuthGuard } from './core/guards/auth.guard';
import { AuthenticatedGuard } from './core/guards/authenticated.guard';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { adminGuard } from './core/guards/admin.guard';



const routes:Routes=[
  {path:'',redirectTo:'/login' , pathMatch:'full'},
  {path:'directivas',component:DirectivaComponent , canActivate:[AuthGuard]},
  {path:'clientes',component:ClientesComponent, canActivate:[AuthGuard] },
  {path: 'clientes/form', component:FormComponent, canActivate:[AuthGuard] },
  {path:'clientes/form/:id', component:FormComponent, canActivate:[AuthGuard]},
  {path:'clientes/pdf', component:PdfComponent, canActivate:[AuthGuard]},
  {path:'usuarios', component:UsuariosComponent, canActivate:[AuthGuard,adminGuard]},




  {path:'login', component:LoginComponent,canActivate:[AuthenticatedGuard]}


  




]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent,
    FormComponent,
    PdfComponent,
    LoginComponent,
    UsuariosComponent,
    
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    MatPaginator,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),    
  ],
  providers: [ClienteService,
    provideHttpClient(withFetch()),
    {
      provide: HTTP_INTERCEPTORS,    // Configuración para usar el interceptor
      useClass: AuthInterceptor,      // El interceptor que se utilizará
      multi: true                    // Permite usar múltiples interceptores si es necesario
    }
    
   
    
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
