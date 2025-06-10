import { Component, inject } from '@angular/core';
import { DetalleTerceroComponent } from '../detalleTercero/detalleTercero.component';
import { CertificadoService } from '../../Certificado.service';
import { FormsModule } from '@angular/forms';
import { terecero } from '../../../types';

@Component({
  selector: 'buscador-tercero',
  imports: [DetalleTerceroComponent,FormsModule],
  templateUrl: './buscadorTercero.component.html',
  styleUrl: './buscadorTercero.component.css',
})
export class BuscadorTerceroComponent {
  private service=inject(CertificadoService)
  usuario?:terecero | boolean
  documento:string='';
  nombrecompleto:string=''
  consultar(){
    if (this.documento != ''){
      this.nombrecompleto=''
      const res=this.service.consultaTercero(this.documento);
      res.subscribe({ 
        next:(res)=>{
          if(res===null){
            this.usuario=true
            this.nombrecompleto=`no se encontro usuario con cedula ${this.documento}`
          }else{
            this.usuario=res
            this.nombrecompleto=`${this.usuario?.BeneficiarioPrimerNombre} ${this.usuario?.BeneficiarioSegundoNombre} ${this.usuario?.BeneficiarioPrimerApellido} ${this.usuario?.BeneficiarioSegundoApellido}`
          }
        }
      })
    }
  }
}
