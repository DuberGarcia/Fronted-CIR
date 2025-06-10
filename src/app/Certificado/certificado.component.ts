import { Component, signal} from '@angular/core';
import { BuscadorTerceroComponent } from './components/buscadorTercero/buscadorTercero.component';
import { CertificadoTablaComponent } from './components/certificadoTabla/certificadoTabla.component';
import { FormsModule } from '@angular/forms';
import { consultarProc } from '../types';


@Component({
  selector: 'app-certificado',
  imports: [BuscadorTerceroComponent,CertificadoTablaComponent,FormsModule],
  templateUrl: './certificado.component.html',
  styleUrl: './certificado.component.css',
})

export class CertificadoComponent { 
  
  anioInicial=1990;
  anioActual=new Date().getFullYear();
  anios: number[] = Array.from({ length: this.anioActual - this.anioInicial + 1 }, (_, i) => this.anioInicial + i);
  
  vigencia:number=new Date().getFullYear()-1
  myCheckboxValue:boolean=false

  consultar(){
    const asoEspecial=(this.myCheckboxValue)?'Y':'N'
    const fecha=`${this.vigencia}-12-31`
    const datos:consultarProc={
      fecha:fecha,
      usuario:"ADMIN",
      indasoespecial:asoEspecial
    }
    console.log(datos)
  }
}
