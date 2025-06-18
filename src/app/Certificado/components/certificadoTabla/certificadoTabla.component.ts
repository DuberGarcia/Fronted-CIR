import { Component, input } from '@angular/core';
import { resPro } from '../../../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'certificado-tabla',
  imports: [CommonModule],
  templateUrl: './certificadoTabla.component.html',
  styleUrl: './certificadoTabla.component.css',
})
export class CertificadoTablaComponent { 
  cir=input<resPro[]>([])

  
}
