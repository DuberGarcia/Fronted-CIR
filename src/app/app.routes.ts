import { Routes } from '@angular/router';
import { CertificadoComponent } from './modules/Certificado/certificado.component';

export const routes: Routes = [
    {
        path:"Home",
        loadComponent:() => import('../app/home/home.component').then( m => m.default)
    },
    {
        path:"Certificado",
        loadComponent:()=>import('../app/modules/Certificado/certificado.component').then(m =>m.CertificadoComponent)
    },
    {
        path:"**",
        redirectTo:"Home"
    }
];
