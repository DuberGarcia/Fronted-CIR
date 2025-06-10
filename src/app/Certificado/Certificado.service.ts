import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { terecero } from '../types';
import { catchError, map, Observable, of} from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CertificadoService {
  private http = inject(HttpClient);
  private urlTercero = environment.tercero_url;

  constructor() { }

  consultaTercero(documento:string):Observable<terecero|null>{
    const url = `${this.urlTercero}${documento}`;
    return this.http.get<terecero>(url).pipe(
      map(response=>response),
      catchError(error => {

        const detalle = this.getErrorMessage(error);
        if (detalle && detalle.includes('No hay usuario con cedula')) {
          return of(null);
        }

        throw new Error(detalle || 'Error en la consulta');
      })
    );
  }
  


  private getErrorMessage(error: any):string {
    if (error?.error?.detail && typeof error.error.detail === 'string') {
      return error.error.detail;
    }
    return 'Error desconocido'
  }

}
