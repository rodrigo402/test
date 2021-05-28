import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [
 
    {
      path: '',
      component: PorPaisComponent,
      pathMatch: 'full'
    },
    {
        path: 'region',
        component: PorRegionComponent,
    },
    {
        path: 'capital',
        component: PorCapitalComponent,
    },
    {
        // espera un arguento pais/
        path: 'pais/:id',
        component: VerPaisComponent
    },
    {
        path: '**',
        redirectTo: ''
        // component: 404component en caso de tener una pagina de error para cuando el usuario quiere ir a una pag que no existe
    }
];


@NgModule({
    imports: [
    RouterModule.forRoot( routes )
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule {}