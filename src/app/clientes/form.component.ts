import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swall from 'sweetalert2'
import swal from 'sweetalert2';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
   cliente: Cliente= new Cliente();
   titulo:string="crear cliente";
  constructor( private clienteService:ClienteService, private router:Router,private activatedRoute:ActivatedRoute){

  }

  ngOnInit () {
    this.cargarCliente();
  }
  cargarCliente():void{
    this.activatedRoute.params.subscribe(params=>
      {
        let id= params['id']
        if(id){
          this.clienteService.getCliente(id).subscribe((cliente)=>this.cliente=cliente)
  
        }
      })

  }

  public create(): void{
    console.log("clicekd¡");
    console.log(this.cliente);
    this.clienteService.create(this.cliente)
    .subscribe(
      cliente=>{
        this.router.navigate(['/clientes'])
        swal('nuevo cliente', `Cliente ${cliente.nombre} creado con exito!!`   ,'success')
      }

    )
    
  
    }
  }