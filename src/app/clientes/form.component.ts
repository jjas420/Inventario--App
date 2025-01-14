import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import swall from 'sweetalert2';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

   cliente: Cliente= new Cliente();
   titulo:string="crear cliente";
  errores: string[]=[];
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
      json=>{
        this.router.navigate(['/clientes'])
       swall.fire('nuevo cliente', ` ${json.mensaje} ${json.cliente.nombre}`   ,'success')
      },
      err=>{
       
        this.errores= err.error.errors as string[];
        console.log('Errores recibidos:', this.errores);
        console.error('Codigo del error desde el bakend: '+ err.status);
        console.error(err.error.errors);
        
       
      }

    

    );
    
  
    }
    update():void{
      this.clienteService.update(this.cliente).subscribe(json=>{
        this.router.navigate(['/clientes'])
        swall.fire('nuevo cliente', ` ${json.mensaje} ${json.cliente.nombre}`   ,'success')

      },
      err=>{
        this.errores=err.error.errores as string[]  ;
        console.error('Codigo del error desde el bakend: '+ err.status);
        console.error(err.error.errors);
      })

    }
  }