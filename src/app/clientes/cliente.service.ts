import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';
import {of,Observable, from} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()
export class ClienteService {
  private urlEndPoitn:string='http://localhost:8080/api/clientes';
  
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

   

   
}
