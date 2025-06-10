import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { consultarProc, resPro, terecero } from '../types';
import { catchError, map, Observable, of} from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CertificadoService {
  private http = inject(HttpClient);
  private urlTercero = environment.tercero_url;
  private urlCIR = environment.CIR_url;
  private urlpdf= environment.pdf_url;
  private identificacion:string=''
  constructor() { }

  consultaTercero(documento:string):Observable<terecero|null>{
    const url = `${this.urlTercero}${documento}`;
    return this.http.get<terecero>(url).pipe(
      map(response=>{
          this.identificacion=documento
          return response
        }
      ),
      catchError(error => {
        const detalle = this.getErrorMessage(error);
        if (detalle && detalle.includes('No hay usuario con cedula')) {
          return of(null);
        }

        throw new Error(detalle || 'Error en la consulta');
      })
    );
  }

  getdocumento(){
    return this.identificacion
  }


  consultarProcedimiento(info:consultarProc){
    const url = `${this.urlCIR}`;
    return this.http.post<resPro[]>(url,info).pipe(
      map(res=>res),
      catchError(error=> {
        console.log(error)
        throw new Error(error)
      })
    )
  }
  
  consultarPDF(){
    return this.http.get(this.urlpdf,{
      responseType: 'blob'
    }).pipe(
      map(res=>{
          const blob = new Blob([res], { type: 'application/pdf' });
          const url = window.URL.createObjectURL(blob);
          window.open(url);
        }
      ),
      catchError(error=>{
        console.log(JSON.stringify(error))
        throw new Error(error)
      })
    )
    
  }


  private getErrorMessage(error: any):string {
    if (error?.error?.detail && typeof error.error.detail === 'string') {
      return error.error.detail;
    }
    return 'Error desconocido'
  }

}
