import { AfterViewInit, Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { ActivatedRoute, Router } from '@angular/router';
import { generate } from 'rxjs';
import { DataService } from './pdfService';
import { Cliente } from '../../clientes/cliente';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrl: './pdf.component.css'
})
export class PdfComponent implements OnInit, AfterViewInit  {
 
  clientes:Cliente[] = [];
 
  constructor( private router:Router,private activatedRoute:ActivatedRoute, private dataService: DataService){
  

  }
  ngAfterViewInit(): void {
   
      this.generatePDF();
      this.router.navigate(['/clientes']);
      
  
  }
  ngOnInit(): void {
    

   
   
   
    this.dataService.datos$.subscribe((datosRecibidos: Cliente[]) => {
      this.clientes = datosRecibidos;
      console.log('Dato enviado:', this.clientes);
    });

  }
 
 
 
  generatePDF() {

   
    const data: HTMLElement = document.getElementById('pdfContent') as HTMLElement;

    html2canvas(data).then(canvas => {
      const imgWidth = 208; // Ancho de la imagen en el PDF
      const imgHeight = canvas.height * imgWidth / canvas.width; // Mantener la proporción de la imagen

      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4'); // Crear un documento PDF tamaño A4
      const position = 0;

      // Agregar la imagen capturada al PDF
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);

      // Descargar el PDF con el nombre especificado
      pdf.save('document.pdf');
    });
  }

}
