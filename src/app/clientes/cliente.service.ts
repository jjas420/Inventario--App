import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';
import {of,Observable, from, throwError} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError} from 'rxjs/operators';
import swal from 'sweetalert2';
import {Router} from '@angular/router';



@Injectable()
export class ClienteService {
  private urlEndPoitn:string='http://localhost:8081/api/clientes';
  private urlEndPoitn2:string='http://localhost:8081/api/clientes/buscar';
  
  
  private hhtpHeaders= new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http:HttpClient, private router:Router) { }

  getClientes():Observable<Cliente[]>{
   // return of (CLIENTES); 
   return this.http.get(this.urlEndPoitn).pipe(
    map((Response)=> Response as Cliente[])
   );
  }
  create(cliente:Cliente) : Observable <any>{
    return this.http.post<any>(this.urlEndPoitn,cliente,{headers:this.hhtpHeaders}).pipe(
    
      catchError(e=> {
        if(e.status==400){
          return  throwError (e);          
        }
      
        console.error(e.error.mensaje);
        swal.fire( e.error.mensaje,e.error.error, 'error');
        return  throwError (e);
        
      })

    )
  }

  getCliente(id: any):Observable<Cliente>{
    return this.http.get<Cliente>(`${this.urlEndPoitn}/${id}`).pipe(
      catchError(e=> {
        this.router.navigate(['/clientes']);
        console.error(e.error.mensaje);
        swal.fire( e.error.mensaje,e.error.error, 'error');
        return  throwError (e);
        
      })
    )
  }
  getClienteporNombre(nombre: string):Observable<Cliente[]>{
    return this.http.get(`${this.urlEndPoitn2}/${nombre}`).pipe(
      map((Response)=> Response  as Cliente[])
     );
  }
  update(cliente:Cliente): Observable <any>{
         return this.http.put<any>(`${this.urlEndPoitn}/${cliente.id}`,cliente,{headers:this.hhtpHeaders}).pipe(
          catchError(e=> {
            if(e.status==400){
              return throwError(() => e);
            }
      
            console.error(e.error.mensaje);
            swal.fire( e.error.mensaje,e.error.error, 'error');
            return  throwError (e);
            
          })
         )

  }

  delete(id:number): Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.urlEndPoitn}/${id}`,{headers:this.hhtpHeaders}).pipe(
      catchError(e=> {
  
        console.error(e.error.mensaje);
        swal.fire( e.error.mensaje,e.error.error, 'error');
        return  throwError (e);
        
      })
     )


    
  }
   
  

   

   
}
