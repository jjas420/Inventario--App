
import { Component,OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {
  clientes: Cliente[] = [];
  constructor(private clienteService: ClienteService){

  }
  ngOnInit(){
    this.clienteService.getClientes().subscribe(
      clientes=> this.clientes=clientes
    );
     
  }
  

}
