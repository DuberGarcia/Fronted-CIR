import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { terecero } from '../types';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CertificadoService {
  private http = inject(HttpClient)


  constructor() { }

  consultaTercero(documento:string):Observable<terecero>{
    const url = `http://127.0.0.1:8000/Consultar?documento=${documento}`;
    return this.http.get<terecero>(url);
  }
  
}
