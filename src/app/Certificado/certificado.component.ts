import { Component } from '@angular/core';
import { BuscadorTerceroComponent } from './components/buscadorTercero/buscadorTercero.component';
import { CertificadoTablaComponent } from './components/certificadoTabla/certificadoTabla.component';

@Component({
  selector: 'app-certificado',
  imports: [BuscadorTerceroComponent,CertificadoTablaComponent],
  templateUrl: './certificado.component.html',
  styleUrl: './certificado.component.css',
})
export class CertificadoComponent { 
  
}
