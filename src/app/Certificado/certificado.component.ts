import { Component, inject } from '@angular/core';
import { BuscadorTerceroComponent } from './components/buscadorTercero/buscadorTercero.component';
import { CertificadoTablaComponent } from './components/certificadoTabla/certificadoTabla.component';
import { CertificadoService } from './Certificado.service';

@Component({
  selector: 'app-certificado',
  imports: [BuscadorTerceroComponent,CertificadoTablaComponent],
  templateUrl: './certificado.component.html',
  styleUrl: './certificado.component.css',
})
export class CertificadoComponent { 
  service = inject(CertificadoService)

  constructor(){
    this.service.prueba()
  }
}
