import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private urlEndPoitn:string='http://localhost:8081/api/users';

  private hhtpHeaders= new HttpHeaders({'Content-Type':'application/json'})
  constructor(private http:HttpClient) { }

  getClientes():Observable<User[]>{
    // return of (CLIENTES); 
    return this.http.get(this.urlEndPoitn).pipe(
     map((Response)=> Response as User[])
    );
   }
   create(cliente:User) : Observable <User>{
    return this.http.post<User>(this.urlEndPoitn,cliente,{headers:this.hhtpHeaders})
  }
  update(user:User): Observable <User>{
    return this.http.put<User>(`${this.urlEndPoitn}/${user.id}`,user,{headers:this.hhtpHeaders})

}


  getCliente(id: any):Observable<User>{
    return this.http.get<User>(`${this.urlEndPoitn}/${id}`)
  }

  delete(id:number): Observable<User>{
    return this.http.delete<User>(`${this.urlEndPoitn}/${id}`,{headers:this.hhtpHeaders})

    
  }

}
