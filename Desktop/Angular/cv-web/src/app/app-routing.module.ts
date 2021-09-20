import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { ContactoComponent } from './components/contacto/contacto.component';

// modules

const routes: Routes = [
    {
        path:'',
        component: HomeComponent,
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'education',
        component: EducationComponent
    },
    {
        path: 'experience',
        component: ExperienceComponent
    },
    {
        path: 'portafolio',
        component: PortafolioComponent
    },
    {
        path: 'contact',
        component: ContactoComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [
      RouterModule.forRoot( routes )
    ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule { }