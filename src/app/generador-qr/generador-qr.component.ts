import { Component } from '@angular/core';

@Component({
  selector: 'app-generador-qr',
  templateUrl: './generador-qr.component.html',
  styleUrl: './generador-qr.component.css'
})
export class GeneradorQrComponent {
  public myAngularxQrCode: string = null;
  constructor () {
    // assign a value
    this.myAngularxQrCode = 'escaner prueba';
  }

}
