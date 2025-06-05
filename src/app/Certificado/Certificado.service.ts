import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CertificadoService {

  private http = inject(HttpClient)

  constructor() { }

  prueba(){
    const res=this.http.get("http://127.0.0.1:8000/")

    return res.subscribe(respt=>{
      console.log('Response status:',respt);
    })
  }

}
