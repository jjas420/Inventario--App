import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cliente } from '../../clientes/cliente';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // BehaviorSubject para mantener el estado actual del array
  private datosSource = new BehaviorSubject<Cliente[]>([]);
  datos$ = this.datosSource.asObservable();

  // Método para cambiar el valor del array
  actualizarDatosClientes(nuevosDatos: Cliente[]) {
    this.datosSource.next(nuevosDatos);
  }
}