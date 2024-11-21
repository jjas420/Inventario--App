import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import swall from 'sweetalert2';


@Component({
  selector: 'app-form-usuarios',
  templateUrl: './form-usuarios.component.html',
  styleUrl: './form-usuarios.component.css'
})
export class FormUsuariosComponent {
  user: User= new User();
  constructor(private userService: UserService,private router:Router,private activatedRoute:ActivatedRoute){
  }
  ngOnInit () {
    this.cargarCliente();
  }

  cargarCliente():void{
    this.activatedRoute.params.subscribe(params=>
      {
        let id= params['id']
        if(id){
          this.userService.getCliente(id).subscribe((user)=>this.user=user)
  
        }
      })

  }

  public create(): void{
    console.log("clicekd¡");
    console.log(this.user);
    this.userService.create(this.user)
    .subscribe({
      next: (newUser) => {
        console.log('Usuario creado con éxito:', newUser);
        swall.fire('cliente actualizado',`usuario ${this.user.name} Actulizado con exito!!`,'success')  ,
              this.router.navigate(['/users'])

      },
      error: (err) => {
        console.error('Error al crear usuario:', err.message);

        swall.fire({
          icon: "error",
          title: "Oops...",
          text: "nose puede repetir el usuario pruebe con otro",
        });
      }
    }
      

    

    )
    
  
    }

    update():void{
      this.userService.update(this.user).subscribe({
        next: (newUser) => {
          console.log('Usuario creado con éxito:', newUser);
          swall.fire('cliente actualizado',`usuario ${this.user.name} Actulizado con exito!!`,'success')  ,
                this.router.navigate(['/users'])
  
        },
        error: (err) => {
          console.error('Error al crear usuario:', err.message);
  
          swall.fire({
            icon: "error",
            title: "Oops...",
            text: "nose puede repetir el usuario pruebe con otro",
          });
        }

      })

    }

}
