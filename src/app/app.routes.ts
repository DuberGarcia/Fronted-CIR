import { Routes } from '@angular/router';
import { CertificadoComponent } from './Certificado/certificado.component';

export const routes: Routes = [
    {
        path:"Certificado",
        component:CertificadoComponent
    },
    {
        path:"**",
        redirectTo:"Certificado"
    }
];
