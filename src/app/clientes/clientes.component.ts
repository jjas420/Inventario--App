
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';
import { ClienteService } from './cliente.service';
import {AfterViewInit, Component} from '@angular/core';
import {MatPaginator, MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css',
  
})
export class ClientesComponent {
  PageSize=5;
  desde:number=0;
  hasta:number=5;
  clientes: Cliente[] = [];
  constructor(private clienteService: ClienteService){

  }
  ngOnInit(){
    
    this.clienteService.getClientes().subscribe(
      clientes=> this.clientes=clientes
    );
     
  }
  
  cambiarPagina(e:PageEvent){
    console.log(e);
    this.desde= e.pageIndex*e.pageSize;
    this.hasta= this.desde+ e.pageSize;


  }

}
