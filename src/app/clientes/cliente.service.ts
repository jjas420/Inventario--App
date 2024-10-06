import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';
import {of,Observable, from} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()
export class ClienteService {
  private urlEndPoitn:string='http://localhost:8080/api/clientes';
  


  constructor(private http:HttpClient) { }

  getClientes():Observable<Cliente[]>{
   // return of (CLIENTES); 
   return this.http.get(this.urlEndPoitn).pipe(
    map((Response)=> Response as Cliente[])
   );
  }
}
