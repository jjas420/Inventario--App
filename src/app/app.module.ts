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
import {MatPaginatorModule} from '@angular/material/paginator'
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

const routes:Routes=[
  {path:'',redirectTo:'/clientes' , pathMatch:'full'},
  {path:'directivas',component:DirectivaComponent },
  {path:'clientes',component:ClientesComponent },

]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    MatPaginatorModule
    
  ],
  providers: [ClienteService,
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
