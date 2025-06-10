import { Component, input } from '@angular/core';
import { resPro } from '../../../types';

@Component({
  selector: 'certificado-tabla',
  imports: [],
  templateUrl: './certificadoTabla.component.html',
  styleUrl: './certificadoTabla.component.css',
})
export class CertificadoTablaComponent { 
  cir=input<resPro[]>([])

  
}
