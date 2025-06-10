import { Component, inject, signal} from '@angular/core';
import { BuscadorTerceroComponent } from './components/buscadorTercero/buscadorTercero.component';
import { CertificadoTablaComponent } from './components/certificadoTabla/certificadoTabla.component';
import { FormsModule } from '@angular/forms';
import { consultarProc, resPro } from '../types';
import { CertificadoService } from './Certificado.service';


@Component({
  selector: 'app-certificado',
  imports: [BuscadorTerceroComponent,CertificadoTablaComponent,FormsModule],
  templateUrl: './certificado.component.html',
  styleUrl: './certificado.component.css',
})

export class CertificadoComponent { 
  private service=inject(CertificadoService)
  anioInicial=1990;
  anioActual=new Date().getFullYear();
  anios: number[] = Array.from({ length: this.anioActual - this.anioInicial + 1 }, (_, i) => this.anioInicial + i);
  cir=signal<resPro[]>([])
  vigencia:number=new Date().getFullYear()-1
  myCheckboxValue:boolean=false

  consultar(){
    const documento=this.service.getdocumento()
    if(documento=='') return 
    const asoEspecial=(this.myCheckboxValue)?'Y':'N'
    const fecha=`${this.vigencia}-12-31`
    const datos:consultarProc={
      fecha:fecha,
      identificacion:documento,
      usuario:"ADMIN",
      indasoespecial:asoEspecial
    }
    console.log(datos)
    const res= this.service.consultarProcedimiento(datos)
    res.subscribe({
      next:(respt)=>{
        console.log(respt)
        this.cir.set(respt)
      },
      error: (error)=>{
        console.log(error)
      }
    })
  }

  pdf(){
    const res=this.service.consultarPDF()
    res.subscribe({
      next:(respt=>respt)
    })
  }
}
