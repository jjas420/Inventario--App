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
import { provideHttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { FormComponent } from './clientes/form.component';
import { FormsModule } from '@angular/forms';
import { PdfComponent } from './Prueba/pdf/pdf.component';
import { AuthorizedComponent } from './components/authorized/authorized.component';
import { HomeComponent } from './components/home/home.component';



const routes:Routes=[
  {path:'directivas',component:DirectivaComponent },
  {path:'clientes',component:ClientesComponent },
  {path: 'clientes/form', component:FormComponent},
  {path:'clientes/form/:id', component:FormComponent},
  {path:'clientes/pdf', component:PdfComponent},
  { path: '', component: HomeComponent },
  { path: 'authorized', component: AuthorizedComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
  



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
    AuthorizedComponent,
    HomeComponent
    
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    MatPaginator,
    FormsModule,
    RouterModule.forRoot(routes),    
  ],
  providers: [ClienteService,
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
