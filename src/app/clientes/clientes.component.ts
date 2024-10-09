
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
  carritos: Cliente []=[];

  nombre: string="";
  constructor(private clienteService: ClienteService){

  }
  ngOnInit(){

    this.clienteService.getClientes().subscribe(
      clientes=> this.clientes=clientes
    );
     
  }



  agregarItem(cliente:Cliente) {
  // Se agrega una copia del nuevo ítem
        this.carritos.push(cliente);
        console.log(cliente);


    
  }


  
  cambiarPagina(e:PageEvent){
    console.log(e);
    this.desde= e.pageIndex*e.pageSize;
    this.hasta= this.desde+ e.pageSize;


  }
  buscar(e:string){
    this.nombre=e

    console.log('Dato enviado:', e);

  }
  onKey(event: KeyboardEvent) {
    const inputValue = (event.target as HTMLInputElement).value;
    console.log('Valor del input:', inputValue);
    this.nombre=inputValue;
    if (this.nombre.trim() === '') { // trim() elimina espacios en blanco
      this.clienteService.getClientes().subscribe(
        clientes=> this.clientes=clientes
      );    } else {

        this.clienteService.getClienteporNombre(this.nombre).subscribe(
          clientes=> this.clientes=clientes
        );
    }


  }

}
