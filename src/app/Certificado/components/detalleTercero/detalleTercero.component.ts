import { Component, inject, input } from '@angular/core';
import { CertificadoService } from '../../../services/Certificado.service';
import { terecero } from '../../../types';

@Component({
  selector: 'detalle-tercero',
  imports: [],
  templateUrl: './detalleTercero.component.html',
  styleUrl: './detalleTercero.component.css',
})
export class DetalleTerceroComponent {
  service=inject(CertificadoService)
  usuario=input<string>()
 }
