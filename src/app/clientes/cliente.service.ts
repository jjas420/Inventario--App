import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';
import {of,Observable, from} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()
export class ClienteService {
  private urlEndPoitn:string='http://localhost:8080/api/clientes';
  private urlEndPoitn2:string='http://localhost:8080/api/clientes/buscar';
  
  
  private hhtpHeaders= new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http:HttpClient) { }

  getClientes():Observable<Cliente[]>{
   // return of (CLIENTES); 
   return this.http.get(this.urlEndPoitn).pipe(
    map((Response)=> Response as Cliente[])
   );
  }
  create(cliente:Cliente) : Observable <Cliente>{
    return this.http.post<Cliente>(this.urlEndPoitn,cliente,{headers:this.hhtpHeaders})
  }

  getCliente(id: any):Observable<Cliente>{
    return this.http.get<Cliente>(`${this.urlEndPoitn}/${id}`)
  }
  getClienteporNombre(nombre: string):Observable<Cliente[]>{
    return this.http.get(`${this.urlEndPoitn2}/${nombre}`).pipe(
      map((Response)=> Response  as Cliente[])
     );
  }
  update(cliente:Cliente): Observable <Cliente>{
         return this.http.put<Cliente>(`${this.urlEndPoitn}/${cliente.id}`,cliente,{headers:this.hhtpHeaders})

  }

  delete(id:number): Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.urlEndPoitn}/${id}`,{headers:this.hhtpHeaders})

    
  }
   
  

   

   
}
