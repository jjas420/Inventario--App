import { Component } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {
  users: User[] = [];

  constructor(private userService: UserService){

  }
  ngOnInit(){

    this.userService.getClientes().subscribe(
      user=> this.users=user
    );
     
  }


 delete(user:User):void{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "estas seguro?",
      text: `seguro que quieres eliminar el cliente ${user.name} `,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.delete(user.id).subscribe(
          response=>{
            this.users=this.users.filter(cli=>cli !==user)

            swalWithBootstrapButtons.fire({
              title: "eliminado!",
              text: `cliente ${user.name} fue eliminado`,
              icon: "success"
            });
          }
        )

        
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "no fue eliminado)",
          icon: "error"
        });
      }
    });
    


    
      
     
  }

}
